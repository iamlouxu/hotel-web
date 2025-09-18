import { Link } from "react-router-dom";
import { roomList, hotelInfo } from "../store/home-data";
import { TheSwiper } from "../components/Swiper"

const Home = () => {
    const { hotelTitle, address, phone, email } = hotelInfo[0];

    return (
        <>
            <section className="overflow-x-hidden relative">
                <TheSwiper />
                {/* 大盒子 */}
                <div className="flex flex-col w-full h-full absolute top-0 left-0 z-10 justify-center px-[64px]" >
                    {/* 上下盒子 */}
                    <div className="flex justify-between w-full mb-[48px]">
                        <div className="flex flex-col justify-between ">
                            <img src="/icon/board.svg" alt="icon" className="" />
                            <div className="flex flex-col text-[#ffffff]">
                                <p className="text-[12px] mb-[16px]">{hotelTitle}</p>
                                <div className="flex flex-col gap-[6px] text-[12px] font-light">
                                    <span>{ address }</span>
                                    <span>{ phone }</span>
                                    <span>{ email }</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 ">
                            {roomList.map(({ roomId, image, roomTitle }) => {
                                return (
                                    <Link to="/Shopping" key={ roomId } className="relative group">
                                        <img src={ image } alt={ roomTitle } className="aspect-square" />
                                        <div className="absolute inset-0 bg-[#38470B]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                            <span className="text-[19px] text-[#ffffff]">
                                                { roomTitle }
                                            </span>
                                        </div>
                                    </Link >
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex justify-between w-full pl-[30px]">
                        <div className="pagination-position"></div>
                        <p className="text-[12px] text-[#FFFFFF] font-light">UI DESIGN by Pei-Chuan Li</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;