"use client";
import React, { useState } from "react";

export default function ProgrammaExcursion({ excursions }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <div className="programma_excursii">
        <h2 className="text-blue-text text-[30px] xl:text-[42px] font-semibold">
          Программа экскурсии:
        </h2>

        <div className="flex flex-col">
          {excursions.map((excursion, index) => (
            <div className="w-full" key={index}>
              <button
                className="border dropdownButton bg-white mt-[10px] px-[30px] w-full x:mt-[10px] flex items-center font-bold justify-between border-blue-text text-blue-text rounded-3xl text-center md:l-140 text-[14px] md:text-[16px] h-[50px]"
                onClick={() => toggleExpansion(index)}
              >
                {excursion.title}
                <img
                  src="/img/arrow_down.svg"
                  className={
                    expandedIndex === index ? "transform rotate-180" : ""
                  }
                  alt="Arrow Down"
                />
              </button>
              <div
                className={` ${expandedIndex === index ? "md:flex" : "hidden"}`}
              >
                <div className="md:mt-5 flex w-full md:flex-row items-start justify-between">
                  <div
                    className="text-grey-text max-w-[320px]"
                    dangerouslySetInnerHTML={{ __html: excursion.description }}
                  ></div>
                  <img
                    src={excursion.image}
                    className="mt-5 md:mt-0"
                    alt="Excursion"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
