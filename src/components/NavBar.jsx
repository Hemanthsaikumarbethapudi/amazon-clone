import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from "../components/Search";
import image1 from "../asserts/amazon_clone/images/amazon.png"

const NavBar = () => {
    return (
        <header className="min-w-[1000px]">
            <div className="flex bg-amazonclone-default h-[60px] text-white">
                <div className="flex items-center m-4">
                    <img className="h-[35px] w-[100px] m-2" src={image1} />
                    <div className="pl-3 pr-4">
                        <div className="text-xs xl:text-sm">Delivery to</div>
                        <div className="font-bold text-sm xl:text-base">Hyderabad</div>
                    </div>
                </div>
                <div className="flex grow relative items-center">
                    <Search />
                </div>
                <div className="flex items-center">
                    <div className="pl-3 pr-4">
                        <div className="text-xs xl:text-sm">Hello Customer</div>
                        <div className="font-bold text-sm xl:text-base">Accounts & Lists
                        </div>
                    </div>
                    <div className="pl-3 pr-4">
                        <div className="text-xs xl:text-sm">Return</div>
                        <div className="font-bold text-sm xl:text-base">&Orders</div>
                    </div>
                    <div className="flex pr-3 pl-3">
                        <ShoppingCartIcon className="h-[40px]" />
                        <div className="mt-7 xl:text-sm font-bold">
                            Cart
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default NavBar