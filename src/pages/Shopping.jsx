import roomsvg from "/roomtype/1.png";
import leftarrow from "/icon/arrow-prev.svg";
import { obj } from "../store/shopping-data";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
function Shopping() {
  return (
    <div className="flex">
      <div className="relative cursor-pointer">
        <img src={roomsvg} alt="roomsvg" />
        <div className="absolute inset-0 flex items-start justify-start pt-[87px] pl-[146px]">
          <div className="pr-[9px] pt-[2px]">
            <img src={leftarrow} alt="leftarrow" />
          </div>
          <p className="text-sm" style={{ color: "#38470B" }}>
            查看其他房型
          </p>
        </div>
        <div className="absolute top-1/2 left-62 -translate-x-1/2 mt-3">
          <p className="text-4xl" style={{ color: "#38470B" }}>
            $1,380
          </p>
        </div>
        <div className="absolute top-[52%] left-[55%]">
          <p className="text-xl" style={{ color: "#38470B" }}>
            / 1晚
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-15 bg-[#38470B] w-63 h-11 flex items-center justify-center">
          <p className="text-xl text-white">Booking now</p>
        </div>
      </div>

      <div>
        <ShoppingRight />
        <ShoppingIcon />
        <Calendar />
      </div>
    </div>
  );
}

// 頁面右半邊內文
function ShoppingRight() {
  return (
    <>
      <div className="flex gap-[107px] mt-[107px] ml-[30px]">
        <h2 className="text-[40px]" style={{ color: "#38470B" }}>
          {obj.name}
        </h2>
        <div className="pt-5">
          <p className="text-[14px]" style={{ color: "#38470B" }}>
            {obj.subTitle}
          </p>
        </div>
      </div>
      <div className="mt-[70px] ml-[30px]">
        {obj.roomInfo.map((item, index) => {
          return (
            <p key={index} className="text-[14px]" style={{ color: "#38470B" }}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="mt-[40px] ml-[30px]">
        <ul style={{ listStyle: "inside" }}>
          {obj.description.map((item, index) => {
            return (
              <li
                key={index}
                className="text-[14px]"
                style={{ color: "#38470B" }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// 頁面icon管理

function ShoppingIcon() {
  return (
    <div className="grid grid-cols-7 gap-[40px] ml-[30px] mt-[56px]">
      {obj.icon.map((item, index) => {
        return (
          <div className="relative" key={index}>
            <div className="justify-items-center">
              <img src={item.imgUrl} alt={item.name} />
              <p className="text-[10px]">{item.name}</p>
            </div>
            <div className="absolute top-0 right-0">
              <img src={item.smallImgUrl} alt="打勾打叉icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// 日曆套件
function Calendar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <DateRangePicker
      onChange={(item) => setState([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
      preventSnapRefocus={true}
      calendarFocus="backwards"
      showDateDisplay={false}
      staticRanges={[]}
      inputRanges={[]}
    />
  );
}

export default Shopping;
