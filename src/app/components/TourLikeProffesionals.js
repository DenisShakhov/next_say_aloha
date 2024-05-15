import Image from "next/image";
import Link from "next/link";
export default function TourLikeProffesionals() {
  return (
    <>
      <div className="container w-full mb-10 md:gap-x-[27px] xl:gap-x-0 bg-white px-[30px] py-[50px]  xl:p-12 rounded-3xl text-blue-text justify-between mt-10 flex flex-col-reverse md:flex-row xl:flex-row">
        <div className="flex flex-col justify-start  items-start h-full">
          <div className="flex flex-col items-start mt-[20px] xl:mt-0 justify-between h-full">
            <h2 className="text-[30px] md:text-[42px]   max-w-[450px] font-semibold leading-none">
              Путешествуйте <br className="hidden md:flex" />
              как профессионалы
            </h2>
            <div className="mt-10 l-140 max-w-[300px] text-grey-text text-[14px] xl:text-[16px]">
              Узнайте из первых уст, что ждёт вас в путешествии, и поделитесь
              собственными мечтами и ожиданиями
            </div>
          </div>
          <div className="text-[14px] xl:text-[16px] max-w-[400px] gap-y-2.5 flex text-blue-text flex-col font-bold mb-auto mt-[30px]">
            <div className="flex items-center h-[50px] justify-start ">
              <img src="/img/photoapparat.svg" className="mr-[20px]" />
              ЖИВЫЕ ФОТОГРАФИИИ С ЭКСКУРСИИ
            </div>
            <div className="flex items-center h-[50px] justify-start">
              <img src="/img/smile.svg" className="mr-[20px]" />
              ИСКРЕННИЕ ОТЗЫВЫ ОТ НАШИХ ПУТЕШЕСТВЕННИКОВ
            </div>
            <div className="flex items-center h-[50px] justify-start">
              <img src="/img/like.svg" className="mr-[20px]" />
              СОВЕТЫ И ВДОХНОВЛЯЮЩИЕ ИСТОРИИ
            </div>
          </div>
          <Link href={`https://t.me/Daniel_Flores99`}>
            <div className="p-4 bg-blue rounded-3xl mt-[30px] mb-auto md:w-[280px] cursor-pointer w-full flex items-center justify-center xl:w-full text-white xl:px-10 font-medium">
              Перейти в телеграмм
            </div>
          </Link>
        </div>
        <Image
          width={530}
          height={500}
          className="mt-10 md:mt-0  rounded-3xl "
          src="/img/bt_girl.png"
        />
      </div>
    </>
  );
}
