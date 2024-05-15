import Image from "next/image";
export default function LastSection() {
  return (
    <>
      <div className="w-full mt-10 xl:mt-20  text-[#004F66] rounded-3xl bg-blue xl:bg-white">
        <div className="container mx-auto px-4 xl:px-0 flex flex-col items-center justify-start">
          <h1 className="pt-20 text-white uppercase xl:text-blue-text text-center md:max-w-[561px]  md:text-center md:text-[50px] max-w-[721px] xl:max-w-[721px] text-[30px] font-bold">
            Ваш захватывающий отдых - наша забота и приоритет
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-start md:place-items-stretch xl:place-items-start xl:grid-cols-3 gap-y-[20px]  md:gap-5 xl:p-3 xl:mt-10   mx-2 pb-10">
            <div className=" rounded-3xl  flex flex-col  px-10 bg-light-blue">
              <Image
                width={60}
                height={60}
                className="ml-auto my-10"
                src="/img/rest_palm.svg"
              />
              <div className=" text-xl  text-blue-text uppercase text-[16px] xl:text-[20px] font-extrabold">
                Индивидуальный подход
              </div>
              <div className="mt-10 mb-10 text-blue-text text-[14px] xl:text-[16px]">
                Мы создаём незабываемый отдых, подстраиваясь под ваши
                предпочтения. От инстаграм-достопримечательностей до
                удивительных пляжей и потрясающих закатов
              </div>
            </div>
            <div className=" rounded-3xl xl:mt-[50px]  px-10 bg-light-blue">
              <Image
                width={60}
                height={60}
                className="ml-auto my-10 w-[60px] h-[60px]"
                src="/img/shield.svg"
              />
              <div className=" text-xl  text-blue-text uppercase text-[16px] xl:text-[20px] font-extrabold">
                Безопасность <br className="hidden xl:flex" />в приоритете
              </div>
              <div className="mt-10 mb-10 text-blue-text text-[14px] xl:text-[16px]">
                Мы обеспечиваем вашу безопасность. Наш опытный экипаж следит
                за погодными условиями, избегая штормов, и всегда готов оказать
                первую помощь
              </div>
            </div>
            <div className=" rounded-3xl px-10 bg-light-blue">
              <Image
                width={60}
                height={60}
                className="ml-auto my-10 w-[60px] h-[60px]"
                src="/img/smth.svg"
              />
              <div className=" text-xl  text-blue-text uppercase text-[16px] max-w-[232px] xl:text-[20px] font-extrabold">
                никаких скрытых платежей
              </div>
              <div className="mt-10 mb-10 text-blue-text text-[14px] xl:text-[16px]">
                Мы заранее информируем вас о полной стоимости тура, обсуждаем
                все возможные дополнительные расходы и никаких неприятных
                сюрпризов по прибытии — только полная ясность и открытость
              </div>
            </div>
            <div className=" rounded-3xl px-10 bg-light-blue">
              <Image
                width={60}
                height={60}
                className="ml-auto my-10 w-[60px] h-[60px]"
                src="/img/translator.svg"
              />
              <div className=" text-xl  text-blue-text uppercase max-w-[176px] text-[16px] xl:text-[20px] font-extrabold">
                Многоязычные гиды
              </div>
              <div className="mt-10 mb-10 text-blue-text text-[14px] xl:text-[16px]">
                Вас ждут профессиональные гиды, говорящие на нескольких языках,
                включая русский, английский, французский, итальянский и немецкий
              </div>
            </div>
            <div className=" rounded-3xl xl:mt-[50px] xl:mb-[25px] px-10 bg-light-blue">
              <Image
                width={60}
                height={60}
                className="ml-auto my-10 w-[60px] h-[60px]"
                src="/img/ship_2.svg"
              />
              <div className=" text-xl  text-blue-text uppercase max-w-[150px] text-[16px] xl:text-[20px] font-extrabold">
                Катамараны на высоте
              </div>
              <div className="mt-10 mb-10 text-blue-text text-[14px] xl:text-[16px]">
                Мы предлагаем только современные катамараны от 40 до 52 футов,
                не старше 10 лет, с уютными каютами и всем необходимым
                оборудованием для вашего удобства
              </div>
            </div>
            <div className=" rounded-3xl px-10 bg-light-blue">
              <Image
                width={60}
                height={60}
                className="ml-auto my-10 w-[60px] h-[60px]"
                src="/img/fish.svg"
              />
              <div className=" text-xl  text-blue-text uppercase text-[16px] xl:text-[20px] max-w-[138px] font-extrabold">
                трофейная рыбалка
              </div>
              <div className="mt-10 mb-10 text-blue-text text-[14px] xl:text-[16px]">
                Гарантированный улов и неповторимые впечатления. Наши опытные
                гиды подберут для вас идеальные места и моменты для ловли, где
                можно встретить самых больших и редких представителей морской
                фауны
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
