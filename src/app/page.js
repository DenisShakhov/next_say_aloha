import { Manrope } from "next/font/google";
import InformationSale from "./components/informationSale";
import HeroPage from "./components/hero_page";
import SliderPage1 from "./components/SliderPage";
import Slide4 from "./components/slide_4";
import BronForm from "./components/bron_form";
import SecondSliderSection from "./components/second_slider_section";
import TourLikeProffesionals from "./components/TourLikeProffesionals";
import ThirdSlider from "./components/ThirdSlider";
import LastSection from "./components/last_section";
import Navig from "./components/Navig";
export default function page1() {
  return (
    <main className="container px-[25px]  mx-auto xl:px-0">
      <Navig />
      <HeroPage />
      <InformationSale />
      <SliderPage1 />
      <Slide4 />
      <BronForm />
      <SecondSliderSection />
      <TourLikeProffesionals />
      <ThirdSlider />
      <LastSection />
    </main>
  );
}
