import CategoryWidget from '@/components/ui/cards/CategoryWidget';
import SearchWidget from '@/components/ui/cards/SearchWidget';
import AppLayout from '@/layouts/app/app-layout';
import { BlogPost } from '@/types';
import { usePage } from '@inertiajs/react';

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
                    <p dangerouslySetInnerHTML={{ __html: blogPost.description }} />
                </div>
                <div id="blog-sidebar" className="w-1/4 border border-gray-100">
                    <SearchWidget />

                    <CategoryWidget />
                </div>
            </section>
        </AppLayout>
    );
}
