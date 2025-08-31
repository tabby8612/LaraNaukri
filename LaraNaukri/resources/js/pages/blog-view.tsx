import CategoryWidget from '@/components/ui/cards/CategoryWidget';
import AppLayout from '@/layouts/app/app-layout';
import { BlogPost } from '@/types';
import { Input } from '@headlessui/react';
import { usePage } from '@inertiajs/react';
import { SearchIcon } from 'lucide-react';

type BlogPostProps = {
    blogPost: BlogPost;
};

export default function BlogPostView() {
    const { blogPost } = usePage<BlogPostProps>().props;

    return (
        <AppLayout page="blog">
            <div className="flex flex-col items-center justify-center bg-green-50 py-10">
                <h1 className="font-montserrat text-4xl font-bold">{blogPost.title}</h1>
            </div>
            <section id="blog" className="flex gap-3 px-20">
                <div className="h-full w-10/12 p-7">
                    <h1 className="font-montserrat text-4xl font-bold">{blogPost.title}</h1>
                    <img src={`/storage/${blogPost.featured_image_path}`} alt={blogPost.title} className="my-2 size-11/12" />
                    <p className="my-7">
                        Category:{' '}
                        <a href="" className="text-primary">
                            {blogPost.blogcategory.name}
                        </a>
                    </p>
                    <p>{blogPost.description}</p>
                </div>
                <div id="blog-sidebar" className="w-1/4 border border-gray-100">
                    <div className="relative mx-auto mt-10 w-10/12">
                        <h1 className="text-lg font-semibold">Search</h1>
                        <Input className="relative mt-2 h-10 pr-12 text-lg selection:text-white focus-visible:ring-primary" />
                        <SearchIcon className="absolute top-11 right-4 cursor-pointer" />
                    </div>

                    <CategoryWidget />
                </div>
            </section>
        </AppLayout>
    );
}
