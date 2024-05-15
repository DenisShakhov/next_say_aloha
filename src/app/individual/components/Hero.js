"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Hero() {
  const tours = [
    {
      backgroundImage: "/img/page_3_bg.png",
      tags: ["на авто", "есть групповые"],
      price: "от 300€",
      title: "Тур по острову Маэ",
      points: "12 точек по маршруту",
      link: "maye-individual",
    },
    {
      backgroundImage: "/img/page_3_card_bg_2.png",
      tags: ["на лодке", "есть групповые"],
      price: "от 350€",
      title: "Морской национальный парк «Святая Анна»",
      points: "6 точек по маршруту",
      link: "saint-anna-individual",
    },

    {
      backgroundImage: "/img/page_3_card_bg_3.png",
      tags: ["на лодке", "можно рыбачить"],
      price: "от 350€",
      title: "Морской парк «Бэй Терней» и остров Терез",
      points: "5 точек по маршруту",
      link: "bey-terner-individual",
    },
    {
      backgroundImage: "/img/page_3_card_bg_3.png",
      tags: ["на лодке", "рыбалка и пикник"],
      price: "от 950€",
      title: "День на рыбалке в Индийском океане и на острове Терез",
      points: "5 точек по маршруту",
      link: "terez-individual",
    },
    {
      backgroundImage: "/img/page_3_card_bg_3.png",
      tags: ["на лодке", "есть групповые"],
      price: "от 1400€",
      title: "Экскурсия на остров Ла Диг",
      points: "6 точек по маршруту",

      link: "la-dig-individual",
    },
    {
      backgroundImage: "/img/page_3_card_bg_4.png",
      tags: ["на лодке", "есть групповые"],
      price: "150€",
      title: "Два острова: Праслин и Ла Диг",
      points: "5 точек маршрута",

      link: "praslin-la-dig-individual",
    },

    {
      backgroundImage: "/img/page_3_card_bg_4.png",
      tags: ["на лодке", "троллинг, джигинг, креольская  рыбалка"],
      price: "от 550€",
      title: "Трофейная рыбалка",
      points: "5 точек маршрута",

      link: "praslin-la-dig-individual",
    },
  ];
  const route = useRouter();
  function submit(info) {
    route.push(`/excursion/${info.link}`);
  }
  return (
    <div className="mt-[50px] grid gap-5 grid-cols-1 md:grid-cols-3 ">
      {tours.map((tour, index) => (
        <div
          key={index}
          className="w-full h-[500px] xl:w-[380px] flex flex-col rounded-3xl items-center justify-end xl:h-[550px] p-[30px]"
          style={{ backgroundImage: `url(${tour.backgroundImage})` }}
        >
          <div className="flex relative  items-start mb-[30px] h-[65px]   xl:mb-[140px] justify-between w-full">
            <div className="absolute top-0 left-0 flex text-blue-text mb-auto text-[14px] flex-col items-start justify-start">
              {tour.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="bg-white text-nowrap text-[12px] xl:text-[14px] px-[5px] py-[5px] rounded-3xl mt-[5px] first:mt-0"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="border absolute top-0 right-0 text-[12px] text-nowrap xl:text-[14px] border-white px-[12px] py-[5px] text-white rounded-3xl">
              {tour.price}
            </div>
          </div>
          <div className="flex flex-col items-start  xl:h-[160px] mb-[30px] justify-end w-full">
            <h3 className="text-[30px] flex items-end justify-end  xl:h-[111px]  xl:text-[37px] text-white font-semibold">
              {tour.title}
            </h3>
            <div className="text-[16px] xl:text-[18px] font-medium xl:h-[22px]  mt-[22px] text-white">
              {tour.points}
            </div>
          </div>
          <div className="items-center    justify-start flex flex-col xl:flex-row w-full">
            <div
              onClick={() => submit(tour)}
              className="border w-full cursor-pointer mt-auto mb-[20px] bg-white flex items-center font-bold px-[43px] justify-center text-blue-text l-100 rounded-3xl text-center l-140 text-[16px] h-[60px]"
            >
              Смотреть программу
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
