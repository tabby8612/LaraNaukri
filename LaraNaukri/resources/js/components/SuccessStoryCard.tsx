import { Star } from './ui/Star';

type Props = {
    description: string;
    name: string;
    role: string;
};
export default function SuccessStoryCard({ description, name, role }: Props) {
    return (
        <div id="successstorycard" className="rounded-lg border border-gray-200 p-7">
            <div className="mb-6 flex gap-2">
                <Star className="size-5 text-yellow-500" />
                <Star className="size-5 text-yellow-500" />
                <Star className="size-5 text-yellow-500" />
                <Star className="size-5 text-yellow-500" />
                <Star className="size-5 text-yellow-500" />
            </div>

            <p className="wrap-break-word italic">{description}</p>

            <h1 className="mt-6 text-2xl font-semibold tracking-wider">{name}</h1>
            <p className="font-bold text-primary">{role}</p>
        </div>
    );
}
