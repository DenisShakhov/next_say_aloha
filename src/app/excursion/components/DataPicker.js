import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import {
  isWithinInterval,
  startOfDay,
  endOfDay,
} from "date-fns";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "@/app/store/useStore";
import "./custom-datepicker.css";
registerLocale("ru", ru);

const DatePickerComponent = () => {
  const { setStartData, setEndData } = useStore();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    setStartData(startDate);
    setEndData(endDate);
  }, [startDate, endDate]);

  const blockedDates = [new Date(2024, 5, 30)]; 

  const isBlockedDate = (date) => {
    return blockedDates.some((blockedDate) => {
      const isSameDay = date.getDate() === blockedDate.getDate();
      const isSameMonth = date.getMonth() === blockedDate.getMonth();
      const isSameYear = date.getFullYear() === blockedDate.getFullYear();
      console.log(`Comparing ${date} with ${blockedDate}`);
      console.log(`Day: ${isSameDay}, Month: ${isSameMonth}, Year: ${isSameYear}`);
      return isSameDay && isSameMonth && isSameYear;
    });
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;

    // Check if any date in the range is blocked
    if (start && end) {
      const isRangeBlocked = blockedDates.some((blockedDate) =>
        isWithinInterval(blockedDate, {
          start: startOfDay(start),
          end: endOfDay(end),
        })
      );
      if (isRangeBlocked) {
        alert("Selected range includes blocked dates.");
        return;
      }
    }

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="relative">
      <div
        onClick={togglePicker}
        className="bg-light-blue text-blue-text flex items-center justify-between px-[25px] rounded-3xl w-[240px] xl:ml-[30px] h-[60px]"
      >
        <div className="text-[14px]">
          {startDate && endDate
            ? `${startDate.toLocaleDateString(
                "ru-RU"
              )} - ${endDate.toLocaleDateString("ru-RU")}`
            : "Выберите дату"}
        </div>
        <img src="/img/arrow_down.svg" alt="Arrow Down" />
      </div>
      {showPicker && (
        <div className="absolute top-[70px] left-0 bg-white rounded-md shadow-md p-4 z-[1000]">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            locale="ru"
            minDate={new Date()}
            dayClassName={(date) =>
              isBlockedDate(date)
                ? "react-datepicker__day--disabled"
                : undefined
            }
          />
          <div className="flex justify-between mt-2">
            <button
              onClick={() => setShowPicker(false)}
              className="font-bold py-[12px] px-[23px] text-black text-[12px] rounded-md"
            >
              Отмена
            </button>
            <button
              onClick={() => setShowPicker(false)}
              className="bg-blue font-bold py-[12px] px-[23px] text-white text-[12px] rounded-md"
            >
              Выбрать
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerComponent;
