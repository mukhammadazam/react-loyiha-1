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
      <div className='container'>
        <div className='swper'>
            <strong className='swper__title'>Instagram</strong>
            <h4 className='swper__title1'>Photo Gallery</h4>
            <p className='swper__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button className='swper__btn'>View More</button>
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
        >
            <SwiperSlide><img src={viski}/></SwiperSlide>
            <SwiperSlide><img src={tuxum}/></SwiperSlide>
            <SwiperSlide><img src={lagmon}/></SwiperSlide>
            <SwiperSlide><img src={lagmon}/></SwiperSlide>
            <SwiperSlide><img src={lagmon}/></SwiperSlide>

        </Swiper>
      </div>
    );
};
export default swper;