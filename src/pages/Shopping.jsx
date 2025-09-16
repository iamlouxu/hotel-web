import roomsvg from "/roomtype/1.png";
import leftarrow from "/icon/arrow-prev.svg";
import { obj } from "../store/shopping-data";

function Shopping() {
  return (
    <div className="flex">
      <div className="relative inline-block">
        <img src={roomsvg} alt="roomsvg" />
        <div className="absolute inset-0 flex items-start justify-start pt-[87px] pl-[146px]">
          <div className="pr-[9px] pt-[2px]">
            <img src={leftarrow} alt="leftarrow" />
          </div>
          <p className="text-sm" style={{ color: "#38470B" }}>
            查看其他房型
          </p>
        </div>
      </div>

      <div>
        <ShoppingRight />
      </div>
    </div>
  );
}

function ShoppingRight() {
  return (
    <>
      <h2 className="text-4xl">{obj.name}</h2>
      <p>{obj.subTitle}</p>
      <p>{obj.roomInfo}</p>
      <p>{obj.description}</p>
      {obj.icon.map((item) => {
        return (
          <div>
            <img src={item.imgUrl} alt={item.name} />
            <p>{item.name}</p>
            <img src={item.smallImgUrl} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default Shopping;
