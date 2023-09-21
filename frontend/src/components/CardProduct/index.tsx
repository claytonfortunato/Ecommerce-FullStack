import { Product } from "../../interface/product";

const CardProduct = ({ title, image, prevPrice, newPrice }: Product) => {
  return (
    <div className="flex flex-col items-center m-1">
      <img src={image} alt="" className="w-60" />
      <h1>{title}</h1>
      <span className="line-through text-red-500">{prevPrice}</span>
      <span>{newPrice}$</span>
      <button className="bg-blue-500 text-white p-1 rounded-lg">
        Add To cart
      </button>
    </div>
  );
};

export default CardProduct;
