import { useEffect, useState } from 'react';
import BlogCard from '../ui/cards/BlogCard';
import { BlogPost } from '@/types';



export default function BlogPostSection() {
    const [blogPostData, setblogPostData] = useState<BlogPost[] | null>(null);

    useEffect(() => {
        async function getBlogPostData() {
            const response = await fetch(route("latest.blogposts"));

            if (!response.ok) throw new Error(`Can't fetch blog posts ${response.status}`)

            const data = await response.json();

            setblogPostData(data.slice(0, 3));
        }

        getBlogPostData();
    }, []);
    return (
        <section id="customerTestimonials" className="px-14 py-10">
            <h1 className="my-7 gap-3 text-center font-montserrat text-4xl font-semibold">Latest Blog Posts</h1>
            <div className="grid grid-cols-3">
                {blogPostData && blogPostData.map((blogpost) => (
                    <BlogCard title={blogpost.title} date={blogpost.posted_at} imageUrl={blogpost.featured_image_path} key={blogpost.id} />
                ))}
            </div>
            <div className="my-10 flex justify-center">
                <button className="rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black">
                    View All Blog Posts
                </button>
            </div>
        </section>
    );
}
