<?php

namespace App\Http\Controllers;

use App\CompanyService;
use App\Http\Requests\CompanyProfileRequest;
use App\JobService;
use App\Models\Candidate;
use App\Models\Company;
use App\Models\Industry;
use App\Models\Job;
use App\Models\User;
use App\Service\CandidateService;
use Barryvdh\Debugbar\Facades\Debugbar;

use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Inertia;
use Storage;

use function PHPUnit\Framework\arrayHasKey;

class CompanyController extends Controller {
    //
    //--- Dependency Injection
    public function __construct(
        protected CompanyService $companyService,
        protected JobService $jobService,
        protected CandidateService $candidateService) {
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
        return Inertia::render("employer/dashboard");
    }

    public function showEditPage() {

        $company = $this->companyService->findCompany(Auth::user()?->id, "user");

        return Inertia::render("employer/editProfile", compact("company"));
    }

    public function store(CompanyProfileRequest $companyProfileRequest) {
        // dd($companyProfileRequest->all());

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
        Arr::pull($validated, "image_path");

        $this->companyService->updateCompanyProfile(Auth::id(), $validated);


        return to_route("employer.editProfile")->with("message", "Successfully Updated");
    }





}
