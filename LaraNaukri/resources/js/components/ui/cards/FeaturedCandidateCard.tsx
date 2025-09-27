import { ChartNoAxesCombined, MapPin } from 'lucide-react';
import { Star } from '../../../SVGs/Star';

type Props = {
    imageUrl: string;
    name: string;
    profession: string;
    location: string;
    id: string;
    featured?: boolean;
};

export default function FeaturedCandidateCard({ imageUrl, name, profession, location, id, featured = true }: Props) {
    return (
        <div
            id="featuredProfileCard"
            className="relative flex h-fit flex-col items-center justify-center gap-4 overflow-x-visible overflow-y-hidden rounded-lg border-2 border-gray-200 p-3 transition-all delay-75 duration-300 hover:border-green-800 hover:bg-gradient-to-r hover:from-gray-100 hover:to-green-100 hover:shadow-xl"
        >
            {featured && (
                <div
                    id="featuredRibbon"
                    className="absolute top-10 left-[-3em] z-40 flex rotate-[-45deg] items-center justify-center gap-2 bg-primary px-12 py-1 text-white"
                >
                    <Star className="size-4" />
                    <p className="font-montserrat font-semibold tracking-wide">Featured</p>
                </div>
            )}
            <img src={`/storage/${imageUrl}`} alt={name} className="mt-6 size-28 rounded-full border-8 border-white shadow-lg shadow-gray-600/50" />
            <h2 className="font-montserrat text-2xl font-semibold">{name}</h2>
            <p className="text-gray-600">{profession}</p>

            <div className="flex items-center justify-center gap-2">
                <ChartNoAxesCombined className="size-5 text-primary" />
                <p className="text-gray-600">Experience Professional</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <MapPin className="size-5 text-primary" />
                <p className="text-gray-600">{location}</p>
            </div>
            <a href={`http://google.com/${id}`} className="rounded-full bg-primary px-7 py-1 text-lg font-semibold text-white">
                View Profile
            </a>
        </div>
    );
}
