import { ReactElement } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';

type DialogProps = {
    content: ReactElement;
    title: string;
    type: 'candidate' | 'company';
};

export default function JobDialog({ content, title, type }: DialogProps) {
    return (
        <div>
            <Dialog>
                <DialogTrigger className="w-full cursor-pointer capitalize">{content}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl capitalize">{title}</DialogTitle>
                        <DialogDescription className="flex justify-center gap-10">
                            <a
                                href={route(`${type === 'candidate' ? 'candidate' : 'company'}.login`)}
                                className="cursor-pointer rounded-lg bg-primary px-9 py-3 text-lg font-semibold tracking-wider text-white"
                            >
                                Login
                            </a>
                            <a
                                href={route(`${type === 'candidate' ? 'candidate' : 'company'}.register`)}
                                className="cursor-pointer rounded-lg bg-black px-12 py-3 text-lg font-semibold tracking-wider text-white"
                            >
                                Register
                            </a>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
