import { useEffect, useState } from "react";
import { api } from "../../service/api";

import { Header } from "../../components/Header";

export const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get("");
  }, []);

  return (
    <div className="">
      <Header />
      <div>
        <h1 className="text-4xl flex justify-center">Products</h1>
      </div>
    </div>
  );
};
