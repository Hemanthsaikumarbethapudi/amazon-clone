import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import image0 from "../asserts/amazon_clone/images/product_0_small.jpg"
// import image1 from "../asserts/amazon_clone/images/product_1_small.jpg"
// import image2 from "../asserts/amazon_clone/images/product_2_small.jpg"
// import image3 from "../asserts/amazon_clone/images/product_3_small.jpg"
// import image4 from "../asserts/amazon_clone/images/product_4_small.jpg"
// import image5 from "../asserts/amazon_clone/images/product_5_small.jpg"
// import image6 from "../asserts/amazon_clone/images/product_6_small.jpg"
// import image7 from "../asserts/amazon_clone/images/product_7_small.jpg"
// import image8 from "../asserts/amazon_clone/images/product_8_small.jpg"
// import image9 from "../asserts/amazon_clone/images/product_9_small.jpg"



const Carouselproducts = () => {
    return (
        <div className="bg-white m-3 p-4">
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