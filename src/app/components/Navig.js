"use client";

import React, { useState } from "react";
import Link from "next/link";
export default function Navig() {
  // State to manage the dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <nav className="w-full hidden z-[10000] md:flex items-center justify-center top-0 h-[86px]">
        <div className="pt-4 xl:flex relative container w-full xl:items-center xl:justify-between">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center max-w-[120px] leading-none"
            >
              <img src="/img/logo.svg" alt="Logo" className="h-12 w-12" />
              <h2 className="font-bold p-0.5 text-blue text-[20px] ml-2">
                SEY ALOHA
              </h2>
            </Link>
            <div className="xl:hidden">
              <button
                type="button"
                className="text-blue-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              ></button>
            </div>
          </div>

          <div
            id="dropdown_excursion_trigger"
            className="hidden mr-auto xl:flex mt-2 bg-white px-11 py-4 ml-5 rounded-3xl text-[14px] xl:mt-0 space-x-2"
          >
            <div className="relative text-blue-text">
              <span
                id="excursion_button"
                className="cursor-pointer"
                onClick={toggleDropdown} // Toggle dropdown on click
              >
                Экскурсии
              </span>
            </div>

            <img src="/img/dot.svg" alt="dot" />
            <Link href={"/group"}>
              <div className="cursor-pointer">Групповые</div>
            </Link>
            <img src="/img/dot.svg" alt="dot" />
            <Link href={"/individual"}>
              <div className="cursor-pointer">Индивидуальные</div>
            </Link>
            {/* <img src="/img/dot.svg" alt="dot" />
            <a href="#" className="text-blue-text">
              Рыбалка
            </a>
            <img src="/img/dot.svg" alt="dot" />
            <a href="#" className="text-blue-text">
              Яхтинг
            </a>
            <img src="/img/dot.svg" alt="dot" />
            <a href="#" className="text-blue-text">
              Катамаран
            </a>
            <img src="/img/dot.svg" alt="dot" />
            <a href="#" className="text-blue-text">
              О компании
            </a> */}
          </div>
          <div className="w-fit gap-x-1 mr-8 flex items-center justify-between">
            <button
              id="search_button"
              type="button"
              className="text-blue-500 bg-white p-4 rounded-full hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <img src="/img/search.svg" alt="Search" className="h-5 w-5" />
            </button>
            <div
              id="search_content"
              className="hidden absolute z-[6000] items-center px-[40px] py-[15px] rounded-3xl justify-start top-24 w-[1160px] left-0 bg-white"
            >
              <img src="/img/search.svg" alt="Search" className="h-5 w-5" />
              <input
                className="w-full rounded-3xl pl-3 py-[10px] ml-[25px] mr-[25px]"
                placeholder="Введите текст"
              />
              <div
                id="search_type_button"
                className="ml-auto bg-blue py-[15px] px-[43px] rounded-3xl text-white font-bold text-[14px]"
              >
                Поиск
              </div>
            </div>
            <button
              type="button"
              id="bucket_button"
              className="text-blue-500 bg-white p-4 rounded-full hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <img src="/img/bag.svg" alt="shop" className="h-5 w-5" />
            </button>
            <div
              id="bucket_content"
              className="fixed hidden w-full z-[7000] right-0 md:w-[600px] bg-white top-0 h-[100vh] flex-col items-start justify-start px-[25px] pt-[60px] md:p-[50px]"
            >
              <h4 className="text-black font-semibold text-[24px] l-140">
                Ваше путешествие
              </h4>
              <div className="bg-black h-[1px] w-full mt-[20px]"></div>
              <div className="flex items-center mt-[40px] justify-between w-full xl:justify-start">
                <div className="flex flex-col items-start justify-start md:flex-row md:items-center">
                  <div className="max-w-[230px] text-[18px] l-140">
                    Водная экскурсия в морской национальный парк «Святая Анна»
                  </div>
                  <div className="flex items-center justify-center gap-x-[10px]">
                    <img src="/img/minus.svg" alt="minus" />1
                    <img src="/img/plus.svg" alt="plus" />
                  </div>
                </div>
                <div className="md:ml-[30px] mt-auto md:mt-0">160 €</div>
                <img
                  className="md:ml-[30px] hidden md:flex"
                  src="/img/delete_gray.svg"
                  alt="delete"
                />
              </div>
            </div>
            <button
              type="button"
              className="text-blue-500 bg-white p-4 rounded-full hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <img
                src="/img/telegram_3.svg"
                alt="telegram"
                className="h-5 w-5"
              />
            </button>
          </div>

          <div className="hidden xl:flex items-center space-x-5">
            <a
              href="#"
              className="text-blue-text flex items-center font-bold text-[16px] gap-x-2 justify-center"
            >
              En
              <img src="/img/arrow_down.svg" alt="arrow down" />
            </a>
            <a
              href="#"
              className="text-blue-text flex items-center font-bold text-[16px] gap-x-2 justify-center"
            >
              € (EUR)
              <img src="/img/arrow_down.svg" alt="arrow down" />
            </a>
            <a
              href="#"
              className="text-blue-text bg-white rounded-3xl font-bold text-[16px] px-12 py-3"
            >
              Войти
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
