import { DocumentText } from '@/SVGs/Document';
import { Check } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '../card';

type Props = {
    benefits: string[];
};

export default function BenefitCard({ benefits }: Props) {
    return (
        <Card className="my-7 border-stone-200 px-3 shadow-transparent">
            <CardTitle className="text-xl">
                <div className="flex items-center gap-2">
                    <DocumentText className="text-stone-400" />
                    <p>Benefits</p>
                </div>
            </CardTitle>
            <CardDescription>
                <ul>
                    {benefits.map((benefit, index) => (
                        <li className="mt-2 flex items-center gap-1" key={index}>
                            <Check className="text-primary" />
                            <p>{benefit}</p>
                        </li>
                    ))}
                </ul>
            </CardDescription>
        </Card>
    );
}
