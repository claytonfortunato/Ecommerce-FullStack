import sampleProducts from "../../db/product";
import CardProduct from "../../components/CardProduct";
import Filter from "../../components/Filter";

export const Home = () => {
  return (
    <div className=" dark:bg-slate-600">
      <h1 className="flex justify-center items-center text-5xl text-black dark:text-white">
        Produtos
      </h1>

      <div className="flex gap-3">
        <Filter />

        <div className="flex flex-wrap">
          {sampleProducts.map((product) => (
            <CardProduct
              key={product.title}
              title={product.title}
              image={product.image}
              prevPrice={product.prevPrice}
              newPrice={product.newPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
