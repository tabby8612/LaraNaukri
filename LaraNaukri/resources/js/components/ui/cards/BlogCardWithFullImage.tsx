import { BlogCategory } from '@/types';
import { Card } from '../card';

type BlogProps = {
    id: number;
    imageUrl: string;
    title: string;
    category: BlogCategory;
    description: string;
    slug: string;
};

export default function BlogCardWithFullImage({ imageUrl, category, description, title, slug }: BlogProps) {
    return (
        <Card className="gap-3 border-0 p-5 shadow-2xs">
            <img src={`/storage/${imageUrl}`} alt={title} />
            <a
                href={route(`blog.view`, {
                    slug: slug,
                })}
            >
                <h1 className="font-montserrat text-lg font-semibold transition-colors delay-150 duration-300 hover:text-primary">{title}</h1>
            </a>
            <p className="text-gray-600">
                Category:{' '}
                <a href={`http://google.com/${category.id}`} className="text-primary">
                    {category.name}
                </a>
            </p>
            <p className="text-gray-600">{description.slice(0, 180)}</p>
        </Card>
    );
}
