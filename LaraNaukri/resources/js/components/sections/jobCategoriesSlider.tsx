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

export default function JobCatgorySlider() {
    const categories = [
        {
            id: 1,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/creativity_128.png',
            name: 'Creative Design',
            jobs: 3,
        },
        {
            id: 2,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/admin_26.png',
            name: 'Admin',
            jobs: 1,
        },
        {
            id: 3,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/coding%20(1)_153.png',
            name: 'Web Developer',
            jobs: 3,
        },
        {
            id: 4,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/bank_241.png',
            name: 'Bank Operations',
            jobs: 1,
        },
        {
            id: 5,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/logo-design_755.png',
            name: 'Graphic Design',
            jobs: 10,
        },
        {
            id: 6,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/drugs_384.png',
            name: 'Medicine',
            jobs: 3,
        },
        {
            id: 7,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/admin_26.png',
            name: 'Admin',
            jobs: 3,
        },
        {
            id: 8,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/coding%20(1)_153.png',
            name: 'Developer',
            jobs: 3,
        },
        {
            id: 9,
            imageUrl: 'https://www.sharjeelanjum.com/demos/jobsportal-update/uploads/functional_area/logo-design_755.png',
            name: 'Logo Design',
            jobs: 3,
        },
    ];

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
                                    imageUrl={category.imageUrl}
                                    name={category.name}
                                    jobs={category.jobs}
                                />
                            }
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
