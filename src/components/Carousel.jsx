import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image from "public/amazon_clone/images";
const Carousel = () => {
    return (
        <div className="h-[600px] bg-white ">
            <Swiper

                loop={true}
                spacebetween={0}
                className="h-[60%]"
            >

                <SwiperSlide>
                    <img src="{images}" />
                </SwiperSlide>
            </Swiper>


        </div >
    )
}
export default Carousel;