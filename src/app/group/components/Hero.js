"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Hero() {
  const tours = [
    {
      backgroundImage: "/img/page_3_bg.png",
      tags: ["на авто", "можно индивидуально"],
      price: "от 300€",
      title: "Тур по острову Маэ",
      points: "12 точек по маршруту",
      time: "с 9:00 до 18:00",
      people: "1-23 человека",
      link: "maye-group",
    },
    {
      backgroundImage: "/img/page_3_card_bg_2.png",
      tags: ["на лодке", "можно индивидуально"],
      price: "80€",
      title: "Морской национальный парк «Святая Анна»",
      points: "6 точек по маршруту",
      time: "с 9:30 до 17:30",
      people: "12-15 человек",
      link: "saint-anna-group",
    },
    {
      backgroundImage: "/img/page_3_card_bg_3.png",
      tags: ["на лодке", "можно индивидуально"],
      price: "140€",
      title: "Тур по острову Ла Диг",
      points: "5 точек по маршруту",
      time: "с 6:30 до 18:00",
      people: "47 человек",
      link: "la-dig-group",
    },
    {
      backgroundImage: "/img/page_3_card_bg_3.png",
      tags: ["на лодке", "можно индивидуально"],
      price: "150€",
      title: "Тур по островам Праслин и Ла Диг",
      points: "5 точек по маршруту",
      time: "с 6:30 до 18:00",
      people: "47 человек",
      link: "praslin-la-dig-group",
    },
    {
      backgroundImage: "/img/page_3_card_bg_4.png",
      tags: ["на лодке", "можно индивидуально"],
      price: "150€",
      title: "Полный день на рыбалке в Индийском океане",
      points: "3 вида рыбалки",
      time: "с 7:30 до 16:30",
      people: "6 человек максимум",
      link: "indian-ocean-group",
    },
  ];
  const route = useRouter();
  function submit(info) {
    route.push(`/excursion/${info.link}`);
  }
  return (
    <div className="mt-[50px] grid gap-5 grid-cols-1 md:grid-cols-2 ">
      {tours.map((tour, index) => (
        <div
          key={index}
          className="w-full h-[500px] xl:w-[570px] flex flex-col rounded-3xl items-center justify-end xl:h-[550px] p-[30px] xl:py-[60px] xl:px-[50px]"
          style={{ backgroundImage: `url(${tour.backgroundImage})` }}
        >
          <div className="flex items-start mb-[30px] h-[65px] xl:h-full xl:mb-[80px] justify-between w-full">
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
            <h2 className="text-[30px] flex items-end justify-end h-[90px] xl:h-full xl:text-[42px] text-white font-semibold">
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
            <div
              onClick={() => submit(tour)}
              className="border xl:w-full cursor-pointer w-full bg-white flex items-center font-bold px-[43px] justify-center text-blue-text l-100 rounded-3xl text-center l-140 text-[16px] h-[60px]"
            >
              Подробнее
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
