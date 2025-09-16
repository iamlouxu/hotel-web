import roomsvg from "/roomtype/1.png";

function Shopping() {
  return (
    <>
      <div className="relative w-full h-auto">
        <img src={roomsvg} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p>查看其他房型</p>
      </div>
    </>
  );
}

export default Shopping;
