import { useEffect, useState } from "react";


import { Product } from "../../interface/product";
import  sampleProducts  from "../../db/product";

export const Home = () => {
  const [product, setProduct] = useState<Product[]>([]);



  return (
    <div className="flex justify-center dark:bg-slate-600">
      <div>
        <h1 className=" text-4xl flex justify-center font-sans dark:text-white">Products</h1>

        <div className="flex flex-wrap">
          {sampleProducts.map((product) => (
            <div className="flex flex-col m-2">
              <h1>{product.name}</h1>
              <img src={product.image} alt="" />
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
