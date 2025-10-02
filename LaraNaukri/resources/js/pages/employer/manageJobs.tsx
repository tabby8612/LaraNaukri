import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Job } from '@/types';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { usePage } from '@inertiajs/react';

export default function ManageJobs() {
    const { activeJobs, expiredJobs } = usePage<{ activeJobs: Job[]; expiredJobs: Job[] }>().props;
    console.log(activeJobs);
    console.log(expiredJobs);

    return (
        <AppEmployerLayout displaySearch={false} page="manageJobs" titleText="Manage Jobs">
            <TabGroup>
                <TabList className={'py-6'}>
                    <Tab
                        className={
                            'mr-4 cursor-pointer rounded-xl border-2 border-gray-300 px-3 py-3 data-selected:bg-primary data-selected:text-white'
                        }
                    >
                        Active Jobs
                    </Tab>
                    <Tab
                        className={
                            'mr-4 cursor-pointer rounded-xl border-2 border-gray-300 px-3 py-3 data-selected:bg-primary data-selected:text-white'
                        }
                    >
                        Expired Jobs
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <section className="grid grid-cols-2 gap-8">
                            {activeJobs.length > 0 &&
                                activeJobs.map((job) => (
                                    <FeaturedJobCard
                                        JobID={job.id}
                                        companyImageURL={job.companies.image_path}
                                        companyName={job.companies.name}
                                        companySlug={job.companies.slug}
                                        featured={job.is_featured ? true : false}
                                        location={job.location}
                                        postedDate={job.created_at}
                                        salary={job.salary_from}
                                        type={job.type}
                                        showCompanyDetails={false}
                                        showEditOptions={true}
                                        jobSlug={job.slug}
                                        title={job.title}
                                        applicationsCount={job.applications.length}
                                    />
                                ))}
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section className="grid grid-cols-2 gap-8">
                            {expiredJobs.length > 0 &&
                                expiredJobs.map((job) => (
                                    <FeaturedJobCard
                                        JobID={job.id}
                                        companyImageURL={job.companies.image_path}
                                        companyName={job.companies.name}
                                        companySlug={job.companies.slug}
                                        featured={job.is_featured ? true : false}
                                        location={job.location}
                                        postedDate={job.created_at}
                                        salary={job.salary_from}
                                        type={job.type}
                                        showCompanyDetails={false}
                                        showEditOptions={true}
                                        jobSlug={job.slug}
                                        title={job.title}
                                        applicationsCount={job.applications.length}
                                    />
                                ))}
                        </section>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </AppEmployerLayout>
    );
}
