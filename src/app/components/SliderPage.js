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
          prevEl: ".prev",
          nextEl: ".next",
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

      <button className="prev  left-12 xl:left-12 top-[80%] md:top-[67%] xl:top-[83%]  z-10   ">
        <Image width={50} height={50} src="/img/Arrow left.svg" />
      </button>
      <button className="next  left-28 xl:left-28 z-[4000] top-[80%] md:top-[67%] xl:top-[83%]  ">
        <Image width={50} height={50} src="/img/Arrow right.svg" />
      </button>
    </>
  );
};

export default function SliderPage1() {
  return (
    <div className="relative rounded-b-3xl leading-none  xl:h-full w-full swiper  mt-20 rounded-3xl">
      <Slider>
        <div>
          <h2 className="absolute_custom flex max-w-[250px] md:max-w-[643px] left-4 text-left top-1/2 w-3/4  text-[26px] xl:text-[42px] text-white">
            Отправитесь в увлекательные экскурсии от коралловых рифов
            и тропических лесов до водопадов и уединённых пляжей
          </h2>
          <div className="image_slide_for_bg relative">
            <Image
              width={1160}
              height={600}
              src="/img/scroll_1_image.png"
              alt="Slide 2"
            />
            <div className="gradient-overlay"></div>
          </div>
        </div>
        <div>
          <h2 className="absolute_custom flex max-w-[250px] md:max-w-[643px] left-4 text-left top-1/2 w-3/4  text-[26px] xl:text-[42px] text-white">
            Посетите музеи и ботанические сады, узнаете о флоре и фауне,
            и окунётесь в богатую историю этого удивительного места
          </h2>
          <div className="image_slide_for_bg relative">
            <Image
              width={1160}
              height={600}
              src="/img/scroll_3_image.png"
              alt="Slide 2"
            />
            <div className="gradient-overlay"></div>
          </div>
        </div>
        <div>
          <h2 className="absolute_custom flex max-w-[250px] md:max-w-[643px] left-4 text-left top-1/2 w-3/4  text-[26px] xl:text-[42px] text-white">
            Почувствуешь азарт рыбалки в уникальных природных условиях
            Сейшелских островов
          </h2>
          <div className="image_slide_for_bg relative">
            <Image
              width={1160}
              height={600}
              src="/img/scroll_4_image.png"
              alt="Slide 2"
            />
            <div className="gradient-overlay"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
