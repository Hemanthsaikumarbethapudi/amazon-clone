import { Carousel, HomepageCard } from "./"
import image from "../asserts/amazon_clone/images/home_grid_1.jpg"
import image2 from "../asserts/amazon_clone/images/home_grid_2.jpg"
import image3 from "../asserts/amazon_clone/images/home_grid_3.jpg"
import image4 from "../asserts/amazon_clone/images/home_grid_4.jpg"
import image5 from "../asserts/amazon_clone/images/home_grid_5.jpg"
import image6 from "../asserts/amazon_clone/images/home_grid_6.jpg"
import image7 from "../asserts/amazon_clone/images/home_grid_7.jpg"
import image8 from "../asserts/amazon_clone/images/home_grid_8.jpg"
import image9 from "../asserts/amazon_clone/images/banner_image_2.jpg"

export const Homepage = () => {
    return (
        <div className="bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto bg-purple-600">Testing
                <Carousel />
                <div className="grid grid-cols-3 xl:grid-cols-4">
                    <HomepageCard title={"Hi there is suprise for you"}
                        img={image}
                        link={"See the terms and conditions"} />
                    <HomepageCard title={"Watch the rings of Power"}
                        img={image2}
                        link={"Learn more"} />
                    <HomepageCard title={"Unlimited streaming"}
                        img={image3}
                        link={"Learn more"} />
                    <HomepageCard title={"More titles and Explore"}
                        img={image4}
                        link={"Learn more"} />
                    <HomepageCard title={"Shop pet Suppiles"}
                        img={image5}
                        link={"Learn more"} />
                    <HomepageCard title={"Spring sales"}
                        img={image6}
                        link={"Learn more"} />
                    <HomepageCard title={"Echo buds"}
                        img={image7}
                        link={"Learn more"} />
                    <HomepageCard title={"Family plans : 3 Months"}
                        img={image8}
                        link={"Learn more"} />
                </div>
                <div>
                    <img className="xl:hidden" src={image9} />
                </div>
            </div>
        </div>
    )
}

export default Homepage;
