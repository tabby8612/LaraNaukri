// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import { Category } from '@/types';
import JobCategoryCard from '../ui/cards/jobCategoryCard';
import '/resources/css/app.css';

export default function JobCatgorySlider({ categories }: { categories: Category[] }) {
    return (
        <>
            <div className="relative mx-auto w-11/12">
                <Swiper
                    slidesPerView={7}
                    loop={true}
                    spaceBetween={15}
                    modules={[Navigation]}
                    className="mySwiper"
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1000: {
                            slidesPerView: 7,
                            spaceBetween: 40,
                        },
                    }}
                >
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
