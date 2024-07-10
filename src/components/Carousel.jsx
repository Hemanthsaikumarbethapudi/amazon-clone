import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
    return (
        <div className="h-[600px] bg-white ">
            <Swiper

                loop={true}
                spacebetween={0}
                className="h-[60%]"
            >

                <SwiperSlide>
                    <img src={"../images/carousel_1.jpg"} />
                </SwiperSlide>
            </Swiper>


        </div >
    )
}
export default Carousel;