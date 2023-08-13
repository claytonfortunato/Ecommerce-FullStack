export const Header = () => {
  return (
    <div className="">
      <div className="text-3xl font-bold underline bg-slate-400">
        Ecommerce API
      </div>
      <div>
        <label htmlFor="search">Pesquisa</label>
        <input type="text" id="search" />
      </div>
      <div>
        <span>Cart</span>
        <span>Sign In</span>
      </div>
    </div>
  );
};
