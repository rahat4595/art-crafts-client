import { Swiper, SwiperSlide } from 'swiper/react';

import '../../../../node_modules/swiper/swiper-bundle.min.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slider1 from '../../../assets/slider-1.png';
import slider2 from '../../../assets/slider-2.jpg';
import slider3 from '../../../assets/slider-3.jpg';

const Banner = () => {
    return (
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={1200}
        loop={true}
        pagination={{ clickable: true }}
        
      >
        <SwiperSlide><img className='rounded-xl' src={slider1} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
        <SwiperSlide><img className='rounded-xl' src={slider2} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
        <SwiperSlide><img className='rounded-xl' src={slider3} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
      </Swiper>
    );
};

export default Banner;