import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { bgList } from "../store/home-data";

export function TheSwiper() {
    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: ".pagination-position" }}
                className="absolute inset-0 h-full w-full"
            >
                {bgList.map(({ bgId, bgImage }) => (
                    <SwiperSlide key={bgId}>
                        <img src={bgImage} alt={`背景 ${bgId}`} className="h-screen w-full" />
                    </SwiperSlide>
                ))
                }

            </Swiper>
        </>
    );
}