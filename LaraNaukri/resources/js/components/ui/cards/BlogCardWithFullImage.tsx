import { Card } from '../card';

type Category = {
    name: string;
    id: number;
};

type BlogProps = {
    id: number;
    imageUrl: string;
    title: string;
    categories: Category[];
    description: string;
};

export default function BlogCardWithFullImage({ imageUrl, categories, description, title }: BlogProps) {
    return (
        <Card className="gap-3 border-0 p-5 shadow-2xs">
            <img src={imageUrl} alt={title} />
            <h1 className="font-montserrat text-lg font-semibold">{title}</h1>
            <p className="text-gray-600">
                Category:{' '}
                {categories.map((category) => (
                    <a href={`http://google.com/${category.id}`} className="text-primary">
                        {category.name},
                    </a>
                ))}
            </p>
            <p className="text-gray-600">{description.slice(0, 180)}</p>
        </Card>
    );
}
