import CompanyMessageTab from '@/components/ui/cards/Candidate/CompanyMessageTab';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Textarea } from '@headlessui/react';
import { Send } from 'lucide-react';

export default function MyMessages() {
    return (
        <AppCandidateLayout displaySearch={false} page="messages" titleText="My Messages">
            <h1 className="font-montserrat text-2xl font-bold">Seeker Messages</h1>
            <section className="flex h-[500px]">
                <div className="w-[30%] bg-gray-200/40">
                    <CompanyMessageTab
                        company_image_path="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/multimedia-design-1614272292-782.jpg"
                        company_name="Multimedia Design"
                        unread_message_count={0}
                    />
                    <CompanyMessageTab
                        company_image_path="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/multimedia-design-1614272292-782.jpg"
                        company_name="Multimedia Design"
                        unread_message_count={0}
                    />
                    <CompanyMessageTab
                        company_image_path="https://www.sharjeelanjum.com/demos/jobsportal-update/company_logos/multimedia-design-1614272292-782.jpg"
                        company_name="Multimedia Design"
                        unread_message_count={0}
                    />
                </div>
                <div className="relative w-[70%] bg-gray-300/50 bg-[url(https://www.sharjeelanjum.com/demos/jobsportal-update/images/chat-bg.png)]">
                    <div className="absolute bottom-1 left-0 w-full bg-gray-300 p-2">
                        <Textarea
                            rows={2}
                            className={
                                'relative w-full rounded border-0 bg-white p-2 selection:bg-primary selection:text-white focus-visible:outline-primary'
                            }
                        />
                        <div className="absolute top-5 right-4 flex w-16 justify-center rounded-lg bg-primary p-3">
                            <Send className="size-4 text-white" />
                        </div>
                    </div>
                </div>
            </section>
        </AppCandidateLayout>
    );
}
