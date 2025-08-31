import { BlogPost } from '@/types';
import BlogCardWithFullImage from '../ui/cards/BlogCardWithFullImage';

export default function MainBlogSection({ blogPosts }: { blogPosts: BlogPost[] }) {
    return (
        <section id="blog-section" className="w-3/4">
            <div className="grid grid-cols-2">
                {blogPosts.map((blog) => (
                    <BlogCardWithFullImage
                        id={blog.id}
                        title={blog.title}
                        slug={blog.slug}
                        description={blog.description}
                        category={blog.blogcategory}
                        imageUrl={blog.featured_image_path}
                        key={blog.id}
                    />
                ))}
            </div>
        </section>
    );
}
