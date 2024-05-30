"use client";
import Navig from "@/app/components/Navig";
import Nav from "../../components/Nav";
import Hero from "../components/Hero";
import Bron from "../components/broning";
import Buttons from "../components/buttons";
import Info from "../components/info";
import Map from "../components/map";
import ProgrammaExcursion from "../components/programma_excursion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/app/store/useStore";

export default function ExcursionPage({ params }) {
  const { startDate, members, endDate, setExcursionTitle, setExcursionPrice } = useStore();
  const [excursionData, setExcursionData] = useState(null);
  const [terms, setTerms] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const getAllExcursions = useStore.getState().getAllExcursions;
    const data = getAllExcursions();

    if (data && params.name && data[params.name]) {
      setExcursionData(data[params.name]);
    } else {
      setExcursionData(null);
    }
  }, [params.name]);

  if (!excursionData) {
    return <>Нет такой экскурсии</>;
  }

  function submit() {
    if (!startDate && !endDate) {
      alert("Вы не выбрали дату");
      return;
    }
    if (members.old === 0 && members.children === 0) {
      alert("Вы не выбрали количество участников");
      return;
    }
    setExcursionTitle(excursionData.title);
    setExcursionPrice(excursionData.priceForZug);
    if (!excursionData.isGroupExcursion) {
      route.push("/selectboat");
    } else {
      route.push("/oplata");
    }
  }

  const examplePath = [
    { label: "Главная", isCurrent: false },
    { label: "Все экскурсии", isCurrent: false },
    {
      label: excursionData.isGroupExcursion ? "Групповые" : "Индивидуальные",
      isCurrent: false,
    },
    { label: excursionData.title, isCurrent: true },
  ];

  return (
    <main className="px-[25px] container mx-auto xl:px-0">
      <Navig />
      <Nav path={examplePath} />
      <Hero
        title={excursionData.title}
        description={excursionData.description}
        time={excursionData.time}
        transportList={excursionData.transportList}
        excursionCost={excursionData.excursionCost}
        mainImages={excursionData.mainImages}
      />
      <Bron
        title={excursionData.title}
        price={excursionData.price}
        priceForZug={excursionData.excursionPriceForZug}
        isGroupExcursion={excursionData.isGroupExcursion}
      />
      <Info />
      <Buttons />
      <div className="mt-12 relative flex w-full xl:gap-x-[50px] xl:flex-row">
        <div className="flex flex-col w-full xl:w-2/3 max-w-[711px]">
          <ProgrammaExcursion excursions={excursionData.program} />
          <Map map_path={excursionData.map_path} />
          <div className="mt-[50px] flex flex-col items-start justify-start xl:mt-[80px]">
            <div className="flex items-center max-w-[635px] h-[90px] md:h-[100px] justify-start">
              <img
                src="/img/bulb.svg"
                className="bg-white py-[29px] px-[34px] md:py-[33px] md:px-[38px] rounded-full"
              />
              <div
                style={{
                  background:
                    "url('/img/text-bg-page_2_card_phone.svg') no-repeat left",
                  backgroundSize: "contain",
                }}
                className="w-[250px] md:hidden text-white font-bold text-[12px] p-4 pl-6"
              >
                Если вы не нашли в списке интересующую вас локацию, можете
                уточнить у гида возможность посещения.
              </div>
              <div
                style={{
                  background:
                    "url('/img/text-bg-page_2_card.svg') no-repeat center",
                  backgroundPositionY: "3px",
                }}
                className="md:w-[545px] -ml-2.5 hidden md:flex resp_card_bg_page_2 md:px-[50px] text-white md:text-[16px] font-bold md:py-[18px]"
              >
                Если вы не нашли в списке интересующую вас локацию, можете
                уточнить у гида возможность посещения.
              </div>
            </div>
            <div className="mt-5 last_element_for_fixed flex-col text-blue-text max-w-[635px] py-[20px] px-[30px] bg-white rounded-3xl flex items-center justify-start">
              <div className="flex flex-col md:flex-row items-start justify-start w-full">
                <div className="flex gap-x-[15px] items-center justify-center">
                  <img src="/img/danil.png" />
                  <div className="flex flex-col items-start justify-start">
                    <span className="font-bold text-[16px]">Даниил</span>
                    <span className="text-[12px]">Тревел-эксперт</span>
                  </div>
                </div>
                <div className="flex md:ml-[30px] mt-[20px] md:mt-0 items-center justify-center gap-x-[10px]">
                  <button className="bg-light-blue border-blue-text font-bold border-[1px] text-[16px] w-[220px] h-[60px] rounded-3xl text-blue-text px-[34px] py-[19px]">
                    Связаться с гидом
                  </button>
                  <img
                    src="/img/telegram_3.svg"
                    className="p-[17px] rounded-full bg-light-blue"
                  />
                </div>
              </div>
              <div className="mt-5 text-[16px] l-140">
                Выше изложено примерное описание, тайминг, маршрут и локации.
                <br />
                <br />
                Все пункты маршрута будут согласованы по факту бронирования.
                Маршрут может варьироваться в зависимости погодных условий,
                ваших пожеланий к поездке и затраченное время в каждой из
                локаций.
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url('/img/telegram_blog_bg.png')",
            }}
            className="mt-[50px] max-h-[404px] md:mt-[80px] p-[50px] flex flex-col items-start justify-start"
          >
            <h2 className="text-[42px] l-100 max-w-[460px] text-white">
              Присоединяйтесь к нашему Telegram-блогу!
            </h2>
            <div className="text-[16px] l-140 max-w-[360px] mt-[30px] text-white">
              Только у нас: живые отзывы, настоящее общение и масса полезных
              диалогов
            </div>
            <Link href={`https://t.me/Daniel_Flores99`}>
              <button className="bg-white rounded-3xl mt-[30px] text-blue px-[50px] py-[19px] text-[16px]">
                Перейти в телеграмм
              </button>
            </Link>
            <div className="mt-[30px] flex items-center gap-x-[6px] justify-start">
              <div className="text-white text-[16px] l-140">
                Мы в других соцсетях
              </div>
              <div className="flex items-center justify-start">
                <img
                  className="h-[46px] w-[46px]"
                  src="/img/instagram.svg"
                  alt="Instagram"
                />
                <img
                  className="h-[46px] w-[46px]"
                  src="/img/ri_vk-fill (1).svg"
                  alt="VK"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex sticky xl:w-1/3 flex-col">
          <div
            id="fixedCard"
            className="rounded-3xl w-[390px] z-[2000] flex items-center justify-center h-[700px]"
            style={{ background: "url(/img/form_bg_page_2.png)" }}
          >
            <div className="h-full flex flex-col items-center justify-end">
              <button
                onClick={submit}
                style={{
                  background:
                    "linear-gradient(150deg,#15A1DD 0%, #26B9C2 30%, #26C2B9 51%, #25C192 66%, #34E06E 83%, #00CC21 100%)",
                }}
                className="w-[340px] h-[60px] text-[16px] text-base font-bold text-center text-white transition duration-200 ease-in rounded-3xl"
              >
                <div className="text-[16px] flex items-center justify-center gap-x-[15px]">
                  {excursionData.isGroupExcursion
                    ? "Забронировать"
                    : "Выбрать лодку"}
                  <img
                    src="/img/arrow_right_green.svg"
                    alt="Arrow Right Green"
                  />
                </div>
              </button>
              <div className="flex mt-[10px] w-[340px] items-center">
                <input
                  id="terms"
                  type="checkbox"
                  checked={terms}
                  onChange={() => setTerms(!terms)}
                  className="form-checkbox h-[32px] w-7 bg-transparent transition duration-150 ease-in-out rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-[10px] block text-[12px] mb-10 xl:mb-0 text-white"
                >
                  Нажимая на кнопку, я соглашаюсь с политикой конфиденциальности
                  сайта
                </label>
              </div>
              <div className="max-w-[280px] mt-5 flex flex-col items-center">
                <div className="text-[16px] l-140 text-center text-white">
                  Или свяжитесь с нами любым удобным способом:
                </div>
                <div className="mt-[10px] flex items-center gap-x-[10px] mb-[50px] justify-between max-w-[150px]">
                  <img
                    src="/img/telegram_4.svg"
                    className="h-[30px] cursor-pointer w-[30px]"
                    alt="Telegram"
                  />
                  <img
                    src="/img/whatsup_4.svg"
                    className="h-[30px] cursor-pointer w-[30px]"
                    alt="WhatsApp"
                  />
                  <img
                    src="/img/viber_4.svg"
                    className="h-[30px] cursor-pointer w-[30px]"
                    alt="Viber"
                  />
                  <img
                    src="/img/phone_4.svg"
                    className="h-[30px] cursor-pointer w-[30px]"
                    alt="Phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
