import { useEffect, useState } from "react";
import { api } from "../../service/api";

export const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get("");
  }, []);

  return (
    <div className="">
      <div>
        <h1 className="text-4xl flex justify-center font-sans">Products</h1>
      </div>
    </div>
  );
};
