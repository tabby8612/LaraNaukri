<?php

namespace App\Http\Controllers;

use App\CompanyService;
use App\Enums\MessageStatusEnum;
use App\Http\Requests\CompanyProfileRequest;
use App\JobService;
use App\Models\Candidate;
use App\Models\ChatMessage;
use App\Models\Company;
use App\Models\Industry;
use App\Models\Job;
use App\Models\User;
use App\Service\CandidateService;
use App\Service\PackageServices;
use App\Service\PaymentHistoryServices;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB as FacadesDB;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Stevebauman\Purify\Facades\Purify;

class CompanyController extends Controller {
    //
    //--- Dependency Injection
    public function __construct(
        protected CompanyService $companyService,
        protected JobService $jobService,
        protected CandidateService $candidateService,
        protected PackageServices $packageServices,
        protected PaymentHistoryServices $paymentHistoryServices,


    ) {
    }

    //---- API CALLS
    /**
     * 
     * api calls to retrieve top companies
     * @return \Illuminate\Http\JsonResponse
     */
    public function topCompanies() {
        $topCompanies = Job::select('company_id', FacadesDB::raw('count(*) as open_jobs'))
            ->where('is_open', 1)
            ->groupBy('company_id')
            ->orderByDesc('open_jobs')
            ->with('companies:id,name,image_path,location,slug') // this is valid here ✅
            ->get()
            ->mapWithKeys(function ($job, $index) {
                return [
                    $index => [
                        "name" => $job->companies->name,
                        "id" => $job->companies->id,
                        "open_jobs" => $job->open_jobs,
                        "image_path" => $job->companies->image_path,
                        "location" => $job->companies->location,
                        "slug" => $job->companies->slug
                    ]
                ];
            });

        return response()->json([
            'data' => $topCompanies,
        ]);
    }




    //---- WEB VIEW CALLS //

    public function show(Request $request) {
        $company = $this->companyService->findCompanyWithSlug($request->slug);

        $companyID = $company['id'];
        $relations = ["city", "category", "companies:id,name,image_path"];

        $openJobs = $this->jobService->companyOpenJobs($companyID, $relations);

        /**
         * @var User
         */
        $user = Auth::user();
        $isFollower = $user?->isCandidate() ? $this->candidateService->hasFollowedCompany(Auth::id(), $companyID) : false;

        return Inertia::render("company-view", [
            "companyData" => $company,
            "openJobs" => $openJobs,
            "isFollower" => $isFollower
        ]);
    }

    public function index(Request $request) {
        $filters = $request->only(["name", "country", "city", "industries"]);

        $companiesQuery = Company::with("industry")->withCount("jobs");

        if (isset($filters['name'])) {
            $companiesQuery->where("name", "like", "%{$filters['name']}%");
        }

        if (isset($filters['country']) && isset($filters['city'])) {
            $companiesQuery->where("location", "like", "%{$filters['city']}, {$filters['country']}%");
        }

        if (isset($filters['country'])) {
            $companiesQuery->where("location", "like", "%{$filters['country']}%");
        }

        if (isset($filters['industries'])) {
            $industries = $filters['industries'];

            foreach ($industries as $key => $value) {
                $selectedIndustryID = Industry::where("name", "like", "%$value%")->first("id")->id;
                $companiesQuery->orwhere("industry_id", "=", $selectedIndustryID);
            }
        }

        $companies = $companiesQuery->get()->toArray();

        $industries = FacadesDB::table("companies")
            ->select("industries.id", "industries.name", FacadesDB::raw("COUNT(*) as companies_count"))
            ->join("industries", "industries.id", "=", "companies.industry_id")
            ->groupBy(["industries.id", "industries.name"])
            ->get()
            ->toArray();


        return Inertia::render("companies", [
            "companiesData" => count($companies) ? $companies : [],
            "industriesData" => count($industries) ? $industries : []
        ]);
    }

    public function dashboard() {

        $jobPackages = $this->packageServices->getPackages("employer");
        $cvPackage = $this->packageServices->getPackages("cv_search");

        $purchasedPackages = $this->paymentHistoryServices->getPurchasedPackages(Auth::id());

        $company = $this->companyService->findCompany(Auth::id(), [], ['candidates', 'jobs']);

        $unreadMessageCount = ChatMessage::where('receiver_id', Auth::id())->where('status', MessageStatusEnum::UNREAD)->count();

        return Inertia::render("employer/dashboard", [
            "jobPackages" => $jobPackages->toArray(),
            "cvPackages" => $cvPackage,
            "PurchasedJobPackages" => $purchasedPackages['jobPackages'],
            "PurchasedCVPackages" => $purchasedPackages['cvPackages'],
            "followersCount" => $company['candidates_count'],
            'jobsCount' => $company['jobs_count'],
            'unreadMessageCount' => $unreadMessageCount

        ]);
    }

    public function showEditPage() {

        $company = $this->companyService->findCompany(Auth::user()?->id, "user");

        return Inertia::render("employer/editProfile", compact("company"));
    }

    public function store(CompanyProfileRequest $companyProfileRequest) {

        $validated = $companyProfileRequest->validated();
        $userID = Auth::id();

        $newEmail = Arr::pull($validated, "email");
        $newPassword = Arr::pull($validated, "password");

        if (isset($newEmail)) $this->companyService->updateEmail($userID, $newEmail);
        if (isset($newPassword)) $this->companyService->updatePassword($userID, $newPassword);

        if ($companyProfileRequest->hasFile("image_path")) {
            $file = Arr::pull($validated, "image_path");
            $this->companyService->updateFile(Auth::id(), $file);
        }

        $validated["user_id"] = $userID;
        $validated["description"] = Purify::clean($validated["description"]);
        Arr::pull($validated, "image_path");

        $this->companyService->updateCompanyProfile(Auth::id(), $validated);

        return to_route("employer.editProfile")->with("message", "Successfully Updated");
    }

    public function manageJobs() {

        $relations = ["jobs", "industry", "jobs.companies", "jobs.applications", "jobs.applications.candidate"];

        $company = $this->companyService->findCompany(Auth::id(), $relations);
        $jobs = [];

        if (isset($company["jobs"])) {
            $jobs = $this->companyService->jobs($company["jobs"]);
        }

        return Inertia::render("employer/manageJobs", [
            "activeJobs" => $jobs['activeJobs'] ?? [],
            "expiredJobs" => $jobs['expiredJobs'] ?? [],
        ]);
    }

    public function unlockedUsers() {

        $company = $this->companyService->findCompany(Auth::id(), ["candidatesUnlocked.country", "candidates.country"]);
        $unlockedCandidates = $company['candidates_unlocked'];

        return Inertia::render("employer/unlockedUsers", compact('unlockedCandidates'));
    }

    public function followers() {
        $company = $this->companyService->findCompany(Auth::id(), ['candidates', 'candidates.country']);

        return Inertia::render("employer/followings", ['followers' => $company['candidates']]);
    }

    public function userProfile(User $user) {

        if (!$user->isCandidate()) abort(404);

        $relations = [
            "city:id,name", "state:id,name", "country:id,name", "user:id,email", "experiences",
            "gender:id,name", "maritalStatus", "category:name,id", "industry:name,id", "careerLevel:name,id",
            "nationality:id,name", "skills.skill:id,name", "skills.experience:id,name", "experiences.country", "experiences.city",
            "educations.country", "educations.city", "languages", "projects"
        ];

        $candidate = $this->candidateService->fetchCandidate($user->id, $relations);

        //-- Calculating Number of Experience Years
        $candidate["total_experience"] = $this->candidateService->getTotalYearsOfExperience($candidate['experiences']);

        //-- Calculating Age
        $candidate["age"] = round(Carbon::parse($candidate["date_of_birth"])->diffInYears(now()), 0);

        //-- Has Company Unlocked Candidate
        $company = Company::where("user_id", Auth::id())->first();
        $hasUnlocked = $company->candidatesUnlocked->contains($candidate['id']);

        return Inertia::render("employer/user-profile", compact("candidate", "hasUnlocked"));
    }

    public function unlockUser(Candidate $candidate) {
        $reachCVQuota = $this->paymentHistoryServices->reachCVQuota(Auth::id());

        if ($reachCVQuota) return back()->with("message", "You have used your CV Quota");

        $company = Company::where('user_id', Auth::id())->first();
        $company->candidatesUnlocked()->attach($candidate->id);

        $this->paymentHistoryServices->increseCVQuota(Auth::id());

        return back()->with('message', "Candidate {$candidate->first_name} Successfully Unlocked. Now You Can Download His CV or Message Him");

    }

    public function logout() {

        Auth::logout();

        Session::regenerateToken();

        return to_route('home');
    }

}
