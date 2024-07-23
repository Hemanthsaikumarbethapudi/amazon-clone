import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import image1 from "../asserts/amazon_clone/images/carousel_1.jpg";
import image2 from "../asserts/amazon_clone/images/carousel_2.jpg";
import image4 from "../asserts/amazon_clone/images/carousel_4.jpg";
import image5 from "../asserts/amazon_clone/images/carousel_5.jpg";
import image3 from "../asserts/amazon_clone/images/carousel_3.jpg"
import "swiper/css/navigation"

const Carousel = () => {
    return (
        <div className="h-[500px] bg-white ">
            <Swiper

                loop={true}
                spacebetween={0}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4500
                }}
                navigation={true}
                className="h-[60%]"
            >

                <SwiperSlide>
                    <img src={image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} />
                </SwiperSlide>
            </Swiper>
            <div className="h-[50%] bg-gradient-to-b from-stone-900" />

        </div >
    )
}
export default Carousel;