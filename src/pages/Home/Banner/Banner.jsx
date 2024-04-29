import { Swiper, SwiperSlide } from 'swiper/react';

import '../../../../node_modules/swiper/swiper-bundle.min.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slider1 from '../../../assets/slider-1.png';
import slider2 from '../../../assets/slider-2.jpg';
import slider3 from '../../../assets/slider-3.jpg';
import { Typewriter } from 'react-simple-typewriter';


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

      <SwiperSlide>

        <div className='bg-no-repeat w-full bg-center bg-cover h-[550px] flex justify-center items-center' style={
          {
            backgroundImage: `url(${slider1})`,
          }
        }>
          <div className='text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center'>
            <div className='mt-12 space-y-4'>

              <h1 className='text-xl md:text-6xl font-bold text-white'>YOUR ULTIMATE SPOT <br /> FOR CREATIVE{' '}<Typewriter
                words={['CREATION','INSPIRATION', 'EXPRESSION']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              /></h1>

              <div>
                <p className='text-xl font-semibold  text-white'>Discover the beauty of handmade craftsmanship with our curated selection of unique and inspiring creations.</p>
              </div>

              <button type="button" className="text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl">
                Explore now
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>

        <div className='bg-no-repeat w-full bg-center  bg-cover h-[550px] flex justify-center items-center' style={
          {
            backgroundImage: `url(${slider2})`,
          }
        }>
          <div className='text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center'>
            <div className='mt-12 space-y-4'>

              <h1 className='text-xl md:text-6xl font-bold text-white'>YOUR ULTIMATE SPOT <br /> FOR CREATIVE{' '}<Typewriter
                words={['CREATION', 'INSPIRATION', 'EXPRESSION']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              /></h1>

              <div>
              <p className='text-xl font-semibold  text-white'>Discover the beauty of handmade craftsmanship with our curated selection of unique and inspiring creations.</p>
              </div>

              <button type="button" className="text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl">
                Explore now
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>

        <div className='bg-no-repeat w-full bg-center bg-cover h-[550px] flex justify-center items-center' style={
          {
            backgroundImage: `url(${slider3})`,
          }
        }>
          <div className='text-center bg-gray-700 h-full w-full bg-opacity-30 flex justify-center items-center'>
            <div className='mt-12 space-y-4'>

              <h1 className='text-xl md:text-6xl font-bold text-white'>YOUR ULTIMATE SPOT <br /> FOR CREATIVE{' '}<Typewriter
                words={['CREATION','INSPIRATION', 'EXPRESSION']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              /></h1>

              <div>
              <p className='text-xl font-semibold  text-white'>Discover the beauty of handmade craftsmanship with our curated selection of unique and inspiring creations.</p>
              </div>

              <button type="button" className="text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl">
                Explore now
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;