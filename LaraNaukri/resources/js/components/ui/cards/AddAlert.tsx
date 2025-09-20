import { useForm } from '@inertiajs/react';
import { FormEvent, ReactNode, useState } from 'react';
import { toast } from 'sonner';
import { DialogDescription } from '../dialog';
import { Toaster } from '../sonner';
import { Button } from '../UnusedUI/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';
import CountryStateCity from './CountryStateCity';
import CustomInputField from './CustomInputField';

export default function AddAlert({ type }: { type?: string | ReactNode }) {
    const { data, setData, post } = useForm({
        name: '',
        country_id: '233',
        state_id: '0',
        city_id: '0',
    });

    const [successDialog, setSuccessDialog] = useState('');

    function formHanlder(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post(route('candidate.setAlert'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSuccessDialog('Alert Has Been Created');
                toast.success(`Alert For ${data.name} Has Been Created`);
            },
        });
    }

    return (
        <div>
            <Dialog>
                <Toaster closeButton position="bottom-center" richColors />
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900" onClick={() => setSuccessDialog('')}>
                    {type}
                </DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                {successDialog ? (
                    <DialogContent className="translate-y-[-50%] bg-green-100 data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl text-primary capitalize">{successDialog}</DialogTitle>
                            <DialogDescription />
                        </DialogHeader>
                    </DialogContent>
                ) : (
                    <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl capitalize">Add Alert</DialogTitle>
                            <DialogDescription />
                            <form className="flex flex-col justify-center gap-5" onSubmit={(e) => formHanlder(e)}>
                                <CustomInputField
                                    label="Job Title or Keyword"
                                    name="name"
                                    placeholder="Enter Custom Alert Title"
                                    value={data.name}
                                    type="text"
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <div className="flex w-full justify-between gap-3">
                                    <CountryStateCity countryID={data.country_id} cityID={+data.city_id} stateID={+data.state_id} setData={setData} />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <DialogClose>
                                        <p className="hoverEffect rounded bg-gray-500 px-5 py-1.5 font-semibold text-white hover:bg-gray-600">
                                            Close
                                        </p>
                                    </DialogClose>
                                    <Button className="hoverEffect text-white">Save Changes</Button>
                                </div>
                            </form>
                        </DialogHeader>
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}
