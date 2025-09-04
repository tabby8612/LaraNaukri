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

const experiences = [
    {
        title: 'UI UX Designer',
        country: 'Namibia',
        city: 'Maltahohe',
        working_from: '13 Dec, 2009',
        working_to: '07 Feb, 2012',
        currentlyWorking: false,
    },
    {
        title: 'Laravel Developer',
        country: 'Pakistan',
        city: 'Karachi',
        working_from: '13 Dec, 2009',
        working_to: '07 Feb, 2012',
        currentlyWorking: true,
    },
];

const educations = [
    {
        title: 'Matriculation/O-Level',
        degree: 'Matric in Science',
        country: 'New Zealand',
        city: 'Palmerston North',
        institution: 'Matric',
        year: '2005',
    },
    {
        title: 'Matriculation/O-Level',
        degree: 'Matric in Science',
        country: 'New Zealand',
        city: 'Palmerston North',
        institution: 'Matric',
        year: '2005',
    },
];

const languages = [
    {
        id: '1',
        name: 'English',
        language_level: 'Expert',
    },
    {
        id: '2',
        name: 'Urdu',
        language_level: 'Expert',
    },
];

export default function DownloadResume() {
    return (
        <AppCandidateLayout titleText="Download Resume" page="download-cv" displaySearch={false}>
            <div className="flex justify-end px-3">
                <Button className="px-6 py-5 tracking-widest text-white">Download</Button>
            </div>
            <div className="mx-auto my-10 flex w-11/12 bg-green-50/50">
                <div id="sidebar" className="flex w-[35%] flex-col gap-3 bg-green-700 p-3">
                    <ImagePreview image="https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437874-596.jpg" name="Job Seeker" />
                    <ContactDetails
                        phone="1234567890"
                        mobile="1234567890"
                        address="House no. 165, Amynabad Society"
                        city="Islamabad"
                        country="Pakistan"
                        email="seeker@jobsportal.com"
                    />

                    <ExperienceDetails experience={6} />

                    <PersonalDetails
                        dateOfBirth="9th of June 1989"
                        age={36}
                        gender="Male"
                        martial_status="Single"
                        functional_area="Information Technology"
                        industry="Advertising/PR"
                        career_level="Experienced Professional"
                        currentSalary="5000"
                        expectationSalary="12000"
                        nationality="Pakistani"
                    />

                    <SkillsDetails skills={['Adobe Photoshop', 'HTML', 'PHP', 'Laravel']} />

                    <hr className="my-3 h-0.5 rounded-2xl bg-white/50" />
                    <p className="text-center text-lg font-bold text-yellow-300">Immediate Available For Work</p>
                </div>
                <div id="content" className="w-[65%]">
                    <div className="flex justify-center bg-primary py-7 text-white">
                        <p className="font-montserrat text-4xl font-bold">Job Seeker</p>
                    </div>
                    <div className="p-4">
                        <h1 className="font-montserrat text-2xl font-bold">Objective</h1>
                        <hr className="my-2" />
                        <p>
                            Hello! I'm Sharjeel, A Passionate UI/UX Designer and Frontend Developer with a strong technical background. I bring
                            innovation and attention to detail to create visually stunning, user-centric designs. Proactive and disciplined, I excel
                            in ensuring maximum accessibility and elevating customer experiences throughout the development process. Let's redefine
                            digital interactions together.
                        </p>
                        <div className="mt-5">
                            <h1 className="font-montserrat text-2xl font-bold">Experiences</h1>
                            <hr className="my-2" />
                            <ExperienceCard experiences={experiences} />
                        </div>
                        <div className="mt-5">
                            <h1 className="font-montserrat text-2xl font-bold">Education</h1>
                            <hr className="my-2" />
                            <EducationCard educations={educations} />
                        </div>
                        <div className="mt-5">
                            <h1 className="font-montserrat text-2xl font-bold">Languages</h1>
                            <hr className="my-2" />
                            <div className="mt-5 flex gap-2">
                                {languages.map((language) => (
                                    <Card className="gap-0 border-gray-400 bg-gray-200 px-4 py-3">
                                        <p className="text-center text-sm font-bold">{language.name}</p>
                                        <p className="text-center text-sm">{language.language_level}</p>
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
