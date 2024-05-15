import Image from "next/image"
export default function InformationSale() {
    return (
    <>
    <div className="container relative flex flex-col-reverse xl:flex-row h-full gap-x-5 mt-20 w-full  justify-center">
      <div
        className="xl:w-1/2 z-50 w-full xl:pl-12 pt-[30px] xl:pt-[60px] rounded-3xl -mt-10 xl:-mt-0 bg-white flex flex-col ">
        <div className="pl-[30px] xl:pl-0 xl:max-w-full">
          <div
            className="flex flex-row flex-wrap w-[195px] md:w-[450px]  xl:pl-0 xl:w-full text-[12px] xl:text-[14px] text-blue-text  ">
            <span className="border rounded-2xl border-blue bg-[#F4F7F8] py-1 px-3 ">пляжи</span>
            <span className="border rounded-2xl border-blue bg-[#F4F7F8] py-1 px-3 ">сноркглинг</span>
            <span className="border mt-[5px] md:mt-0  rounded-2xl border-blue bg-[#F4F7F8] py-1 px-3">барбекю</span>
            <span className="border mt-[5px] md:mt-0  rounded-2xl border-blue bg-[#F4F7F8] py-1 px-3">черепахи</span>
          </div>
          <h3
            className="font-semibold max-w-[313px] md:max-w-[440px] text-[30px] l-100 mt-[60px]  xl:max-w-[450px] xl:text-[37px] text-blue-text">
            Водная экскурсия <br className="" />в морской национальный парк «Святая Анна» теперь
            <div className="bg-blue w-fit xl:w-[325px] p-1.5 xl:mt-1 px-3 whitespace-nowrap rounded-3xl text-white">дешевле
              на 5
              евро!</div>
          </h3>
          <div className=" font-normal mt-[17px] max-w-[350px]  text-[14px] xl:text-[16px]">
            Отправьтесь на приключенческое плавание, окунитесь в потрясающий подводный мир, насладитесь сноркелингом и
            расслабьтесь на уединенных пляжах.
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row md:max-w-[570px] xl:max-w-full w-full px-7 xl:px-0 mb-[32px] xl:mb-0 items-start gap-x-2 justify-start mt-5">
          <button
            className="px-10 py-4 bg-blue w-full  text-white font-bold xl:w-1/2 text-[16px] cursor-pointer border rounded-3xl">Забронировать</button>
          <button
            className="px-10 mr-4 py-4 text-blue-text w-full mt-[10px] xl:mt-0 bg-light-blue font-bold xl:w-1/2 text-[16px] cursor-pointer  rounded-3xl">Подробнее</button>
        </div>
      </div>
      <div className="xl:w-1/2 w-full">
        <Image width={570} height={550} className="rounded-3xl object-cover w-full h-auto md:h-[417px] xl:h-full" src="/img/page_2_card.png" />
      </div>
    </div>
    </>
    
    )
}