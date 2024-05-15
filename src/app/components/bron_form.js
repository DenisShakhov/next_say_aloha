"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import Link from "next/link";
import Image from "next/image";
function BronForm() {
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [selectedApp, setSelectedApp] = useState("WhatsApp");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = () => {
    console.log("Имя:", nameValue);
    console.log("Телефон:", inputValue);
    console.log("Приложение:", selectedApp);
    console.log("Согласие с условиями:", termsChecked);
  };

  return (
    <div className="container  mt-[50px] xl:mt-20 xl:gap-x-12 bg-white rounded-3xl xl:p-12 h-full flex flex-col xl:flex-row">
      <div
        className="bg-blue rounded-3xl bg flex flex-col items-start xl:justify-between h-[510px] xl:h-[640px] xl:w-1/2"
        style={{
          background:
            "url('/img/card_back_5_page.png') no-repeat center center / cover;",
        }}
      >
        <div className="relative mt-5 px-10  w-full">
          <Image
            width={135}
            height={130}
            className="absolute z-[13] md:w-[135px] xl:w-[130px] xl:top-7"
            src="/img/Ellipse 22.png"
          />
          <Image
            width={135}
            height={130}
            className="absolute z-[12]  md:w-[135px] xl:w-[130px] left-12 md:left-20 top-4 md:top-8 xl:left-24 xl:top-14"
            src="/img/Ellipse 23.png"
          />
        </div>
        <div className="xl:h-1/2 h-full mt-[150px] xl:mt-10 ml-[30px] xl:ml-10 text-white flex flex-col items-start mb-10 justify-center xl:justify-start">
          <h2 className="text-[30px] max-w-[275px] md:max-w-[596px] xl:max-w-[450px] md:text-[42px] font-semibold">
            Сформируем для вас индивидуальную экскурсию
          </h2>
          <p className="text-[16px] md:w-[450px] xl:max-w-[387px] l-140 font-normal mt-6 ">
            Мы разработаем для вас индивидуальную программу, которая полностью
            соответствует вашим мечтам. Расскажите нам о ваших желаниях или
            местах, которые хотите посетить, и мы составим для вас программу
          </p>
        </div>
      </div>
      <div className="xl:w-1/2 flex px-[30px] flex-col justify-start md:items-center relative xl:ml-16 xl:p-0 mt-10 xl:mt-0 xl:h-[640px]">
        <div className="flex flex-row w-full h-[100px] md:h-[150px] items-center top-0 justify-between md:w-[420px]">
          <img
            className="w-20 mb-auto h-16 md:w-[120px] md:h-[100px]"
            src="/img/snorkling.png"
          />
          <img
            className="w-20 h-16 md:w-[120px] md:h-[100px]"
            src="/img/islands.png"
          />
          <img
            className="w-20 -mt-2 mb-auto h-16 md:w-[120px] md:h-[100px]"
            src="/img/fishing.png"
          />
        </div>
        <div className="max-w-[404px] flex-col text-smm md:text-center xl:mt-[85px] font-semibold l-140 items-left items-center flex justify-start text-[16px] xl:text-[18px]">
          Заполните форму ниже. Наш менеджер перезвонит вам, чтобы уточнить все
          ваши пожелания и составить для вас идеальный тур
        </div>
        <Link href={`https://t.me/Daniel_Flores99`}>
          <div className="l-140 mt-5 text-blue font-bold xl:font-semibold text-[16px] xl:text-[18px] flex items-center justify-start">
            <img src="/img/telegram_2.svg" className="mr-2" />
            Или напишите ваш запрос нам в Telegram
          </div>
        </Link>
        <div className="p-0 flex items-start flex-col mt-5 md:w-full xl:w-[410px] rounded-3xl h-full">
          <div className="flex items-start flex-col gap-y-2 w-[280px] md:w-full xl:w-[404px] h-full">
            <div className="flex w-full justify-between h-[60px] items-center">
              <input
                type="text"
                id="name"
                className="form-input placeholder:text-blue-text placeholder:text-[12px] mb:placeholder:text-[14px] p-4 px-10 cursor rounded-3xl block w-full bg-light-blue"
                placeholder="Имя"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
              />
            </div>
            <div className="flex xl:justify-start justify-start h-[60px]  xl:pl-[30px] rounded-3xl items-center bg-light-blue w-[280px] md:w-full xl:w-[404px]">
              <PhoneInput
                country="ru"
                inputClass="input_phone_class"
                searchClass="search_phone_class"
                buttonClass="button_phone_class"
                containerClass="container_phone_class"
                placeholder="Enter phone number"
                value={inputValue}
                onChange={(inputValue) => setInputValue(inputValue)}
              />
            </div>
            <div className="flex relative w-full items-center">
              <select
                id="app"
                className="form-select px-10 text-[12px] mb:text-[14px] block w-full select-css rounded-3xl py-4 pr-8 bg-light-blue"
                value={selectedApp}
                onChange={(e) => setSelectedApp(e.target.value)}
              >
                <option value="WhatsApp">WhatsApp</option>
                <option value="Viber">Viber</option>
              </select>
              <img src="/img/arrow_down.svg" className="absolute right-6" />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 mt-4 h-[60px] bg-blue text-base font-semibold text-center text-white transition duration-200 ease-in rounded-3xl"
            >
              Создать свой личный тур
            </button>
            <div className="flex max-w-[362px] md:max-w-full xl:max-w-[362px] mb-10 items-center">
              <input
                id="terms"
                type="checkbox"
                className="form-checkbox h-[32px] w-7 text-indigo-600 transition duration-150 ease-in-out rounded border-gray-300"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
              <label
                htmlFor="terms"
                className="ml-3 block text-[12px] xl:mb-0 text-blue-text"
              >
                Нажимая на кнопку, я соглашаюсь с политикой конфиденциальности
                сайта
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BronForm;
