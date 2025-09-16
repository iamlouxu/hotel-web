import { useForm } from "react-hook-form";
import { roomData, defaultRoomInfo } from "../store/room-data";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-white mx-[128px] my-[84px]">
        <div className="flex flex-row w-full h-full">
          <div className="bg-[#38470B] w-2/5 text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input defaultValue="test" {...register("example")} />

              {/* include validation with required or other standard HTML validation rules */}
              <input {...register("exampleRequired", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
            </form>
          </div>
          <div className="w-3/5 text-black">
            <div>
              <h2>{roomData[0].name}</h2>
              <p>{roomData[0].description}</p>
              <div className="flex flex-row">
                {roomData[0].image.map((image) => {
                  return <img src={image} alt="" />;
                })}
              </div>
              <div>
                <h2>訂房資訊</h2>
                {defaultRoomInfo.roomInfo.map((info) => {
                  return <p>{info}</p>;
                })}
              </div>
              <div>
                <h2>預約流程</h2>
                <div className="flex flex-row">
                  {defaultRoomInfo.reserveFlow.map((flow) => {
                    console.log(flow.id);
                    console.log(defaultRoomInfo.reserveFlow);
                    if (flow.id < defaultRoomInfo.reserveFlow.length) {
                      return (
                        <div className="flex flex-row">
                          <div className="flex flex-col">
                            <div className="w-full">
                              <img src={flow.img} alt="" />
                            </div>
                            <div>
                              <p>{flow.content}</p>
                            </div>
                          </div>
                          <div>
                            <img src={defaultRoomInfo.arrowImg} alt="" />
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div className="flex flex-col">
                        <div className="w-full ">
                          <img src={flow.img} alt="" />
                        </div>
                        <div>
                          <p>{flow.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
