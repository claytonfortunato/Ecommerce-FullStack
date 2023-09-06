// import { useEffect, useState } from "react";
// import { api } from "../../service/api";
// import { Product } from "../../interface/product";

export const Home = () => {
  // const [product, setProduct] = useState<Product[]>([]);

  // useEffect(() => {
  //   api.get("/api/product").then((resp) => {
  //     setProduct(resp.data);
  //   });
  // }, []);

  return (
    <div className="dark:bg-slate-600">
      <div>
        <h1 className=" text-4xl flex justify-center font-sans ">Products</h1>

        {/* <div>
          {product.map((product) => (
            <div>
              <h1>{product.name}</h1>
              <img src={product.image} alt="" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
