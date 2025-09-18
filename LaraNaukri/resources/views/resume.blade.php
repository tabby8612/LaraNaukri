<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @vite('resources/css/app.css')
</head>

<body>
    <div class="mx-auto flex  bg-green-50/50">
        <div id="sidebar" class="flex w-[35%] flex-col gap-3 bg-green-700 p-3">
            @php
                $imagePath = public_path("/storage/{$candidate['image_path']}");
                $imageType = pathinfo($imagePath, PATHINFO_EXTENSION);
                $imageData = file_get_contents($imagePath);
                $profileImg = 'data:image/' . $imageType . ';base64,' . base64_encode($imageData);
            @endphp
            <div class="mx-auto">
                <img src={{$profileImg}} alt={{ $candidate["first_name"] }}
                    class="size-36 rounded-full border-4 border-white" />
            </div>

            <x-resume.contact :phone="$candidate['phone']" :mobile="$candidate['mobile']"
                :address="$candidate['address']" :city="$candidate['city']['name']"
                :country="$candidate['country']['name']" :email="$candidate['user']['email']" />

            @php
                $years = round($candidate['total_experience'], 1);
                $age = round($candidate['age'], 0);

            @endphp
            <x-resume.experience-years :experience="$years" />

            <x-resume.personal-details :dateOfBirth="$candidate['date_of_birth']" :age="$age"
                :gender="$candidate['gender']['name']" :martialStatus="$candidate['marital_status']['name']"
                :functionalArea="$candidate['category']['name']" :industry="$candidate['industry']['name']"
                :careerLevel="$candidate['career_level']['name']" :currentSalary="$candidate['salary_from']"
                :expectationSalary="$candidate['salary_to']" :nationality="$candidate['nationality']['name']" />

            <x-resume.skills-details :skills="$candidate['skills']" />

            <hr class="my-3 h-0.5 rounded-2xl bg-white/50" />
            <p class="text-center text-sm font-bold text-yellow-300">
                {{ $candidate['open_to_work'] ? 'Immediately' : 'Not Immediately' }} Available For Work

            </p>
        </div>
        <div id="content" class="w-[65%]">
            <div class="flex justify-center bg-primary py-7 text-white">
                <p class="font-montserrat text-4xl font-bold">
                    {{ $candidate['first_name'] }} {{ $candidate['last_name'] }}
                </p>
            </div>

            <div class="p-4">
                <h1 class="font-montserrat text-2xl font-bold">Objective</h1>
                <hr class="my-2" />
                <p>{{ $candidate['summary'] }}</p>
                <div class="mt-5">
                    <h1 class="font-montserrat text-2xl font-bold">Experiences</h1>
                    <hr class="my-2" />
                    <x-resume.experience-card :experiences="$candidate['experiences']" />

                </div>
                <div class="mt-5">
                    <h1 class="font-montserrat text-2xl font-bold">Education</h1>
                    <hr class="my-2" />
                    <x-resume.education-card :educations="$candidate['educations']" />

                </div>
                <div class="mt-5">
                    <h1 class="font-montserrat text-2xl font-bold">Languages</h1>
                    <hr class="my-2" />
                    <div class="mt-5 flex gap-2">
                        @foreach ($candidate['languages'] as $language)
                            <div class="gap-0 border-gray-400 bg-gray-200 px-4 py-3 rounded-2xl border-2">
                                <p class="text-center text-sm font-bold">{{ $language['name'] }}</p>
                                <p class="text-center text-sm">{{ $language['pivot']['language_level'] }}</p>
                            </div>

                        @endforeach

                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>