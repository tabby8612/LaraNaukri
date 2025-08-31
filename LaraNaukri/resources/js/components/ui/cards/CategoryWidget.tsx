import { Category } from '@/types';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CategoryWidget() {
    const [categories, setCategories] = useState<Category[]>();

    useEffect(() => {
        async function getAllCategories() {
            const response = await fetch(route('all.blogcategories.api'));

            if (!response.ok) throw new Error('Unable to fetch all blog categories');

            const data = await response.json();

            setCategories(data.allBlogCategories);
        }

        getAllCategories();
    }, []);

    return (
        <div id="categories" className="mx-auto mt-10 w-10/12">
            <h1 className="text-lg font-semibold">Categories</h1>
            <ul>
                {categories &&
                    categories.map((category) => (
                        <li className="mt-2 flex items-center" key={category.id}>
                            <ChevronRight className="mr-2 size-5 text-primary" />
                            <a
                                href={route('blog.category.view', {
                                    id: category.id,
                                })}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
