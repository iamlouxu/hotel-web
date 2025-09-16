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
            {roomData.map((item) => {
              return (
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <div className="flex flex-row">
                    {item.image.map((image) => {
                      return <img src={image} alt="" />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
