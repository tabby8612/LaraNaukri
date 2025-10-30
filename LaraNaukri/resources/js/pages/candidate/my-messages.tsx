import { Card } from '@/components/ui/card';
import MessageTab from '@/components/ui/cards/Employer/MessageTab';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { ChatMessage, Company, User } from '@/types';
import { Textarea } from '@headlessui/react';
import { Head, router, usePage } from '@inertiajs/react';
import { useEcho } from '@laravel/echo-react';
import { CheckCheck, Send } from 'lucide-react';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export default function MyMessages() {
    const { companiesUnlocked, auth } = usePage<{ companiesUnlocked: Company[] | []; auth: { user: User } }>().props;
    const [selectedUser, setSelectedUser] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const MessageRef = useRef<HTMLTextAreaElement>(null);
    const ChatAreaRef = useRef<HTMLDivElement>(null);
    const { user } = auth;
    const senderID = user.id;

    useEcho(`chat.${user.id}`, 'MessageSent', (payload: ChatMessage) => setMessages((messages) => [...messages, payload]));

    useEffect(() => {
        if (!ChatAreaRef.current) return;

        ChatAreaRef.current.scrollTop = ChatAreaRef.current?.scrollHeight;
    }, [ChatAreaRef.current?.scrollHeight]);

    function sendMessageHandler(e: MouseEvent) {
        e.preventDefault();
        const message = MessageRef.current?.value;

        if (!message) return;

        const receiverID = selectedUser;

        const date = new Date();
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric', // 'numeric' or '2-digit'
            minute: '2-digit', // 'numeric' or '2-digit'
            hour12: true, // true for 12-hour format (AM/PM), false for 24-hour format
        });

        const newMessage: ChatMessage = {
            id: Math.random().toString(5),
            message: message,
            receiver_id: receiverID,
            sender_id: senderID,
            status: 'unread',
            created_at: timeFormatter.format(date),
            updated_at: timeFormatter.format(date),
        };

        router.post(
            route('candidate.send.message'),
            {
                message,
                receiver_id: receiverID,
            },
            {
                preserveScroll: true,
                preserveState: true,
                showProgress: false,
                onSuccess: () => setMessages((message) => [...message, newMessage]),
            },
        );

        if (MessageRef.current?.value) MessageRef.current.value = '';
    }

    function selectUserHandler(id: string) {
        setSelectedUser(id);

        async function getMessage(userID: string) {
            const response = await fetch(route('candidate.load.messages', userID));
            const data = await response.json();

            setMessages(data);
        }

        getMessage(id);
    }

    return (
        <AppCandidateLayout displaySearch={false} page="messages" titleText="My Messages">
            <Head title="Seeker Messages" />
            <h1 className="font-montserrat text-lg font-bold md:text-2xl">Seeker Messages</h1>
            <section className="flex h-[500px]">
                <div className="w-[30%] bg-gray-200/40" onClick={() => setSelectedUser('')}>
                    {companiesUnlocked.length > 0 &&
                        companiesUnlocked.map((company) => (
                            <MessageTab
                                id={company.user_id}
                                image_path={company.image_path}
                                name={company.name}
                                clickFn={() => selectUserHandler(company.user_id)}
                                message_count={company.unread_message_count}
                                selectedUser={selectedUser}
                                key={company.id}
                            />
                        ))}
                </div>
                {selectedUser ? (
                    <div
                        className={`relative w-[70%] bg-gray-300/50 bg-[url(https://www.sharjeelanjum.com/demos/jobsportal-update/images/chat-bg.png)]`}
                    >
                        <section id="chatMessagesArea" className="h-[80%] overflow-x-hidden overflow-y-auto px-3" style={{ scrollbarWidth: 'thin' }}>
                            {messages.length > 0 &&
                                messages.map((message) => (
                                    <Card
                                        className={`${message.sender_id === senderID ? 'items-end' : 'items-start'} flex w-full border-0 p-1 pt-2 shadow-none`}
                                        key={message.id}
                                    >
                                        <div
                                            className={`${message.sender_id === senderID ? 'bg-green-600' : 'bg-gray-500'} flex w-10/12 items-center justify-between gap-1 rounded-full px-4 py-1 text-[0.8em] text-white md:w-fit md:text-sm`}
                                        >
                                            <p>{message.message}</p>
                                            <div className="flex gap-2">
                                                <span className="pl-9 text-xs"> {message.created_at}</span>
                                                {message.sender_id === senderID && (
                                                    <CheckCheck className={`size-4 self-end ${message.status === 'read' && 'text-sky-400'}`} />
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
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
        </AppCandidateLayout>
    );
}
