import MainBlogSection from '@/components/sections/MainBlogSection';
import CategoryWidget from '@/components/ui/cards/CategoryWidget';
import SearchWidget from '@/components/ui/cards/SearchWidget';
import AppLayout from '@/layouts/app/app-layout';
import { BlogPost } from '@/types';
import { usePage } from '@inertiajs/react';

type BlogPostsProps = {
    blogposts: BlogPost[];
    searchText: undefined | string;
};

export default function Blog() {
    const { blogposts, searchText } = usePage<BlogPostsProps>().props;

    return (
        <AppLayout page="blog">
            <div className="flex flex-col items-center justify-center bg-green-50 py-10">
                <h1 className="font-montserrat text-4xl font-bold">Blog</h1>
                {searchText && <h2 className="mt-3 font-montserrat text-2xl font-bold">Showing blogs for: {searchText}</h2>}
            </div>
            <section id="blog" className="flex gap-3 px-20">
                <MainBlogSection blogPosts={blogposts} />
                <div id="blog-sidebar" className="w-1/4 border border-gray-100">
                    <SearchWidget />

                    <CategoryWidget />
                </div>
            </section>
        </AppLayout>
    );
}
