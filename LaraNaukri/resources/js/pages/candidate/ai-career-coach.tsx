import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AppCandidateLayout from '@/layouts/app/app-candidate-layout';
import { Head, useForm } from '@inertiajs/react';
import { Loader2, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Message = {
    id: string;
    role: 'user' | 'assistant';
    message: string;
};

export default function AICareerCoach() {
    const [messages, setMessages] = useState<Message[] | []>([]);
    const [isThinking, setIsThinking] = useState(false);

    const { data, setData } = useForm({
        messageText: '',
    });

    function handleItem(text: string) {
        setMessages((messages) => [
            ...messages,
            {
                id: `${Math.round(Math.random() * 1000)}`,
                role: 'user',
                message: text,
            },
        ]);

        getAIResponse(text);
    }

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (isThinking) return;
        if (data.messageText.length < 3) return;

        setMessages((messages) => [
            ...messages,
            {
                id: `${Math.round(Math.random() * 1000)}`,
                role: 'user',
                message: data.messageText,
            },
        ]);

        getAIResponse(data.messageText);
        data.messageText = '';
    }

    async function getAIResponse(mess: string) {
        setIsThinking(true);

        const response = await fetch(route('candidate.get.AI.response', { messageText: mess }));
        const responseData = await response.json();

        setMessages((messages) => [
            ...messages,
            {
                id: `${Math.round(Math.random() * 1000)}`,
                role: 'assistant',
                message: responseData.message,
            },
        ]);
        setIsThinking(false);
    }

    return (
        <AppCandidateLayout displaySearch={false} page="ai-career-coach" titleText="AI Career Coach">
            <Head title="AI Career Coach" />
            <h1 className="mt-3 text-center font-montserrat text-2xl font-bold text-primary">Start Asking Question From Your AI Career Coach</h1>
            <section className="mt-3 min-h-[70vh] bg-green-50 p-3">
                {messages.length > 0 ? (
                    messages.map((message) => (
                        <Card className="border-0 border-gray-300 px-5 py-2 shadow-none" key={message.id}>
                            <div id="message" className={`relative z-20 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <p className="rounded-lg bg-gray-300 px-5 py-2" dangerouslySetInnerHTML={{ __html: message.message }} />
                                <div
                                    className={`absolute ${message.role === 'user' ? '-right-3 rotate-90' : '-left-3 -rotate-90'} -bottom-0 -z-10 border-r-[10px] border-b-[20px] border-l-[10px] border-r-transparent border-b-gray-300 border-l-transparent`}
                                ></div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="p-5 text-center">
                        <p className="text-lg font-bold">Start talking with your AI Career Coach</p>
                        <p className="mt-3">Here are some questions to get you started</p>
                        <ul className="flex flex-col justify-center">
                            <li className="mt-3 flex justify-center p-2" onClick={() => handleItem('What skills required to become data analyst?')}>
                                <p className="w-fit cursor-pointer rounded-lg border bg-white px-5 py-2">
                                    What skills required to become data analyst?
                                </p>
                            </li>
                            <li
                                className="mt-1 flex justify-center p-2"
                                onClick={() => handleItem('What are steps I need to follow to become Chartared Accountant')}
                            >
                                <p className="w-fit cursor-pointer rounded-lg border bg-white px-5 py-2">
                                    What are steps I need to follow to become Chartared Accountant
                                </p>
                            </li>
                        </ul>
                    </div>
                )}
                {isThinking && (
                    <p className="flex gap-2.5">
                        <Loader2 className="animate-spin" /> Thinking...{' '}
                    </p>
                )}
            </section>
            <section>
                <form className="relative" onSubmit={(e) => handleFormSubmit(e)}>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Ask question from AI Career Coach"
                        value={data.messageText}
                        onChange={(e) => setData('messageText', e.target.value)}
                        className="w-full resize-none rounded-lg border border-black bg-white py-2 pr-15 pl-2 focus-visible:outline-primary"
                    ></textarea>
                    <Button type="submit" className="absolute top-3 right-5 size-10 cursor-pointer" disabled={isThinking}>
                        <Send className="size-5 text-white" />
                    </Button>
                </form>
            </section>
        </AppCandidateLayout>
    );
}
