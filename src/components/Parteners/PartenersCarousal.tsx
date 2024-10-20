"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "@/assets/download.png";
import s2 from "@/assets/images (1).png"
import s3 from "@/assets/images.png"


// Import Swiper styles../
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./partenerCarusal.css";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

export default function PartenerCarusal() {
  return (
    <>
      <div className="xs:hidden md:flex">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          loop={true} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            668: {
              slidesPerView: 3,
            },
            868: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay, FreeMode]}
          className="myCarousalSwiperMobile"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s1} alt="carousal image" className="w-5 h-3" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s2} alt="carousal image" className="w-5 h-3" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s3} alt="carousal image" className="w-5 h-3" />
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s1} alt="carousal image" className="w-5 h-3" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s2} alt="carousal image" className="w-5 h-3" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s3} alt="carousal image" className="w-5 h-3" />
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s1} alt="carousal image" className="w-5 h-3" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s2} alt="carousal image" className="w-5 h-3" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-[24px] h-[143px] items-center">
            <Image src={s3} alt="carousal image" className="w-5 h-3" />
              
            </div>
          </SwiperSlide>
        
        </Swiper>
      </div>
    </>
  );
}