import { Card } from '@/components/ui/card';
import ContactDetails from '@/components/ui/cards/Candidate/ContactDetails';
import EducationCard from '@/components/ui/cards/Candidate/EducationCard';
import ExperienceCard from '@/components/ui/cards/Candidate/ExperienceCard';
import ExperienceDetails from '@/components/ui/cards/Candidate/ExperienceDetails';
import ImagePreview from '@/components/ui/cards/Candidate/ImagePreview';
import PersonalDetails from '@/components/ui/cards/Candidate/PersonalDetails';
import SkillsDetails from '@/components/ui/cards/Candidate/SkillsDetails';
import { Button } from '@/components/ui/UnusedUI/button';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Candidate } from '@/types';
import { usePage } from '@inertiajs/react';
import { DownloadIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DownloadResume() {
    const [PDFfile, setPDFfile] = useState<{ status: 'done' | 'pending'; resumePath: string | null } | undefined>(undefined);
    const [isPending, setIsPending] = useState('');

    const { candidate } = usePage<{ candidate: Candidate }>().props;

    useEffect(() => {
        if (PDFfile?.status === 'pending') {
            setIsPending('pending');

            setTimeout(() => {
                setIsPending('');
            }, 10000);
        }
    }, [PDFfile?.status]);

    function handleResume() {
        async function fetchPDF() {
            const response = await fetch(route('candidate.viewResume'));
            const data = await response.json();

            setPDFfile(data);
        }

        fetchPDF();
    }

    return (
        <AppCandidateLayout titleText="Download Resume" page="download-cv" displaySearch={false}>
            <div className="flex justify-end px-3">
                <Button
                    className="flex h-11 w-44 cursor-pointer gap-3 py-5 font-bold tracking-widest text-white shadow-lg disabled:bg-gray-400"
                    onClick={handleResume}
                    disabled={isPending === 'pending'}
                >
                    <DownloadIcon />
                    <p>Download</p>
                </Button>
            </div>
            {PDFfile &&
                (PDFfile.status === 'done' ? (
                    <div className="flex justify-end px-3">
                        <a href={`/storage/${PDFfile.resumePath}`} className="text-blue-600 underline underline-offset-4" target="_blank">
                            Click Here to Download Your Resume
                        </a>
                    </div>
                ) : (
                    <div className="flex justify-end px-3">Your PDF File Is Being Generated</div>
                ))}

            <div className="mx-auto my-10 flex w-11/12 bg-green-50/50">
                <div id="sidebar" className="flex w-[35%] flex-col gap-3 bg-green-700 p-3">
                    <ImagePreview image={candidate.image_path} name={`${candidate.first_name} ${candidate.last_name}`} />
                    <ContactDetails
                        phone={candidate.phone}
                        mobile={candidate.mobile}
                        address={candidate.address}
                        city={candidate.city.name}
                        country={candidate.country.name}
                        email={candidate.user.email}
                    />

                    <ExperienceDetails experience={+candidate.total_experience.toFixed(1)} />

                    <PersonalDetails
                        dateOfBirth={candidate.date_of_birth}
                        age={+candidate.age.toFixed(0)}
                        gender={candidate.gender.name}
                        martial_status={candidate.marital_status.name}
                        functional_area={candidate.category.name}
                        industry={candidate.industry.name}
                        career_level={candidate.career_level.name}
                        currentSalary={`${candidate.salary_from}`}
                        expectationSalary={`${candidate.salary_to}`}
                        nationality={candidate.nationality.name}
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
                        <p>{candidate.summary}</p>
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
                                {candidate.languages.map((language) => (
                                    <Card className="gap-0 border-gray-400 bg-gray-200 px-4 py-3" key={language.id}>
                                        <p className="text-center text-sm font-bold">{language.name}</p>
                                        <p className="text-center text-sm">{language.pivot.language_level}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppCandidateLayout>
    );
}
