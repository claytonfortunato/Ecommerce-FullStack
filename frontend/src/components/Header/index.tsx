import { MagnifyingGlass } from "@phosphor-icons/react";
import moon from "../../assets/icon/moon.svg";

export const Header = () => {
  return (
    <div className=" w-full h-14 flex justify-around items-center  dark:bg-slate-600 ">
      <div className="text-3xl font-bold text-white">Ecommerce API</div>
      <div className="h-8 flex items-center bg-orange-400 rounded-sm">
        <input
          type="text"
          id="search"
          placeholder="Pesquisar produto"
          className="w-80 border-black border p-1 focus:outline-none"
        />
        <MagnifyingGlass size={24} className="m-2 cursor-pointer" />
      </div>
      <div className="flex">
        <img
          src={moon}
          alt=""
          className=" mr-3 hover:bg-gray-400 duration-200 p-1 cursor-pointer rounded-md"
        />
        <span className="mr-3 text-black cursor-pointer hover:bg-gray-400 duration-200 p-1 rounded-md">
          Cart
        </span>
        <span className="text-black cursor-pointer hover:bg-gray-400 duration-200 p-1 rounded-md">
          Sign In
        </span>
      </div>
    </div>
  );
};
