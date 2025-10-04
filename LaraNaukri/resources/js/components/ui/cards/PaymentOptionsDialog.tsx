import { Paypal } from '@/SVGs/Paypal';
import { Stripe } from '@/SVGs/Stripe';
import { Package } from '@/types';
import { ReactNode, useState } from 'react';
import PaymentButton from '../PaymentButton';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogTitle, DialogTrigger } from '../UnusedUI/dialog';

type Props = {
    trigger: string | ReactNode;
    paypalPaymentLink?: string;
    stripePaymentLink?: string;
    itemPackage: Package;
};

export default function PaymentOptionsDialog({ trigger, itemPackage, paypalPaymentLink = '/', stripePaymentLink = '/' }: Props) {
    const [closeDialog, setCloseDialog] = useState(false);

    return (
        <div>
            <Dialog open={closeDialog} onOpenChange={(open) => setCloseDialog(open)}>
                <DialogTrigger className="cursor-pointer text-4xl text-primary capitalize hover:text-green-900">{trigger}</DialogTrigger>
                <DialogOverlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-overlayClose data-[state=open]:animate-overlayOpen" />
                <DialogClose className="bg-gray-500" />
                <DialogContent className="translate-y-[-50%] bg-white data-[state=closed]:animate-closeDialog data-[state=open]:animate-openDialog">
                    <DialogTitle>Buy Now</DialogTitle>
                    <DialogDescription className="size-0" />
                    <hr className="border-gray-400" />
                    <h1 className="text-center font-montserrat text-2xl font-semibold text-primary">Please Choose Your Payment Method To Pay</h1>
                    <h2 className="text-center text-xl">
                        Total Amount to Pay: <span className="text-2xl font-bold text-primary">USD {itemPackage.price}</span>{' '}
                    </h2>
                    <div className="gap mx-auto flex w-3/4 gap-10">
                        <PaymentButton href={paypalPaymentLink}>
                            <div className="flex items-center gap-3">
                                <Paypal className="z-20 size-6 -rotate-45 transition-transform delay-150 duration-700 group-hover:rotate-0" />
                                <p className="z-20">Paypal</p>
                            </div>
                        </PaymentButton>
                        <PaymentButton href={stripePaymentLink}>
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
