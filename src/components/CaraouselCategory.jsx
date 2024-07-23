import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import image1 from "../asserts/amazon_clone/images/category_0.jpg";
import image2 from "../asserts/amazon_clone/images/category_1.jpg";
import image3 from "../asserts/amazon_clone/images/category_2.jpg";
import image4 from "../asserts/amazon_clone/images/category_3.jpg";
import image5 from "../asserts/amazon_clone/images/category_4.jpg";
import image6 from "../asserts/amazon_clone/images/category_5.jpg";



export const CaraouselCategory = () => {
    return (
        <div className="bg-white">
            <div className="text-2xl font-semibold p-4">
                Shop By Category
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
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
                <SwiperSlide>
                    <img src={image6} />
                </SwiperSlide>

            </Swiper>


        </div>
    )
}
export default CaraouselCategory;