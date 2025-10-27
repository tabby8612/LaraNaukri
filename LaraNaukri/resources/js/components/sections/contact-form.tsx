import { Textarea } from '@headlessui/react';
import { Button } from '../ui/UnusedUI/button';
import { Input } from '../ui/UnusedUI/input';

export default function ContactForm() {
    return (
        <div id="contact-form" className="w-full p-6 md:w-2/3">
            <p className="font-montserrat text-lg font-bold tracking-wider text-primary">Send us an email</p>
            <h1 className="font-montserrat text-4xl font-bold tracking-wider">Feel free to write</h1>

            <form action="" className="mt-7">
                <div className="flex gap-5">
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="h-12 border-0 bg-stone-100 selection:text-white focus-visible:ring-1 focus-visible:ring-primary"
                    />
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="h-12 border-0 bg-stone-100 selection:text-white focus-visible:ring-1 focus-visible:ring-primary"
                    />
                </div>
                <div className="mt-6 flex gap-5">
                    <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        className="h-12 border-0 bg-stone-100 selection:text-white focus-visible:ring-1 focus-visible:ring-primary"
                    />
                    <Input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="h-12 border-0 bg-stone-100 selection:text-white focus-visible:ring-1 focus-visible:ring-primary"
                    />
                </div>
                <Textarea
                    rows={5}
                    id="message"
                    name="message"
                    className="mt-6 w-full rounded-lg bg-stone-100 p-3 ring-transparent outline-0 focus-within:outline-2 focus-visible:ring-primary focus-visible:outline-primary"
                    placeholder="Message"
                />
                <div className="flex justify-start">
                    <Button className="my-3 bg-primary px-12 py-8 text-lg font-semibold text-white uppercase">Submit Now</Button>
                </div>
            </form>
        </div>
    );
}
