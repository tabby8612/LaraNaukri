import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import CompanyCharacteristic from '@/components/ui/cards/Characteristic';
import CompanyIntro from '@/components/ui/cards/CompanyIntro';
import { default as DescriptionCard } from '@/components/ui/cards/DescriptionCard';
import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppLayout from '@/layouts/app/app-layout';
import { Company, FilteredJobs } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { BriefcaseBusinessIcon, Building2Icon, CakeIcon, Landmark, Users, VerifiedIcon } from 'lucide-react';

type Props = {
    companyData: Company;
    openJobs: FilteredJobs[];
    isFollower: boolean;
};
export default function CompanyView() {
    const props = usePage<Props>().props;
    const { companyData, openJobs, isFollower } = props;

    return (
        <AppLayout page="">
            <Head>
                <title>{`${companyData.name}'s Company Page`}</title>
                <meta name="description" content={`${companyData.name} company's page`} />
            </Head>
            <section className="mx-auto mt-18 flex w-10/12 flex-col gap-10 md:flex-row">
                <div className="md:w-7/12">
                    <CompanyIntro companyData={companyData} isFollower={isFollower} />
                    <DescriptionCard type="Company" description={companyData.description ?? 'Description not set'} />
                </div>

                <div className="md:w-5/12">
                    <Card className="border-stone-200">
                        <CardTitle className="px-6 font-montserrat text-lg font-bold text-primary">Company Detail</CardTitle>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                                <CompanyCharacteristic Icon={VerifiedIcon} name="Verified" value="Yes" />
                                <CompanyCharacteristic Icon={Users} name="Company Size" value={companyData.company_size ?? 'Not Set'} />
                                <CompanyCharacteristic Icon={CakeIcon} name="Founded In" value={companyData.founded?.split('-')[0] ?? 'Not Set'} />
                                <CompanyCharacteristic
                                    Icon={Building2Icon}
                                    name="Organization Type"
                                    value={companyData.organization_type ?? 'Organization Type Not Set'}
                                />
                                <CompanyCharacteristic
                                    Icon={Landmark}
                                    name="Total Offices"
                                    value={`${companyData.total_offices ?? 'Total Office Not Yet'}`}
                                />
                                <CompanyCharacteristic Icon={BriefcaseBusinessIcon} name="Opened Jobs" value={`${openJobs.length}`} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mt-5 border-stone-200 px-6">
                        <CardDescription>Map Not Loaded</CardDescription>
                    </Card>
                </div>
            </section>
            <section className="mx-auto mt-7 w-10/12 gap-10">
                <h1 className="my-7 font-montserrat text-2xl font-bold">Current Openings</h1>
                {openJobs.length > 1 ? (
                    <div className="my-7 grid grid-cols-1 gap-3 md:grid-cols-4">
                        {openJobs.map((job) => (
                            <FeaturedJobCard
                                companyImageURL={`${companyData.image_path}`}
                                jobSlug={job.slug}
                                companyName={companyData.name}
                                location={job.location}
                                postedDate={job.created_at}
                                title={job.title}
                                type={job.type}
                                salary={job.salary_to}
                                key={job.id}
                                JobID={job.id!}
                                featured={job.featured}
                                companyID={`${companyData.id}`}
                                companySlug={companyData.slug}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="my-5 p-2">😢 No Current Open Job</div>
                )}
            </section>
        </AppLayout>
    );
}
