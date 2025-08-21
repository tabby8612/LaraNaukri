import BlogCardWithFullImage from '../ui/cards/BlogCardWithFullImage';

const blogs = [
    {
        id: 1,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/blogs/balancing-1868051_1280_465.jpg',
        title: 'Balancing Work and Well-Being',
        categories: [{ name: 'Jobseeker', id: 1 }],
        description:
            'Encourage both candidates and employers to prioritize work-life balance. Share insights on stress management, mental health, and maintaining a healthy...',
    },
    {
        id: 2,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/blogs/post-it-notes-3233653_1280_441.jpg',
        title: 'Employee Retention Strategies That Work',
        categories: [{ name: 'Employers', id: 1 }],
        description:
            'Employers can learn about retaining top talent. Explore flexible work arrangements, growth opportunities, and recognition programs...',
    },
    {
        id: 3,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/blogs/laptop-8499942_1280_661.jpg',
        title: 'Remote Work Productivity Hacks',
        categories: [{ name: 'Jobseeker', id: 1 }],
        description:
            'Given the rise of remote work, provide practical tips for both candidates and employers to enhance productivity while working from home.',
    },
    {
        id: 4,
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/blogs/thumbs-up-2056022_1280_342.jpg',
        title: 'Creating a Positive Candidate Experience',
        categories: [{ name: 'Jobseeker', id: 1 }],
        description:
            'Address employers directly and emphasize the significance of treating candidates well throughout the hiring process. Highlight the impact of positive...',
    },
];

export default function MainBlogSection() {
    return (
        <section id="blog-section" className="w-3/4">
            <div className="grid grid-cols-2">
                {blogs.map((blog) => (
                    <BlogCardWithFullImage
                        id={blog.id}
                        title={blog.title}
                        description={blog.description}
                        categories={blog.categories}
                        imageUrl={blog.imageUrl}
                        key={blog.id}
                    />
                ))}
            </div>
        </section>
    );
}
