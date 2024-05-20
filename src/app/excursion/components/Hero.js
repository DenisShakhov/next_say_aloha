import PropTypes from "prop-types";
import SliderWithThumbnails from "./Slider_Hero";
import Image from "next/image";
const Hero = ({
  title,
  time,
  description,
  transportList,
  excursionCost,
  mainImages,
}) => {
  const descriptionLines = description.replace(/\\n/g, "\n").split("\n");
  return (
    <>
      <div className="flex flex-col mt-[30px] xl:flex-row justify-between">
        <SliderWithThumbnails mainImages={mainImages} />
        <div className="w-full xl:w-1/2 flex flex-col items-start xl:pl-24 justify-start text-blue-text">
          <div className="w-full max-w-[500px] flex flex-col">
            <h2 className="l-100 font-bold text-left mt-[30px] xl:mt-0 max-w-[500px] text-[30px] md:text-[42px]">
              {title}
            </h2>
            <div className="l-140 mt-8 text-grey-text text-[14px] md:text-[16px]">
              {descriptionLines.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
          {time && (
            <div className="mt-[30px] flex flex-col md:text-[16px] items-start justify-start text-blue-text">
              <div className="flex w-fit items-start justify-start gap-x-2">
                <Image width={24} height={24} src="/img/clock.svg" />
                <div className="text-[16px] mr-auto font-bold">
                  Время маршрута:
                </div>
              </div>
              <div className="ml-[32px]">{time}</div>
            </div>
          )}
          <div className="mt-[20px] flex flex-col text-[16px] items-start justify-start text-blue-text">
            <div className="flex w-fit items-start justify-start gap-x-2">
              <Image width={24} height={24} src="/img/ship_3.svg" />
              <div className="text-[16px] mr-auto font-bold">Транспорт:</div>
            </div>
            <div className="mt-[10px] l-140 flex flex-col items-start justify-start text-blue-text">
              <ul className="custom-list list-disc pl-[50px]">
                {transportList.map((item, index) => (
                  <li key={index} className="text-left">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-[20px] flex flex-col items-start justify-start text-blue-text">
            <div className="flex w-fit items-start justify-start gap-x-2">
              <Image width={24} height={24} src="/img/euro.svg" />
              <div className="text-[16px] mr-auto font-bold">
                Стоимость экскурсии:
              </div>
            </div>
            <div className="ml-[32px] text-[16px] l-140 mt-[10px]">
              {excursionCost.map((item, index) => (
                <p key={index}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  transportList: PropTypes.arrayOf(PropTypes.string).isRequired,
  excursionCost: PropTypes.arrayOf(PropTypes.string).isRequired,
  mainImages: PropTypes.array.isRequired,
  time: PropTypes.string,
};

export default Hero;
