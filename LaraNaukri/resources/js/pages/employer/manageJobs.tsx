import FeaturedJobCard from '@/components/ui/cards/FeaturedJobCard';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export default function ManageJobs() {
    return (
        <AppEmployerLayout displaySearch={false} page="manageJobs" titleText="Manage Jobs">
            <TabGroup>
                <TabList className={'py-6'}>
                    <Tab className={'mr-4 rounded-xl border-2 border-gray-300 px-3 py-3 data-selected:bg-primary data-selected:text-white'}>
                        Active Jobs
                    </Tab>
                    <Tab className={'mr-4 rounded-xl border-2 border-gray-300 px-3 py-3 data-selected:bg-primary data-selected:text-white'}>
                        Expired Jobs
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <section className="grid grid-cols-2 gap-8">
                            <FeaturedJobCard
                                JobID="1"
                                companyImageURL=""
                                companyName=""
                                companySlug=""
                                featured
                                location="USA"
                                postedDate="2025-11-11"
                                salary={1000}
                                title="React"
                                type="full time"
                                showCompanyDetails={false}
                                showEditOptions={true}
                            />
                            <FeaturedJobCard
                                JobID="1"
                                companyImageURL=""
                                companyName=""
                                companySlug=""
                                featured
                                location="USA"
                                postedDate="2025-11-11"
                                salary={1000}
                                title="React"
                                type="full time"
                                showCompanyDetails={false}
                                showEditOptions={true}
                            />
                        </section>
                    </TabPanel>
                    <TabPanel>List of Expired Jobs</TabPanel>
                </TabPanels>
            </TabGroup>
        </AppEmployerLayout>
    );
}
