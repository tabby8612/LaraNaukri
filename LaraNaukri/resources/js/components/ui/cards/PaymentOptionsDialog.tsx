import { Paypal } from '@/SVGs/Paypal';
import { Stripe } from '@/SVGs/Stripe';
import { ReactNode, useState } from 'react';
import PaymentButton from '../PaymentButton';
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';

export default function PaymentOptionsDialog({ trigger }: { trigger?: string | ReactNode }) {
    const [closeDialog, setCloseDialog] = useState(false);

    return (
        <div>
            <Dialog open={closeDialog} onOpenChange={(open) => setCloseDialog(open)}>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{trigger}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogClose className="bg-gray-500" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogTitle>Buy Now</DialogTitle>
                    <hr className="border-gray-400" />
                    <h1 className="text-center font-montserrat text-2xl font-semibold text-primary">Please Choose Your Payment Method To Pay</h1>
                    <h2 className="text-center text-xl">
                        Total Amount to Pay: <span className="text-2xl font-bold text-primary">USD 30</span>{' '}
                    </h2>
                    <div className="gap mx-auto flex w-3/4 gap-10">
                        <PaymentButton>
                            <div className="flex items-center gap-3">
                                <Paypal className="z-20 size-6 -rotate-45 transition-transform delay-150 duration-700 group-hover:rotate-0" />
                                <p className="z-20">Paypal</p>
                            </div>
                        </PaymentButton>
                        <PaymentButton>
                            <div className="flex items-center gap-3">
                                <Stripe className="z-20 size-6 -rotate-45 transition-transform delay-150 duration-700 group-hover:rotate-0" />
                                <p className="z-20">Stripe</p>
                            </div>
                        </PaymentButton>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
