import BlogCard from '../ui/cards/BlogCard';

const BlogPosts = [
    {
        id: 1,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/blogs/balancing-1868051_1280_465.jpg',
        date: '08-Aug-2024',
        title: 'Balancing Work and Well-Being',
    },
    {
        id: 2,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/blogs/post-it-notes-3233653_1280_441.jpg',
        date: '08-Aug-2024',
        title: 'Employee Retention Strategies That Work',
    },
    {
        id: 3,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/blogs/laptop-8499942_1280_661.jpg',
        date: '08-Aug-2024',
        title: 'Remote Work Productivity Hacks',
    },
];

export default function BlogPostSection() {
    return (
        <section id="customerTestimonials" className="px-14 py-10">
            <h1 className="my-7 gap-3 text-center font-montserrat text-4xl font-semibold">Latest Blog Posts</h1>
            <div className="grid grid-cols-3">
                {BlogPosts.map((blogpost) => (
                    <BlogCard title={blogpost.title} date={blogpost.date} imageUrl={blogpost.imageUrl} key={blogpost.id} />
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
