"use client";

import { useState } from "react";
import Image from "next/image";
import useStore from "@/app/store/useStore";
import { useRouter } from "next/navigation";
export default function BoatCard({
  imageSrc,
  imageAlt,
  title,
  amenities,
  price,
  options,
  optionsForZustand,
}) {
  const router = useRouter();
  const { setOptions, setExcursionPrice } = useStore();
  function fa() {
    if (optionsForZustand.barbeque) {
      setOptions("barbeque", true);
      setExcursionPrice(price);
    }
    router.push("/oplata");
  }
  return (
    <div className="w-[280px] flex flex-col items-center justify-start">
      <Image src={imageSrc} alt={imageAlt} width={280} height={400} />
      <div className="p-[30px] rounded-b-3xl bg-white">
        <div className="text-[18px] font-bold">{title}</div>
        <div className="text-[16px] font-bold mt-[30px]">
          Удобства на борту:
        </div>
        <div className="text-[16px] l-140 mt-[10px]">{amenities}</div>
        <ul className={`custom-list mt-[20px] text-blue`}>
          {options.map((option, index) => (
            <li key={index} className="flex items-center">
              {option}
            </li>
          ))}
        </ul>
        <div className="mt-[40px] bg-light-blue w-fit rounded-3xl border border-blue font-bold text-[16px] px-[30px] py-[5px]">
          {price}€
        </div>
        <div
          className="bg-blue text-white rounded-3xl mt-[10px] py-[17px] px-[50px] cursor-pointer"
          onClick={fa}
        >
          Забронировать
        </div>
      </div>
    </div>
  );
}
