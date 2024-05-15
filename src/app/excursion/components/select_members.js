import useStore from "@/app/store/useStore";
import React, { useState } from "react";

const SelectMembers = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setOldMembers, setChildrenMembers, members } = useStore();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-light-blue text-blue-text flex items-center justify-between px-[25px] rounded-3xl w-[240px] xl:ml-[30px] h-[60px]"
      >
        <div className="text-[14px]">
          {members.old == 0 && members.children == 0
            ? "Количество участников"
            : `${members.old != 0 ? `Взрослые: ${members.old}` : ``} ${
                members.old != 0 ? "\n" : ""
              }
              ${members.children != 0 ? `Дети: ${members.children}` : ""}`}
        </div>
        <img src="/img/arrow_down.svg" alt="Arrow Down" />
      </button>

      {isDropdownOpen && (
        <div className="w-[250px] right-0 px-5 top-[70px] flex-col bg-white border z-[100] absolute h-[120px] rounded-3xl">
          <div className="flex items-center w-full justify-between  pt-[20px]">
            <div className="max-w-[70px]">Взрослые</div>
            <div className="flex items-center justify-start gap-x-[15px]">
              <img
                className="cursor-pointer"
                onClick={() => setOldMembers(members.old - 1)}
                src="/img/minus_2.svg"
              />
              <div className="w-[10px]">{members.old}</div>
              <img
                className="cursor-pointer"
                onClick={() => setOldMembers(members.old + 1)}
                src="/img/plus_2.svg"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-between  pt-2 pb-[26px]">
            <div className="max-w-[70px]">Дети до 12 лет</div>
            <div className="flex items-center justify-start gap-x-[15px]">
              <img
                className="cursor-pointer"
                onClick={() => setChildrenMembers(members.children - 1)}
                src="/img/minus_2.svg"
              />
              <div className="w-[10px]">{members.children}</div>
              <img
                className="cursor-pointer"
                onClick={() => setChildrenMembers(members.children + 1)}
                src="/img/plus_2.svg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectMembers;
