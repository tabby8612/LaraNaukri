import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';

type Props = {
    trigger: ReactNode;
    warningText: ReactNode;
};
export default function WarningDialog({ trigger, warningText }: Props) {
    return (
        <div>
            <Dialog>
                <DialogTrigger className="w-full cursor-pointer capitalize">{trigger}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl capitalize" />
                        <DialogDescription className="flex justify-center gap-10" />
                        {warningText}
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
