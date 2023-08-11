export const Header = () => {
  return (
    <div className="flex text-center">
      <div className="text-3xl font-bold">Ecommerce API</div>
      <div>
        <label htmlFor="search">Pesquisa</label>
        <input
          type="text"
          id="search"
          className="bg-gray-50 border-2 hover:border-t-4 border-gray-300"
        />
      </div>
      <div>
        <span>Cart</span>
        <span>Sign In</span>
      </div>
    </div>
  );
};
