import { DocumentText } from '@/SVGs/Document';
import { Card, CardDescription, CardTitle } from '../card';

type Props = {
    benefits: string;
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
            <CardDescription className="benefits" dangerouslySetInnerHTML={{ __html: benefits }} />
        </Card>
    );
}
