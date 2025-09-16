import { useForm } from "react-hook-form";
import { roomData, defaultRoomInfo } from "../store/room-data";

const Title = ({ fontSize, title, size = false }) => {
  return (
    <div className="flex flex-row items-center gap-2 py-5">
      <h2 className={`${fontSize} font-bold whitespace-nowrap`}>{title}</h2>
      <div
        className={`w-full border-b-1 border-[#949C7C] border-opacity-50 ${
          size && "pt-2"
        }`}
      ></div>
    </div>
  );
};

const ReserveFlowCard = () => {
  return (
    <div className="flex flex-row">
      {defaultRoomInfo.reserveFlow.map((flow) => {
        const isLastCard = flow.id === defaultRoomInfo.reserveFlow.length;

        return (
          <div className="flex flex-row w-full gap-5">
            <div className="flex flex-col justify-center max-w-[300px] w-full border border-[#38470B] rounded-b-xl h-full">
              <div className="w-full py-3 bg-[#38470B] flex justify-center">
                <img
                  className="max-w-[60px] aspect-square object-contain w-full"
                  src={flow.img}
                  alt="Flow Icon"
                />
              </div>
              <div className="h-full py-5">
                <p className="text-center px-5">{flow.content}</p>
              </div>
            </div>
            {!isLastCard && (
              <div className="py-5 flex pr-5">
                <img
                  className="max-w-[10px] aspect-square object-contain"
                  src={defaultRoomInfo.arrowImg}
                  alt="Arrow Icon"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="py-2">
          姓名
        </label>
        <input
          id="name"
          className="bg-white"
          defaultValue="test"
          {...register("example")}
        />
        <label htmlFor="phoneNumber" className="py-2">
          手機號碼
        </label>
        <input
          id="phoneNumber"
          className="bg-white"
          {...register("exampleRequired", { required: true })}
        />
        <label htmlFor="inRoom" className="py-2">
          入住日期
        </label>
        <input
          id="inRoom"
          className="bg-white"
          {...register("exampleRequired", { required: true })}
        />
        <label htmlFor="outRoom" className="py-2">
          退房日期
        </label>
        <input
          id="outRoom"
          className="bg-white"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="border-2 border-white py-5 text-xl" type="submit" />
      </form>
    </>
  );
};

const Checkout = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-white mx-[128px] my-[84px]">
        <div className="flex flex-row w-full h-full">
          <div className="bg-[#38470B] w-2/5 text-white px-20 pt-15 pb-10">
            <Form />
          </div>
          <div className="w-3/5 text-[#38470B] px-10">
            <div className="flex flex-col">
              <Title fontSize="text-4xl" title={roomData[0].name} size={true} />
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
                      <p className="text-center text-sm block">{image.name}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <Title fontSize="text-2xl" title="訂房資訊" />
                {defaultRoomInfo.roomInfo.map((info) => {
                  return <p className="py-1">{info}</p>;
                })}
              </div>
              <div>
                <Title fontSize="text-2xl" title="預約流程" />
                <ReserveFlowCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
