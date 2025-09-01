import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';

export default function LoginDialog({ type = 'login' }: { type?: string }) {
    return (
        <div>
            <Dialog>
                <DialogTrigger className="cursor-pointer capitalize">{type}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-100%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl capitalize">{type} As</DialogTitle>
                        <DialogDescription className="flex justify-center gap-10">
                            <a
                                href={route(`candidate.${type === 'login' ? 'login' : 'register'}`)}
                                className="cursor-pointer rounded-lg bg-primary px-9 py-3 text-lg font-semibold tracking-wider text-white"
                            >
                                Job Seekers
                            </a>
                            <a
                                href={route(`company.${type === 'login' ? 'login' : 'register'}`)}
                                className="cursor-pointer rounded-lg bg-black px-12 py-3 text-lg font-semibold tracking-wider text-white"
                            >
                                Company
                            </a>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
