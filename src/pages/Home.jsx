import { Link } from "react-router-dom";

const imgList = [
    [   
        "/roomtype/home-1.png",
        "/roomtype/home-2.png",
        "/roomtype/home-3.png",
        "/roomtype/home-4.png",
        "/roomtype/home-5.png",
        "/roomtype/home-6.png"
    ],

    [
        "Single Room",
        "Double Room",
        "Twin Room",
        "Deluxe Single Room",
        "Deluxe Double Room",
        "Deluxe Twin Room"
    ]
]


const Home = () => {
    return (
        <>
            {/* 背景圖 */}
            <section className="bg-[url('/background/home-bg-pic1.png')] bg-cover bg-center h-screen overflow-x-hidden px-[64px] flex items-center">
                {/* 大盒子 */}
                <div className="flex flex-col w-full">
                    {/* 上下盒子 */}
                    <div className="flex justify-between w-full mb-[48px]">
                        <div className="flex flex-col justify-between ">
                            <img src="/icon/board.svg" alt="icon" className="" />
                            <div className="flex flex-col text-[#ffffff]">
                                <p className="text-[12px] mb-[16px]">好室旅店。HOUSE HOTEL</p>
                                <div className="flex flex-col gap-[6px] text-[12px] font-light">
                                    <span>花蓮縣花蓮市國聯一路1號</span>
                                    <span>03-8321155</span>
                                    <span>HOUSE@HOTEL.COM</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 ">
                            {imgList[0].map((item, index) => {
                                return (
                                    <Link to="/Shopping" key={index} className="relative group">
                                        <img src={item} alt={`圖${index + 1}`} className="aspect-square" />
                                        <div className="absolute inset-0 bg-[#38470B]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                            <span className="text-[19px] text-[#ffffff]">
                                                {imgList[1][index]}
                                            </span>
                                        </div>
                                    </Link >
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-[#FFFFFF]">1</p>
                        <p className="text-[12px] text-[#FFFFFF] font-light">UI DESIGN by Pei-Chuan Li</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;