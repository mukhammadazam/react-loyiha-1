import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';
import lagmon from './imges/uygur.png';
import tuxum from './imges/tuxum.png';
import viski from './imges/viski.png';
// import hover from './imges/Hover.png';

const swper = () => {
    return (
        <div className='swper-site'>
            <div className='container d-xxl-flex  align-items-xxl-center justify-content-xxl-center'>
                <div className='swper pb-5'>
                    <p className='swper__title text-center text-lg-start'>Instagram</p>
                    <h4 className='swper__title1 text-center text-lg-start'>Photo Gallery</h4>
                    <p className='swper__text text-center text-lg-start '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                    <button className='swper__btn d-block d-xxl-inline mt-3'>View More</button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='gap-1 w-75 swper-site__swr d-none d-lg-block'  >
                    <SwiperSlide className='im'><img src={lagmon} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide><img src={viski} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide><img src={tuxum} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide><img src={lagmon} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide><img src={viski} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide><img src={tuxum} width='250' alt="galery" /></SwiperSlide>
                </Swiper>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='gap-1 swper-site__swr d-block d-lg-none'  >
                    <SwiperSlide className='d-flex  align-items-center justify-content-center'><img className='d-block ' src={viski} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={tuxum} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={lagmon} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={lagmon} width='250' alt="galery" /></SwiperSlide>
                    <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={lagmon} width='250' alt="galery" /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};
export default swper;