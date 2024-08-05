import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
    return (
        <div className="w-[100%]">
            <div className="flex items-center h-10 rounded bg-amber-500">
                <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
                    <option>All</option>
                    <option>Deals</option>
                    <option>Mobiles</option>
                    <option>Electroics</option>
                    <option>Fashion</option>
                    <option>Apps&Games</option>
                    <option>Beauty</option>
                </select>
                <input className="flex grow h-[100%] items-center rounded-l text-black" type="text" />
                <button className="w-[45px]">
                    < MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-950" />
                </button>
            </div>
        </div>
    )
}

export default Search;