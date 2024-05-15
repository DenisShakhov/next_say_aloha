"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
const Slider = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".prev_4",
          nextEl: ".next_4",
        }}
        pagination={{
          el: ".swiper-pagination2", // Укажите класс вашего элемента пагинации
          clickable: true, // Делаем точки кликабельными
        }}
        modules={[Navigation, Pagination]}
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

export default function SecondSliderSection() {
  return (
    <>
      <div className=" mt-20 pb-10 relative">
        <div className="flex relative  justify-between w-full items-center">
          <h2 className="text-blue-text text-[30px]  xl:text-[42px] max-w-[670px] md:max-w-[560px] xl:max-w-[670px] font-semibold">
            Искренние эмоции и яркие воспоминания наших туристов
          </h2>
          <div className=" hidden md:flex justify-end items-center gap-x-4">
            <img
              className="cursor-pointer prev_4"
              src="/img/Arrow left_2.svg"
            />
            <img
              className="cursor-pointer next_4"
              src="/img/Arrow right_2.svg"
            />
          </div>
        </div>
        <div className="mt-[50px] flex items-center justify-start">
          <p className="max-w-[225px] text-[16px] l-140">
            Еще большое фото и видео в нашем Telegram и Vkontakte
          </p>
          <div className="flex items-center ml-3 xl:ml-9 gap-x-3 justify-start">
            <img src="/img/vk.svg" className="h-11 w-11 cursor-pointer " />
            <Link href={`https://t.me/Daniel_Flores99`}>
              <img
                src="/img/telegram_2.svg"
                className="h-11 w-11 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Slider>
          <Image width={373} height={300} src="/img/smiling_women.png" />
          <Image width={373} height={300} src="/img/smiling_people.png" />
          <Image width={373} height={300} src="/img/man.png" />
          <Image width={373} height={300} src="/img/smiling_women.png" />
          <Image width={373} height={300} src="/img/smiling_people.png" />
          <Image width={373} height={300} src="/img/man.png" />
        </Slider>
        <div className="swiper-pagination2 left-0 z-50"></div>
      </div>
    </>
  );
}
