import { MagnifyingGlass } from "@phosphor-icons/react";
import moon from "../../assets/icon/moon.svg";

export const Header = () => {
  return (
    <div className="w-full h-14 flex justify-around items-center  bg-slate-600 ">
      <div className="text-3xl font-bold">Ecommerce API</div>
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
        <img src={moon} alt="" className="mr-3" />
        <span className="mr-3">Cart</span>
        <span>Sign In</span>
      </div>
    </div>
  );
};
