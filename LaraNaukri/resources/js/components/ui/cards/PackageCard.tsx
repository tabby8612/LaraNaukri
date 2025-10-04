import { Package } from '@/types';
import { ArrowRightCircle, CheckCircle } from 'lucide-react';
import { Card } from '../card';
import PaymentButton from '../PaymentButton';
import PaymentOptionsDialog from './PaymentOptionsDialog';

export default function PackageCard({ premiumPackage, type = 'job' }: { premiumPackage: Package; type: 'cv' | 'job' }) {
    return (
        <Card className={`gap-4 border-gray-300 p-5 shadow-none ${premiumPackage.name.toLowerCase() === 'gold' ? 'bg-yellow-200/80' : 'bg-white'}`}>
            <h1 className="font-montserrat text-2xl font-semibold">{premiumPackage.name}</h1>
            <h2 className="font-montserrat text-3xl">
                USD <span className="font-extrabold">{premiumPackage.price}</span>
            </h2>
            <hr className="border-gray-300" />
            <ul>
                <li className="mt-3 flex items-center gap-3">
                    <CheckCircle className="size-4 text-primary" />
                    {type === 'job' ? 'Job Posting' : 'CV Views'} {premiumPackage.num_listings}
                </li>
                <li className="mt-3 flex items-center gap-3">
                    <CheckCircle className="size-4 text-primary" />
                    {type === 'job' ? 'Job Displayed' : 'CV Views Access'} For {premiumPackage.num_days} Days
                </li>
                {type === 'job' && (
                    <li className="mt-3 flex items-center gap-3">
                        <CheckCircle className="size-4 text-primary" />
                        Highlight Jobs On Demand
                    </li>
                )}
                <li className="mt-3 flex items-center gap-3">
                    <CheckCircle className="size-4 text-primary" />
                    Premium Support 24/7
                </li>
            </ul>
            <div className="relative my-3 w-3/4 overflow-hidden">
                <PaymentOptionsDialog
                    trigger={
                        <PaymentButton>
                            <>
                                <p className="z-20">Buy Now</p>
                                <ArrowRightCircle className="smoothTransition z-20 size-7 -rotate-45 group-hover:rotate-0" />
                            </>
                        </PaymentButton>
                    }
                    paypalPaymentLink={route('employer.paypal', premiumPackage)}
                    stripePaymentLink={route('employer.stripe', premiumPackage.id)}
                    itemPackage={premiumPackage}
                />
            </div>
        </Card>
    );
}
