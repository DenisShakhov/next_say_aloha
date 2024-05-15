import Navig from "../components/Navig";
import TourLikeProffesionals from "../components/TourLikeProffesionals";
import BronForm from "../components/bron_form";
import SecondSliderSection from "../components/second_slider_section";
import Hero from "./components/Hero";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Page() {
  const examplePath = [
    { label: "Главная", isCurrent: false },
    { label: "Все экскурсии", isCurrent: false },
    { label: "Индивидуальные", isCurrent: true },
  ];

  return (
    <main className=" container px-[25px]   xl:px-0 mx-auto">
      <Navig />
      <Nav path={examplePath} />
      <div className="mt-5">
        <h2 className="text-[42px] text-blue-text max-w-[560px]">
          Выберите и забронируйте незабываемое приключение на Сейшелы!
        </h2>
      </div>
      <div className=" mt-[30px] pb-[10px] scroll-changed overflow-x-scroll flex items-center gap-x-[10px] just">
        <div className="border cursor-pointer w-[210px]  flex items-center font-bold px-[28px] justify-center border-blue-text text-blue-text l-100 rounded-3xl text-center l-140  text-[16px]  h-[60px] ">
          Все экскурсии
        </div>
        <Link href={`/individual`}>
          <div className="border cursor-pointer  w-[210px] bg-blue flex items-center font-bold px-[28px] justify-center  text-white l-100 rounded-3xl text-center l-140  text-[16px]  h-[60px]">
            Индивидуальные
          </div>
        </Link>
        <Link href={`/group`}>
          <div className="border cursor-pointer w-[210px]  flex items-center font-bold px-[28px] justify-center border-blue-text text-blue-text l-100 rounded-3xl text-center l-140  text-[16px]  h-[60px]">
            Групповые
          </div>
        </Link>
      </div>
      <Hero />
      <SecondSliderSection />
      <BronForm />
      <TourLikeProffesionals />
    </main>
  );
}
