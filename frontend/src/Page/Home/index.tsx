import { useEffect, useState } from "react";


import { Product } from "../../interface/product";
import  sampleProducts  from "../../db/product";
import CardProduct from "../../components/CardProduct";

export const Home = () => {
  const [product, setProduct] = useState<Product[]>([]);



  return (
    <div className="flex justify-center dark:bg-slate-600">
      <div>
        <h1 className=" text-4xl flex justify-center font-sans dark:text-white">Products</h1>

        <div className="flex flex-wrap">
          {sampleProducts.map((product) => (
         
            <CardProduct key={product.title} title={product.title} image={product.image} price={product.price}/>
          ))}
        </div>
      </div>
    </div>
  );
};
