import Image from "next/image"
export default function HeroPage(){
    return(
        <div className="mt-7 rounded-3xl">
            <div
                className="bg-cover bg_page_1_card_1 flex w-full md:w-[750px] md:px-[45px] flex-col xl:w-full  xl:flex-row rounded-3xl bg-center h-[670px]">
                <div className="h-1/2"></div>
                <div
                className=" flex flex-col ml-[20px] md:ml-0 xl:ml-[20px] mr-[5px] xl:p-0 text-left justify-end mb-10 md:mb-[30px] xl:mb-20">
                <div
                    className="py-2 mt-4  xl:w-fit px-[20px]  xl:font-medium text-left text-[14px] md:max-w-[573px] rounded-full text-blue-text bg-white">
                    Создадим идеальный тур, учитывая ваши пожелания, бюджет и время отдыха</div>
                <h1 className="text-white uppercase  mt-2 max-w-[660px] md:text-[50px]  font-bold  text-[32px] ">
                    Незабываемые
                    групповые <br className="hidden xl:flex" />и индивидуальные экскурсии на Сейшелах</h1>

                </div>
                <div className="xl:w-[300px] hidden md:block xl:ml-[40px] xl:mt-auto">
                <div
                    className="flex flex-col md:flex-row xl:flex-col md:gap-x-[10px] md:max-w-[610px] items-center font-extrabold justify-center xl:mb-20 md:mb-[30px] mb-10 mr-10 md:mr-0">
                    <button className="text-blue-text  bg-white w-full mt-3 py-4 rounded-full text-[18px]">Смотреть
                    экскурсии</button>
                    <button className="text-white  border-[1px] border-white w-full mt-3 py-4 rounded-full text-[18px]">Эмоции наших
                    клиентов</button>
                </div>
                </div>
            </div>
            <div className="mt-4">
                <button className="text-white md:hidden md:mx-ayti xl:hidden bg-blue w-full mt-3 py-4 rounded-full ">Смотреть
                экскурсии</button>
                <button className="text-blue md:hidden xl:hidden border-2 border-blue w-full mt-3 py-4 rounded-full ">Эмоции наших
                клиентов</button>
                <div
                className=" w-full mt-2.5 md:flex-row md:flex-wrap md:gap-x-[32px] tracking-normal text-left gap-y-[15px] shadow-none font-medium flex items-start xl:items-center justify-start xl:justify-between  text-[16px] flex-col xl:flex-row ">
                <span className="flex  items-center max-w-[333px]  gap-x-2">
                    <Image src="/img/palm.svg"  width={40} height={40}/> Индивидуальная программа отдыха
                </span>
                <span className="flex items-center max-w-[400px] gap-x-2">
                    <Image src="/img/ship.svg" width={40} height={40}/> Комфортный отдых на лучших яхтах Сейшел
                </span>
                <span className="flex items-center max-w-[300px] gap-x-2">
                    <Image src="/img/translate.svg" width={40} height={40}/>
                    Русскоязычные и местные гиды со знанием 5 языков
                </span>
                </div>
            </div>
            </div>
    )
}