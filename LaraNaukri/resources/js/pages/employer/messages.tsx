import { Card } from '@/components/ui/card';
import MessageTab from '@/components/ui/cards/Employer/MessageTab';
import AppEmployerLayout from '@/layouts/app/app-employer-layout';
import { Candidate } from '@/types';
import { Textarea } from '@headlessui/react';
import { router, usePage } from '@inertiajs/react';
import { Send } from 'lucide-react';
import { MouseEvent, useRef, useState } from 'react';

export default function CompanyMessages() {
    const { candidatesUnlocked } = usePage<{ candidatesUnlocked: Candidate[] }>().props;
    const [selectedUser, setSelectedUser] = useState('');
    const MessageRef = useRef<HTMLTextAreaElement>(null);

    function selectUserHandler(id: string) {
        setSelectedUser(id);
    }

    function sendMessageHandler(e: MouseEvent) {
        e.preventDefault();
        const message = MessageRef.current?.value;

        if (!message) return;

        const candidateID = selectedUser;
        console.log(message, candidateID);

        router.post(
            route('employer.send.message'),
            {
                message,
                candidateID,
            },
            {
                preserveScroll: true,
                preserveState: true,
                showProgress: false,
            },
        );

        if (MessageRef.current?.value) MessageRef.current.value = '';
    }

    return (
        <AppEmployerLayout displaySearch={false} page="messages" titleText="Company Messages">
            <h1 className="font-montserrat text-2xl font-bold">Company Messages</h1>
            <section className="flex h-[500px]">
                <div className="w-[30%] bg-gray-200/40" onClick={() => setSelectedUser('')}>
                    {candidatesUnlocked.length > 0 &&
                        candidatesUnlocked.map((candidate) => (
                            <MessageTab
                                image_path={candidate.image_path}
                                name={`${candidate.first_name} ${candidate.last_name}`}
                                message_count="0"
                                key={candidate.id}
                                clickFn={() => selectUserHandler(candidate.id)}
                                id={candidate.id}
                                selectedUser={selectedUser}
                            />
                        ))}
                </div>
                {selectedUser ? (
                    <div
                        className={`relative w-[70%] bg-gray-300/50 bg-[url(https://www.sharjeelanjum.com/demos/jobsportal-update/images/chat-bg.png)]`}
                    >
                        <section id="chatMessagesArea" className="h-[80%] overflow-x-hidden overflow-y-auto px-3" style={{ scrollbarWidth: 'none' }}>
                            <Card className="flex w-full items-end border-0 pt-5 shadow-none">
                                <p className="w-fit rounded-full bg-primary px-4 py-1 text-sm text-white">Sender Message</p>
                            </Card>
                            <Card className="flex w-full items-start border-0 py-1 shadow-none">
                                <p className="w-fit rounded-full bg-gray-500 px-4 py-1 text-sm text-white">Receiver Message</p>
                            </Card>
                        </section>
                        <div className="absolute bottom-1 left-0 w-full bg-gray-300 p-2">
                            <Textarea
                                rows={2}
                                ref={MessageRef}
                                className={
                                    'relative w-full rounded border-0 bg-white p-2 text-sm selection:bg-primary selection:text-white focus-visible:outline-primary'
                                }
                            />
                            <div
                                className="absolute top-4 right-4 flex w-16 cursor-pointer justify-center rounded-lg bg-primary p-3"
                                onClick={(e) => sendMessageHandler(e)}
                            >
                                <Send className="size-4 text-white" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`relative w-[70%] bg-gray-300/50`}></div>
                )}
            </section>
        </AppEmployerLayout>
    );
}
