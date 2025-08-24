import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import '/resources/css/app.css';

import { Ribbon } from '../ui/Ribbon';
import FeaturedCandidateCard from '../ui/cards/FeaturedCandidateCard';

const candidates = [
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437674-648.jpg',
        name: 'Arjun Karanatha',
        profession: 'Accountant',
        location: 'Vapi',
        id: '1',
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437768-832.jpg',
        name: 'Sophie Jason',
        profession: 'Accountant',
        location: 'Albertville',
        id: '2',
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437838-57.jpg',
        name: 'Liza Martin',
        profession: 'Administration',
        location: 'Bainbridge Island',
        id: '3',
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437874-596.jpg',
        name: 'Sharjeel Anjum',
        profession: 'Information Technology',
        location: 'Islamabad',
        id: '4',
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437838-57.jpg',
        name: 'Liza Martin',
        profession: 'Administration',
        location: 'Bainbridge Island',
        id: '5',
    },
    {
        imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/user_images/-1741437874-596.jpg',
        name: 'Sharjeel Anjum',
        profession: 'Information Technology',
        location: 'Islamabad',
        id: '6',
    },
];

export default function FeaturedCandidateSection() {
    return (
        <section id="FeaturedCandidates" className="px-14 py-10">
            <div className="my-7 flex items-center justify-center gap-3 text-center font-montserrat text-4xl font-semibold">
                <Ribbon className="text-primary" />
                <h1 className="font-montserrat text-black">Featured Candidates</h1>
            </div>
            <div className="relative mx-auto w-full">
                <Swiper slidesPerView={4} loop={false} spaceBetween={15} modules={[Navigation]} className="mySwiper" navigation={true}>
                    {candidates.map((candidate) => (
                        <SwiperSlide key={candidate.id}>
                            {
                                <FeaturedCandidateCard
                                    id={candidate.id}
                                    imageUrl={candidate.imageUrl}
                                    location={candidate.location}
                                    name={candidate.name}
                                    profession={candidate.profession}
                                />
                            }
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-15 flex justify-center">
                <a
                    href={route('job.seekers')}
                    className="rounded-lg bg-primary px-5 py-3 text-center font-sans text-xl font-semibold tracking-wider text-white transition-colors duration-500 hover:bg-black"
                >
                    View All Candidates
                </a>
            </div>
        </section>
    );
}
