import { Card } from '@/components/ui/card';
import ContactDetails from '@/components/ui/cards/Candidate/ContactDetails';
import EducationCard from '@/components/ui/cards/Candidate/EducationCard';
import ExperienceCard from '@/components/ui/cards/Candidate/ExperienceCard';
import ExperienceDetails from '@/components/ui/cards/Candidate/ExperienceDetails';
import ImagePreview from '@/components/ui/cards/Candidate/ImagePreview';
import PersonalDetails from '@/components/ui/cards/Candidate/PersonalDetails';
import SkillsDetails from '@/components/ui/cards/Candidate/SkillsDetails';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Candidate } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { DownloadIcon } from 'lucide-react';

export default function DownloadResume() {
    const { candidate } = usePage<{ candidate: Candidate }>().props;

    return (
        <AppCandidateLayout titleText="Download Resume" page="download-cv" displaySearch={false}>
            <Head title="Download Your Resume" />
            {candidate.resume_path && (
                <div className="flex justify-end px-3">
                    <a
                        className="flex h-11 w-44 cursor-pointer items-center justify-center gap-3 rounded-lg bg-primary py-5 font-bold tracking-widest text-white shadow-lg disabled:bg-gray-400"
                        href={`/storage/${candidate.resume_path}`}
                        target="_blank"
                    >
                        <DownloadIcon />
                        <p>Download</p>
                    </a>
                </div>
            )}

            <div className="mx-auto my-10 flex w-11/12 bg-green-50/50">
                <div id="sidebar" className="flex w-[35%] flex-col gap-3 bg-green-700 p-3">
                    <ImagePreview image={candidate.image_path} name={`${candidate.first_name} ${candidate.last_name}`} />
                    <ContactDetails
                        phone={candidate.phone ?? 'Not Set'}
                        mobile={candidate.mobile ?? 'Not Set'}
                        address={candidate.address ?? 'Not Set'}
                        city={candidate.city?.name ?? 'Not Set'}
                        country={candidate.country?.name ?? 'Not Set'}
                        email={candidate.user.email}
                    />

                    <ExperienceDetails experience={+candidate.total_experience.toFixed(1)} />

                    <PersonalDetails
                        dateOfBirth={candidate.date_of_birth}
                        age={+candidate.age.toFixed(0)}
                        gender={candidate.gender?.name ?? 'Not Set'}
                        martial_status={candidate.marital_status?.name ?? 'Not Set'}
                        functional_area={candidate.category?.name ?? 'Not Set'}
                        industry={candidate.industry?.name ?? 'Not Set'}
                        career_level={candidate.career_level?.name ?? 'Not Set'}
                        currentSalary={`${candidate.salary_from}`}
                        expectationSalary={`${candidate.salary_to}`}
                        nationality={candidate.nationality?.name ?? 'Not Set'}
                    />

                    <SkillsDetails skills={candidate.skills} />

                    <hr className="my-3 h-0.5 rounded-2xl bg-white/50" />
                    <p className="text-center text-sm font-bold text-yellow-300">
                        {candidate.open_to_work ? 'Immediately' : 'Not Immediately'} Available For Work
                    </p>
                </div>
                <div id="content" className="w-[65%]">
                    <div className="flex justify-center bg-primary py-7 text-white">
                        <p className="font-montserrat text-4xl font-bold">
                            {candidate.first_name} {candidate.last_name}
                        </p>
                    </div>
                    <div className="p-4">
                        <h1 className="font-montserrat text-2xl font-bold">Objective</h1>
                        <hr className="my-2" />
                        <div dangerouslySetInnerHTML={{ __html: candidate.summary ?? '😢 Not Set' }} />

                        <div className="mt-5">
                            <h1 className="font-montserrat text-2xl font-bold">Experiences</h1>
                            <hr className="my-2" />
                            <ExperienceCard experiences={candidate.experiences} refreshExperiences={() => {}} viewOnly={true} />
                        </div>
                        <div className="mt-5">
                            <h1 className="font-montserrat text-2xl font-bold">Education</h1>
                            <hr className="my-2" />
                            <EducationCard educations={candidate.educations} refreshFn={() => {}} viewOnly={true} />
                        </div>
                        <div className="mt-5">
                            <h1 className="font-montserrat text-2xl font-bold">Languages</h1>
                            <hr className="my-2" />
                            <div className="mt-5 flex gap-2">
                                {candidate.languages.length > 0 ? (
                                    candidate.languages.map((language) => (
                                        <Card className="gap-0 border-gray-400 bg-gray-200 px-4 py-3" key={language.id}>
                                            <p className="text-center text-sm font-bold">{language.name}</p>
                                            <p className="text-center text-sm">{language.pivot.language_level}</p>
                                        </Card>
                                    ))
                                ) : (
                                    <div className="text-center text-lg">😢'No Languages To Display. Start Adding them to show it here'</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppCandidateLayout>
    );
}
