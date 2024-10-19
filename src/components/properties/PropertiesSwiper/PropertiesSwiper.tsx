
"use client"
import React, { useRef, useState } from 'react';
import pro1 from "@/assets/pro1.png"
import pro2 from "@/assets/pro2.png"
import pro3 from "@/assets/pro3.png"

import { Swiper, SwiperSlide } from 'swiper/react';


import { GoArrowRight ,GoArrowLeft } from "react-icons/go";



import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import './PropertiesSwiper.css';


import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function CustomSwiper() {
  return (
    <>
    <div className="relative">
      <Swiper
        
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination", 
        }}
        navigation={{
          prevEl: ".custom-prev-btn", 
          nextEl: ".custom-next-btn", 
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
      >
        
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <Image
              src={pro1}
              alt="property-image"
             className='w-10 '
            />
          <div className="flex w-full px-3 justify-between">

            <h3 className=''>New Cairo</h3>

            <GoArrowLeft />
          </div>
          
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <Image
              src={pro2}
              alt="property-image"
             className='w-10 '
            />
          <div className="flex w-full px-3 justify-between">

            <h3 className=''>October</h3>

            <GoArrowLeft />
          </div>
          
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <Image
              src={pro3}
              alt="property-image"
             className='w-10 '
            />
          <div className="flex w-full px-3 justify-between">

            <h3 className=''>Seaside</h3>

            <GoArrowLeft />
          </div>
          
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <Image
              src={pro1}
              alt="property-image"
             className='w-full h-[270px] '
            />
          <div className="flex w-full px-3 justify-between">

            <h3 className=''>New Cairo</h3>

            <GoArrowLeft />
          </div>
          
          </div>
        </SwiperSlide>


        <div className="flex items-center justify-center gap-4 mt-4 custom-pagination-container">
        <div className="custom-prev-btn">
          <GoArrowLeft />
        </div>
        <div className="custom-pagination"></div>
        <div className="custom-next-btn">
          <GoArrowRight />
        </div>
      </div>
      </Swiper>
      </div>
    </>
  );
}
