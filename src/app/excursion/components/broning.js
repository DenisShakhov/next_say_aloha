import React from "react";
import { useRouter } from "next/navigation";
import useStore from "@/app/store/useStore";
import DatePickerComponent from "./DataPicker";
import SelectMembers from "./select_members";

function Bron({ title, price, priceForZug, isGroupExcursion }) {
  const route = useRouter();

  const { startDate, members, endDate, setExcursionTitle, setExcursionPrice } =
    useStore();
  function submit() {
    if (!startDate && !endDate) {
      alert("Вы не выбрали дату");
      return;
    }
    if (members.old == 0 && members.children == 0) {
      alert("Вы не выбрали количество участников");
      return;
    }
    setExcursionTitle(title);
    setExcursionPrice(priceForZug);
    if (!isGroupExcursion) {
      route.push("/selectboat");
    } else {
      route.push("/oplata");
    }
  }
  console.log(isGroupExcursion);
  return (
    <>
      <div className="mt-[30px] hidden flex-wrap md:gap-x-[0px] xl:gap-x-0 rounded-xl px-[10px] bg-white md:h-[190px] xl:h-[100px] md:flex items-center justify-between">
        <DatePickerComponent />

        <SelectMembers />

        <div className="xl:hidden max-w-[140px] flex md:text-[12px] md:max-w-[211px] text-blue-text flex-col items-start justify-start">
          <div className="text-[12px]">Предоплата - 10 €</div>
          <h4 className="text-[12px]">Полная отмена в течение 24 часов</h4>
        </div>
        <div className="flex flex-col items-start md:mr-[115px] xl:mr-0 justify-start">
          <div className="text-[12px]">Итоговая стоимость:</div>
          <h4 className="l-140 font-semibold text-[24px]">{price}</h4>
        </div>
        <div
          style={{
            background:
              "linear-gradient(150deg,#15A1DD 0%, #26B9C2 30%, #26C2B9 51%, #25C192 66%, #34E06E 83%, #00CC21 100%)",
          }}
          className="flex items-center cursor-pointer justify-center text-white font-bold px-[25px] rounded-3xl w-[240px] h-[60px]"
        >
          <div className="text-[16px] flex items-center justify-center gap-x-[15px]">
            <div onClick={submit}>
              {isGroupExcursion ? "Забронировать" : "Выбрать лодку"}
            </div>
            <img src="/img/arrow_right_green.svg" alt="Arrow Right Green" />
          </div>
        </div>
        <div className="xl:flex max-w-[140px] hidden text-blue-text flex-col items-start justify-start">
          <div className="text-[12px]">Предоплата - 10 €</div>
          <h4 className="text-[12px]">Полная отмена в течение 24 часов</h4>
        </div>
      </div>
    </>
  );
}

export default Bron;
