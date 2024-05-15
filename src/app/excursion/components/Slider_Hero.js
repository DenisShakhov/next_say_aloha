"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

const SliderPage1 = ({ mainImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main className="w-full xl:w-1/2 flex flex-col">
      <div className="swiper-container relative h-full rounded-3xl gallery-swiper">
        {/* Main Swiper */}
        <Swiper
          modules={[Thumbs, Navigation]}
          thumbs={{ swiper: thumbsSwiper }}
          loop={true}
          navigation={{
            nextEl: ".next_2",
            prevEl: ".prev_2",
          }}
          className="swiper-wrapper"
        >
          {mainImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                width={570}
                height={600}
                src={image}
                alt={`Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="prev_2 left-1 xl:left-5 z-50 top-1/2 w-15 h-15">
          <img src="/img/Arrow left.svg" className="" alt="Previous" />
        </button>
        <button className="next_2 right-1 xl:right-5 z-50 top-1/2 w-15 h-15">
          <img src="/img/Arrow right.svg" className="" alt="Next" />
        </button>
      </div>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        style={{ width: "100%", marginTop: 0 }}
        watchSlidesProgress
        slidesPerView={6}
        spaceBetween={10}
        modules={[Thumbs]}
        className="swiper mt-[10px] xl:mt-5 flex mySwiper"
      >
        {mainImages.map((thumb, index) => (
          <SwiperSlide key={index} className="swiper-slide rounded-[30px]">
            <img
              className="xl:rounded-[10px] rounded-[5px]"
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default SliderPage1;
