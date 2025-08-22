import { Button } from '@/components/ui/UnusedUI/button';
import { Input } from '@/components/ui/UnusedUI/input';
import AppLayout from '@/layouts/app/app-layout';

export default function EmailToFriend() {
    return (
        <AppLayout page="">
            <div className="flex flex-col items-center justify-center bg-green-50 py-10">
                <h1 className="font-montserrat text-3xl font-bold">Email to Friends</h1>
            </div>
            <section className="mx-auto flex size-10/12 justify-between gap-7">
                <div className="my-7 size-8/12 rounded-xl bg-green-50 p-7">
                    <h1 className="font-montserrat text-lg font-bold">Email to Friend</h1>
                    <form action="" className="my-7">
                        <Input
                            className="my-5 h-11 border-stone-400 shadow-transparent focus-visible:ring focus-visible:ring-primary"
                            id="link"
                            name="link"
                            value={'http://google.com/'}
                        />
                        <Input
                            className="my-5 h-11 border-stone-400 shadow-transparent focus-visible:ring focus-visible:ring-primary"
                            id="friend-name"
                            name="friend-name"
                            placeholder="Friend's Name"
                        />
                        <Input
                            className="my-5 h-11 border-stone-400 shadow-transparent focus-visible:ring focus-visible:ring-primary"
                            id="friend-email"
                            name="friend-email"
                            placeholder="Friend's Email"
                        />
                        <Input
                            className="my-5 h-11 border-stone-400 shadow-transparent focus-visible:ring focus-visible:ring-primary"
                            id="your-name"
                            name="your-name"
                            placeholder="Your Name"
                        />

                        <Input
                            className="my-5 h-11 border-stone-400 shadow-transparent focus-visible:ring focus-visible:ring-primary"
                            id="your-email"
                            name="your-email"
                            placeholder="Your Name"
                        />

                        <div className="my-5">
                            <p>Add Recaptcha</p>
                        </div>

                        <Button className="my-5 w-full cursor-pointer py-5 font-montserrat text-lg font-bold text-white">Send to Friend</Button>
                    </form>
                </div>
                <div className="size-3/12"></div>
            </section>
        </AppLayout>
    );
}
