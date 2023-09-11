import moon from "../../assets/icon/moon.svg";
import Sun from '../../assets/icon/sun-dim.svg'
import { useTheme } from "../../hooks/useTheme";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white w-full h-14 mb-12 flex justify-around items-center  dark:bg-slate-600">
      <div className="text-black text-3xl font-bold dark:text-white">Ecommerce API</div>
      <div className="text-black flex gap-4 dark:text-white">
          <span>Man</span>
          <span>Women</span>
          <span>Shirt</span>
      </div>
      <div className="flex gap-4">
       {theme === 'light' ? ( <img
          src={moon}
          alt=""
          className=" text-black hover:bg-gray-400 duration-200 p-1 cursor-pointer rounded-md"
          onClick={() => setTheme("dark")}
        />):(
          <img src={Sun} alt="" className="text-black hover:bg-gray-400 duration-200 p-1 cursor-pointer rounded-md dark:bg-white" onClick={() => setTheme("light")}  />
        )}
        <span className=" text-black cursor-pointer hover:bg-gray-400 duration-200 p-1 rounded-md dark:text-white">
          Cart
        </span>
        <span className="text-black cursor-pointer hover:bg-gray-400 duration-200 p-1 rounded-md dark:text-white">
          Sign In
        </span>
      </div>
    </div>
  );
};
