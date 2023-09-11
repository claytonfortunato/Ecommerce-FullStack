import { useEffect, useState } from "react";


import { Product } from "../../interface/product";
import  sampleProducts  from "../../db/product";
import CardProduct from "../../components/CardProduct";
import Filter from "../../components/Filter";

export const Home = () => {
  const [product, setProduct] = useState<Product[]>([]);



  return (
    <div className=" dark:bg-slate-600">
  

        <div className="flex">

        <Filter/>

        <div className="flex flex-wrap">
          {sampleProducts.map((product) => (
            
            <CardProduct key={product.title} title={product.title} image={product.image} prevPrice={product.prevPrice} newPrice={product.newPrice}/>
            ))}
        </div>
            </div>
      
    </div>
  );
};
