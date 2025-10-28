import { router, usePage } from '@inertiajs/react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { ReactNode, useEffect, useState } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';

export default function UnlockConfirmation({ trigger, candidateID }: { trigger?: string | ReactNode; candidateID: string }) {
    const { message } = usePage<{ message: string }>().props;

    const [closeDialog, setCloseDialog] = useState(false);
    const [unlockedMessage, setUnlockMesasge] = useState(message);

    useEffect(() => {
        if (!message) return;

        setUnlockMesasge(message);
    }, [message]);

    function unlockHandler() {
        router.post(
            route('employer.unlockUser', candidateID),
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => setUnlockMesasge(message),
            },
        );
    }

    return (
        <div>
            <Dialog
                open={closeDialog}
                onOpenChange={(open) => {
                    setCloseDialog(open);
                    if (open && unlockedMessage) setUnlockMesasge('');
                }}
            >
                <DialogTrigger className="">{trigger}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                {unlockedMessage ? (
                    <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogTitle className="m-0 size-0 p-0" />
                        <DialogDescription className="m-0 size-0 p-0" />
                        <div className="my-5 text-center text-xl">{unlockedMessage}</div>
                    </DialogContent>
                ) : (
                    <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogTitle>Do you Want to Unlock This Candidate?</DialogTitle>
                        <DialogDescription>By Unlocking You Can Download His/Her Resume And Message Him/Her</DialogDescription>
                        <div className="flex items-center justify-end gap-7 text-white">
                            <Button
                                className="w-20 cursor-pointer bg-red-500 hover:bg-red-600"
                                onClick={() => {
                                    unlockHandler();
                                }}
                            >
                                Ok
                            </Button>
                            <Button className="w-20 cursor-pointer bg-primary" onClick={() => setCloseDialog(false)}>
                                Cancel
                            </Button>
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}
