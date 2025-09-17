import { useForm, Controller, useWatch } from "react-hook-form";
import { roomData, defaultRoomInfo } from "../store/room-data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

const Title = ({ fontSize, title, isBigger = false }) => {
  return (
    <div className="flex flex-row items-center gap-2 py-3">
      <h2 className={`${fontSize} font-bold whitespace-nowrap`}>{title}</h2>
      <div
        className={`w-full border-b-1 border-[#949C7C] border-opacity-50 ${
          isBigger && "pt-2"
        }`}
      ></div>
    </div>
  );
};

const ReserveFlowCard = () => {
  return (
    <div className="flex flex-row w-full items-start h-full">
      {defaultRoomInfo.reserveFlow.map((flow) => {
        const isLastCard = flow.id === defaultRoomInfo.reserveFlow.length;

        return (
          <>
            <div className="flex flex-col justify-start  max-w-[300px] w-full border border-[#38470B] rounded-b-xl min-h-[200px]">
              <div className="w-full py-3 bg-[#38470B] flex justify-center">
                <img
                  className="max-w-[40px] aspect-square object-contain w-full"
                  src={flow.img}
                  alt="Flow Icon"
                />
              </div>
              <div className="h-full py-5">
                <p className="text-center px-5">{flow.content}</p>
              </div>
            </div>
            {!isLastCard && (
              <div className="py-5 flex px-5">
                <img
                  className="w-8 h-8 object-contain"
                  src={defaultRoomInfo.arrowImg}
                  alt="Arrow Icon"
                />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

const Form = ({ setReserveSuccess }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      checkIn: null,
      checkOut: null,
    },
  });

  const checkIn = useWatch({ control, name: "checkIn" });
  const checkOut = useWatch({ control, name: "checkOut" });

  const [nights, setNights] = useState(0);
  useEffect(() => {
    if (checkIn && checkOut) {
      console.log(checkIn, checkOut);
      const days = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      setNights(days);
    }
  }, [checkIn, checkOut]);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setReserveSuccess(true);
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="py-2">
          姓名
        </label>
        <input
          id="name"
          className="bg-white text-[#38470B] p-2"
          placeholder="請輸入姓名"
          {...register("name", { required: "此欄位為必填" })}
        />
        {errors.name && <p className="text-gray-300">{errors.name.message}</p>}
        <label htmlFor="phoneNumber" className="py-2">
          手機號碼
        </label>
        <input
          id="phoneNumber"
          className="bg-white text-[#38470B] p-2"
          placeholder="請輸入手機號碼"
          {...register("phoneNumber", {
            required: "此欄位為必填",
            pattern: {
              value: /^09\d{8}$/,
              message: "請輸入正確的手機號碼",
            },
          })}
        />
        {errors.phoneNumber && (
          <p className="text-gray-300">{errors.phoneNumber.message}</p>
        )}
        <label htmlFor="checkIn" className="py-2">
          入住日期
        </label>
        <Controller
          id="checkIn"
          name="checkIn"
          control={control}
          render={({ field }) => (
            <DatePicker
              className="bg-white text-[#38470B] p-2 w-full"
              placeholderText="選擇入住日期"
              selected={field.value}
              rules={{
                required: "請選擇入住日期",
              }}
              onChange={(date) => {
                field.onChange(date);
                if (checkOut && date && checkOut <= date) {
                  setValue("checkOut", null);
                }
              }}
              dateFormat="yyyy-MM-dd"
            />
          )}
        />
        {errors.checkIn && (
          <p className="text-gray-300">{errors.checkIn.message}</p>
        )}
        <label htmlFor="checkOut" className="py-2">
          退房日期
        </label>
        <Controller
          id="checkOut"
          name="checkOut"
          control={control}
          rules={{
            required: "請選擇退房日期",
            validate: (value) =>
              (checkIn && value > checkIn) || "退房日期必須晚於入住日期",
          }}
          render={({ field }) => (
            <DatePicker
              className="bg-white text-[#38470B] p-2 w-full"
              placeholderText="選擇退房日期"
              selected={field.value}
              onChange={field.onChange}
              dateFormat="yyyy-MM-dd"
              minDate={checkIn}
              disabled={!checkIn}
            />
          )}
        />
        {errors.checkOut && (
          <p className="text-gray-300">{errors.checkOut.message}</p>
        )}
        <p className="py-2 opacity-50">
          {nights}天，{nights - 1}晚平日
        </p>
        <hr />
        <div className="flex flex-col items-end py-5">
          <p className="block">總計</p>
          <h2 className="block text-2xl">
            ${(roomData[0].price * (nights - 1)).toLocaleString()}
          </h2>
        </div>

        <button
          className="border-2 border-white py-5 text-xl cursor-pointer hover:bg-[#949C7C] hover:border-transparent"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "送出中..." : "確認送出"}
        </button>
        <p className="py-5 text-center text-sm">
          此預約系統僅預約功能，並不會對您進行收費
        </p>
      </form>
    </>
  );
};

const Checkout = () => {
  const [reserveSuccess, setReserveSuccess] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute p-5 inset-0 ${
          reserveSuccess ? "bg-[#38470B]" : "bg-white"
        } mx-25 my-18 flex flex-row`}
      >
        {reserveSuccess ? (
          <div className="flex flex-col items-center justify-center text-white w-full h-full bg-[#38470B]">
            <div className="relative w-[124px] h-[124px]">
              <img
                className="iconImg w-[124px] h-[124px] scale-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/icon/board.svg"
                alt="board"
              />
              <img
                className="iconImg absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/icon/okB.svg"
                alt="ok"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-10 pt-10">
              <h2 className="text-6xl">預約成功</h2>
              <p className="text-center">
                請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，
                <br />
                若未收到簡訊請來電確認，謝謝您
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row w-full h-full">
            <div className="bg-[#38470B] w-2/5 text-white px-20 pb-5 pt-10">
              <Form setReserveSuccess={setReserveSuccess} />
            </div>
            <div className="w-3/5 text-[#38470B] text-sm px-10">
              <div className="flex flex-col">
                <Title
                  fontSize="text-2xl"
                  title={roomData[0].name}
                  isBigger={true}
                />
                {roomData[0].description.map((item) => {
                  return (
                    <p className="py-1">
                      {item}
                      <br />
                    </p>
                  );
                })}
                <div className="flex flex-row">
                  {roomData[0].image.map((image) => {
                    return (
                      <div className="flex flex-col justify-center">
                        <img
                          className="iconImg block"
                          src={image.url}
                          alt={image.name}
                        />
                        <p className="text-center text-sm block">
                          {image.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Title fontSize="text-lg" title="訂房資訊" />
                  {defaultRoomInfo.roomInfo.map((info) => {
                    return <p className="py-1">{info}</p>;
                  })}
                </div>
                <div>
                  <Title fontSize="text-lg" title="預約流程" />
                  <ReserveFlowCard />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        )}
        <div>
          <button
            className={`group cursor-pointer w-5 h-5 flex items-center justify-center ${
              reserveSuccess ? "bg-[#38470B]" : "hover:bg-[#38470B]"
            } hover:rounded-xl transition-all duration-200`}
            onClick={() => {}}
          >
            <img
              src="/icon/cancelC.svg"
              alt="cancel"
              className={`transition-all duration-200 ${
                reserveSuccess
                  ? "brightness-0 invert"
                  : "group-hover:brightness-0 group-hover:invert"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
