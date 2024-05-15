export default function Info() {
  return (
    <>
      <div className="mt-[30px] gap-y-[10px] xl:gap-y-0 relative z-50 flex md:flex-wrap xl:flex-nowrap gap-x-[35px] items-center md:items-start md:justify-start xl:items-center xl:justify-between">
        <img
          className="absolute top-[20%] -z-10 md:hidden w-full"
          src="/img/dotted_line.svg"
        />
        <div className="flex flex-col md:flex-row w-[252px] items-start md:items-center justify-start xl:justify-between">
          <div className="bg-blue px-[12px] py-[4px] font-bold   xl:ml-auto  md:mr-0 text-[16px] md:py-[10px] rounded-full md:px-[17px] text-white">
            1
          </div>
          <div className="flex items-end mt-[10px] md:mt-[0px] md:items-center justify-end md:justify-center">
            <div className="w-[64px] text-blue-text md:ml-[20px] md:w-full text-[12px] md:text-[16px] md:font-medium mt-auto font-bold">
              Выберите экскурсию{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[252px] items-start md:items-center justify-start xl:justify-between">
          <div className="bg-blue px-[12px] py-[4px] font-bold mx-auto   text-[16px] md:py-[10px] rounded-full md:px-[17px] text-white">
            2
          </div>
          <div className="flex items-end relative mt-[10px] md:mt-[0px] md:items-center justify-end md:justify-center">
            <span className="w-[64px] text-blue-text md:ml-[20px] md:w-full text-[12px] md:text-[16px] md:font-medium mt-auto font-bold">
              Забронируйте место{" "}
            </span>
            <img
              src="/img/inform.svg "
              id="additional_info_1_button"
              className="h-[8px] mb-1 md:mb-0 w-[8px]  md:h-[16px] md:w-[16px] md:ml-[10px]"
            />
            <div
              id="additional_info_content_1"
              className="absolute right-0 top-10 hidden bg-white rounded-2xl text-blue-text w-[170px] p-5 text-[12px] h-[100px]"
            >
              Для бронирования потребуется только предоплата — от 10 €
              от стоимости тура
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[252px] items-start md:items-center justify-start xl:justify-between">
          <div className="bg-blue px-[12px] py-[4px] font-bold ml-auto md:ml-0 xl:ml-auto mr-1 md:mr-0 text-[16px] md:py-[10px] rounded-full md:px-[17px] text-white">
            3
          </div>
          <div className="flex items-end relative mt-[10px] md:mt-[0px] md:items-center justify-end md:justify-center">
            <div className="w-[64px] text-blue-text md:ml-[20px] md:w-full text-[12px] md:text-[16px] md:font-medium mt-auto font-bold">
              Оплатите безопасно
            </div>
            <img
              src="/img/inform.svg "
              id="additional_info_2_button"
              className="h-[8px] mb-1 md:mb-0 w-[8px]  md:h-[16px] md:w-[16px] md:ml-[10px]"
            />
            <div
              id="additional_info_content_2"
              className="absolute right-0  hidden items-start justify-start top-10 bg-white rounded-2xl text-blue-text w-[170px] p-5 text-[12px] h-[100px]"
            >
              Данные карт надежно защищены по стандартам VISA, Mastercard и МИР
            </div>
          </div>
        </div>
        <div className="md:flex hidden w-[300px] items-center justify-start md:justify-center xl:justify-between">
          <div className="bg-blue px-[12px] py-[4px] font-bold ml-auto md:ml-0 xl:ml-auto mr-1 md:mr-0 text-[16px] md:py-[10px] rounded-full md:px-[17px] text-white">
            4
          </div>
          <div
            className="w-[64px] text-blue-text md:ml-[20px] md:mt-0 md:w-full text-[12px] md:text-[16px] md:font-medium
                     font-bold"
          >
            Ожидайте звонка менеджера
          </div>
        </div>
      </div>
    </>
  );
}
