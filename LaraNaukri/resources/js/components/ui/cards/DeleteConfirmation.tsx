import { DialogDescription } from '@radix-ui/react-dialog';
import { ReactNode, useState } from 'react';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';

export default function DeleteConfirmation({ trigger, deleteFn }: { trigger?: string | ReactNode; deleteFn: () => void }) {
    const [closeDialog, setCloseDialog] = useState(false);

    return (
        <div>
            <Dialog open={closeDialog} onOpenChange={(open) => setCloseDialog(open)}>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{trigger}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogTitle>Do you Really Want to Delete?</DialogTitle>
                    <DialogDescription>You can't undo this operation</DialogDescription>
                    <div className="flex items-center justify-end gap-7 text-white">
                        <Button className="w-20 cursor-pointer bg-red-500 hover:bg-red-600" onClick={deleteFn}>
                            Ok
                        </Button>
                        <Button className="w-20 cursor-pointer bg-primary" onClick={() => setCloseDialog(false)}>
                            Cancel
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
