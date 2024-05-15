export default function Buttons() {
  return (
    <>
      <div className="mt-20 hidden xl:flex">
        <div
          id="buttons_page_2"
          className="w-fit gap-x-[10px] flex  items-center justify-between"
        >
          <div
            id="data_i_stoimost"
            className="bg-blue l-100 flex items-center justify-center rounded-3xl text-center text-white w-[150px] text-[16px] font-bold h-[50px] p-2"
          >
            Даты и стоимость
          </div>
          <div
            id="programma"
            className="border flex items-center justify-center border-blue-text text-blue-text rounded-3xl text-center l-140 w-[150px] text-[16px]  h-[50px] "
          >
            Программа
          </div>
          <div
            id="route"
            className="border flex items-center justify-center border-blue-text text-blue-text rounded-3xl text-center l-140 w-[150px] text-[16px]  h-[50px] "
          >
            Маршрут
          </div>
          <div
            id="shto_vkl"
            className="border flex items-center justify-center border-blue-text text-blue-text rounded-3xl text-center l-140 w-[150px] text-[16px]  h-[50px] "
          >
            Важно знать
          </div>
        </div>
      </div>
    </>
  );
}
