import { DocumentText } from '@/SVGs/Document';
import { Card, CardDescription, CardTitle } from '../card';

type Props = {
    type: string;
    description: string;
};

export default function DescriptionCard({ type, description }: Props) {
    return (
        <Card className="my-7 border-stone-200 px-3 shadow-transparent">
            <CardTitle className="text-xl">
                <div className="flex items-center gap-2">
                    <DocumentText className="text-stone-400" />
                    <p>About {type}</p>
                </div>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
        </Card>
    );
}
