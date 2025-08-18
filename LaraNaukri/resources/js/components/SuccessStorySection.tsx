import SuccessStoryCard from './SuccessStoryCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules

import { Navigation } from 'swiper/modules';
import '/resources/css/app.css';

const feedbacks = [
    {
        id: '1',
        description: `Iam a working mom, needed flexibility in my job. I turned to Ekonty Jobs and found remote job listings that allowed me to balance work and family life. Iam now working as a content writer for an international company, all thanks to Ekonty
Jobs’ user-friendly interface and extensive job listings.`,
        name: 'John',
        status: 'client',
    },
    {
        id: '2',
        description: `"Iam a recent graduate, struggled to find a job in my field. I joined Ekonty Jobs and customized my profile, highlighting my skills and experiences. Within weeks, I received interview invitations from top companies. I landed my dream job at a tech startup, and I credit Ekonty Jobs for connecting me with the right opportunity"`,
        name: 'Jane',
        status: 'CEO - Gates Inc',
    },
    {
        id: '3',
        description: `"I had been stuck in a dead-end job for years. I decided to explore Ekonty Jobs and discovered a listing for a position that aligned perfectly with my passion for marketing. After applying, I received personalized career advice from the platform. I aced the interview and secured the role, kickstarting my exciting career journey."`,
        name: 'John',
        status: 'client',
    },
    {
        id: '4',
        description: `"Iam a working mom, needed flexibility in my job. I turned to Ekonty Jobs and found remote job listings that allowed me to balance work and family life. Iam now working as a content writer for an international company, all thanks to Ekonty
Jobs’ user-friendly interface and extensive job listings."`,
        name: 'Maria',
        status: 'client',
    },
];

export default function SuccessStorySection() {
    return (
        <section id="customerTestimonials" className="px-14 py-10">
            <div className="my-7 gap-3 text-center font-montserrat text-4xl font-semibold">
                <h2 className="font-montserrat text-lg text-yellow-500">Testimonials</h2>
                <h1 className="font-montserrat">Success Stories</h1>
            </div>
            <div className="relative mx-auto w-full">
                <Swiper slidesPerView={3} loop={true} spaceBetween={15} modules={[Navigation]} className="mySwiper" navigation={false}>
                    {feedbacks.map((feedback) => (
                        <SwiperSlide key={feedback.id}>
                            <SuccessStoryCard description={feedback.description} name={feedback.name} role={feedback.status} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
