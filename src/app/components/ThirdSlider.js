"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
const Slider = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".prev_2",
          nextEl: ".next_2",
        }}
        modules={[Navigation]}
        className="mySwiper relative  leading-none xl:h-full w-full mt-20 rounded-3xl"
      >
        {children.map((child, index) => (
          <div key={index} className="swiper-slide h-[600px] slide">
            <SwiperSlide>{child}</SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default function ThirdSlider() {
  return (
    <>
      <div className="container pb-10 relative flex flex-col items-center justify-start mt-20 ">
        <div className="flex text-blue-text flex-col justify-start items-center">
          <h2 className="text-[30px] xl:text-[42px] text-center   max-w-[600px] font-semibold">
            Невероятные локации Сейшельских островов
          </h2>
          <div className="max-w-[430px] mt-7 text-center text-[14px] xl:text-[16px] font-normal">
            Это только небольшая часть. Всю красоту вы сможете увидеть сами,
            пройдя по нашим авторским маршрутам
          </div>
        </div>
        <Slider>
          <img className="" src="/img/scroll_1_image.png" alt="Slide 1" />

          <img className="" src="/img/scroll_1_image.png" alt="Slide 1" />
        </Slider>
        <button className="prev_2 left-1 md:-left-3 xl:-left-20 z-10 top-[68%] md:top-[63%] w-15 h-15">
          <img src="/img/Arrow left_2.svg" className="hidden md:flex" />
          <img src="/img/Arrow left.svg" className="flex md:hidden" />
        </button>
        <button className="next_2 right-1 md:-right-3 xl:-right-20 z-10 top-[68%] md:top-[63%] w-15 h-15">
          <img src="/img/Arrow right_2.svg" className="hidden md:flex" />
          <img src="/img/Arrow right.svg" className="flex md:hidden" />
        </button>

        <div className="swiper-pagination absolute w-fit  bottom-0"></div>
      </div>
    </>
  );
}
