import img1 from './imges/chevron-left.svg';
import img2 from './imges/chevron-right.svg';
import img3 from './imges/klipartz1.png';
import img4 from './imges/klipartz2.png';
import img5 from './imges/klipartz3.png';
import img6 from './imges/klipartz4.png';
import img7 from './imges/yulduzcha.svg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function BasicExample() {
    return (
        <div className='bground'>
            <div className='container'>
                <div className='popular'>
                    <div className='popular__enner d-flex align-items-center justify-content-between  '>
                        <h2 className='popular__enner--title'>
                            Popular Dishes
                        </h2>
                        <ul className="d-flex align-items-center justify-content-center">
                            <li className=" pe-3 popular__img"><img src={img1} alt="popppular" /></li>
                            <li className=" popular__img"><img src={img2} alt="popppular" /></li>
                        </ul>
                    </div>



                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')} >

                        <SwiperSlide>
                            <div className='row'>
                                <div className='col-12 bg-light rounded col-sm-6 col-lg-3 row__cart justify-content-center'><img src={img3} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>

                                </div>
                                <div className='col-12 bg-light rounded col-sm-6 col-lg-3 row__cart justify-content-center'><img src={img4} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>

                                </div>
                                <div className='col-12 bg-light rounded col-sm-6 col-lg-3 row__cart justify-content-center'><img src={img5} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>

                                </div>
                                <div className='col-12 bg-light rounded col-sm-6 col-lg-3 row__cart justify-content-center'><img src={img6} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img3} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img4} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img5} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img6} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img3} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img4} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img5} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img6} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img3} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img4} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img5} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                                <div className='col-12 col-sm-6 col-lg-3  row__cart justify-content-center'><img src={img6} alt="popppular" />
                                    <p className='text-center'>Barbecue Shish kebab Shashlik Skewer</p>
                                    <div className='d-flex alingn-items-center justify-content-center'><img className='' src={img7} alt="popppular" /></div>
                                    <p className='row__leni'>$12.00</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    );
}

export default BasicExample;



