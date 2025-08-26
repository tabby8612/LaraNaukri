// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import JobCategoryCard from '../ui/cards/jobCategoryCard';
import '/resources/css/app.css';
import { Category } from '@/types';

export default function JobCatgorySlider({ categories }: { categories: Category[] }) {


    return (
        <>
            <div className="relative mx-auto w-11/12">
                <Swiper slidesPerView={7} loop={true} spaceBetween={15} modules={[Navigation]} className="mySwiper" navigation={true}>
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            {
                                <JobCategoryCard
                                    key={category.id}
                                    id={`${category.id}`}
                                    imageUrl={category.image_path}
                                    name={category.name}
                                    jobs={category.jobs_count}
                                />
                            }
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
