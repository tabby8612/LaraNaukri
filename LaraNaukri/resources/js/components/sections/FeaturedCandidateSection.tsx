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
import { useEffect, useState } from 'react';
import { Candidate } from '@/types';

export default function FeaturedCandidateSection() {

    const [candidatesData, setCandidatesData] = useState<Candidate[] | null>(null);

    useEffect(() => {
        async function getCandidatesData() {
            const response = await fetch(route("featured.candidates"));

            if (!response.ok) throw new Error(`Unable to fetch data, status code: ${response.status}`);

            const data = await response.json();

            setCandidatesData(data);
        }

        getCandidatesData()

    }, []);


    return (
        <section id="FeaturedCandidates" className="px-14 py-10">
            <div className="my-7 flex items-center justify-center gap-3 text-center font-montserrat text-4xl font-semibold">
                <Ribbon className="text-primary" />
                <h1 className="font-montserrat text-black">Featured Candidates</h1>
            </div>
            <div className="relative mx-auto w-full">
                <Swiper slidesPerView={4} loop={false} spaceBetween={15} modules={[Navigation]} className="mySwiper" navigation={true}>
                    {candidatesData && candidatesData.map((candidate) => (
                        <SwiperSlide key={candidate.id}>
                            {
                                <FeaturedCandidateCard
                                    id={candidate.id}
                                    imageUrl={candidate.image_path}
                                    location={candidate.city}
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
