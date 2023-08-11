export const Header = () => {
  return (
    <div className="flex ">
      <div>Ecommerce API</div>
      <div>
        <label htmlFor="">Pesquisa</label>
        <input type="text" className="border-[]" />
      </div>
      <div>
        <span>Cart</span>
        <span>Sign In</span>
      </div>
    </div>
  );
};
