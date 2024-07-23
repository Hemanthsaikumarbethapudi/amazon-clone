import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carouselproducts = () => {
    return (
        <div className="bg-white m-3 p-3">
            <div className="p-2 font-semibold text-2xl m-2">Best Sellers</div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {
                    Array.from({ length: 9 }, (_, i) =>
                        <SwiperSlide key={i}>
                            <img src={`../asserts/amazon_clone/images/product_${i}_small.jpg`} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default Carouselproducts;