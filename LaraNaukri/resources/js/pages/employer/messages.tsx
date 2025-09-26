import MessageTab from '@/components/ui/cards/Employer/MessageTab';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Textarea } from '@headlessui/react';
import { Send } from 'lucide-react';

export default function CompanyMessages() {
    return (
        <AppEmployerLayout displaySearch={false} page="messages" titleText="Company Messages">
            <h1 className="font-montserrat text-2xl font-bold">Company Messages</h1>
            <section className="flex h-[500px]">
                <div className="w-[30%] bg-gray-200/40">
                    <MessageTab image_path="companies/default.png" name="Adams" message_count="0" />
                    <MessageTab image_path="companies/default.png" name="Adams" message_count="0" />
                    <MessageTab image_path="companies/default.png" name="Adams" message_count="0" />
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
        </AppEmployerLayout>
    );
}
