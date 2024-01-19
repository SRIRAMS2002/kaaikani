import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const Recent = () => {
  return (
    <div className='py-10'>
          <h2 class="mt-4 text-2xl text-center font-bold text-gray-900  md:text-4xl">
          Latest Offers{" "}
            </h2>
    

      <Swiper
       autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        
      }}
        watchSlidesProgress={true}
      
        className="mySwiper mt-5"
      >
       
        <SwiperSlide>
          <div className='md:min-h-[20rem] mx-5'>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96px rounded-lg"
            src='/Recent/about-bg1.png'
            // src="/1G.jpg"
            alt=""
          />

          </div>
          
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className='md:min-h-[20rem] mx-5'>
          <img
            className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
            src='/Recent/about-bg2.png'
            alt=""
          />
          </div>
          
        </SwiperSlide>{" "}
     

     

        
      </Swiper>
  
    </div>
  )
}

export default Recent
