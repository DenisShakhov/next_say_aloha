"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/app/store/useStore";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Hero() {
  const [tours, setTours] = useState(null);
  const { startDate, members, endDate, setExcursionTitle, setExcursionPrice } = useStore();
  const route = useRouter();

  useEffect(() => {
    const getGroupExcursions = useStore.getState().getGroupExcursions;
    const data = getGroupExcursions();
    setTours(Object.entries(data)); // Convert the object to an array of [key, value] pairs
  }, []);

  function submit(link) {
  }

  return (
    <div className="mt-[50px] grid gap-5 grid-cols-1 md:grid-cols-2 ">
      {tours && tours.map(([link, tour], index) => {
        
        return (
          
          <div
            key={index}
            className="w-full h-[500px] xl:w-[570px] flex flex-col rounded-3xl items-center justify-end xl:h-[550px] p-[30px] xl:py-[60px] xl:px-[50px]"
            style={{ backgroundImage: `url(${tour.backgroundImage})` }}
          >
            <div className="flex items-start mb-[30px] h-[65px] xl:h-full  justify-between w-full">
              <div className="flex text-blue-text text-[14px] flex-col items-start justify-start">
                {tour.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-[12px] xl:text-[14px] px-[19px] py-[5px] rounded-3xl mt-[5px] first:mt-0"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="border text-[12px] xl:text-[14px] border-white px-[19px] py-[5px] text-white rounded-3xl">
                {tour.price}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="text-[30px] flex items-end justify-end h-[126px] xl:h-full xl:text-[42px] text-white font-semibold">
                {tour.title}
              </h2>
              <div className="text-[16px] xl:text-[18px] h-[22px] xl:h-full xl:l-140 mt-[30px] text-white">
                {tour.points}
              </div>
              <div className="mt-5 text-white h-[21px] xl:h-full flex w-full items-center justify-start gap-x-[20px]">
                <div className="flex items-center text-[14px] xl:text-[16px] justify-start gap-x-[2px]">
                  <img src="/img/clock_2.svg" alt="Clock" />
                  {tour.time}
                </div>
                <div className="flex items-center justify-start xl:ml-[30px] gap-x-[2px]">
                  <img src="/img/people.svg" alt="People" />
                  {tour.people}
                </div>
              </div>
            </div>
            <div className="items-center h-[128px] xl:h-full mt-[40px] justify-start flex flex-col xl:flex-row w-full">
              <Link href={`/excursion/${link}`}>
              <div
                onClick={() => submit(link)}
                className="border xl:w-full cursor-pointer w-full bg-white flex items-center font-bold px-[43px] justify-center text-blue-text l-100 rounded-3xl text-center l-140 text-[16px] h-[60px]"
              >
                Подробнее
              </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
