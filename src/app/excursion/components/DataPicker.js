import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import {
  isWithinInterval,
  isAfter,
  isBefore,
  startOfDay,
  endOfDay,
} from "date-fns";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "@/app/store/useStore";

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
  // Example blocked dates
  const blockedDates = [new Date(2024, 4, 17), new Date(2024, 4, 18)];

  const isBlockedDate = (date) => {
    return blockedDates.some(
      (blockedDate) => date.toDateString() === blockedDate.toDateString()
    );
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
              className="text-red-500"
            >
              Отмена
            </button>
            <button
              onClick={() => setShowPicker(false)}
              className="bg-blue-500 text-white rounded px-4 py-1"
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
