const Filter = () => {
  return (
    <div className="w-full w-56  mr-10 ml-10 bg-gray-200 flex flex-col items-center dark:bg-slate-400 rounded-lg p-2">
      <h1 className="text-4xl mb-4 text-black dark:text-white">Filter</h1>

      <div className="flex flex-col items-center mb-6">
        <span className="mb-4">Sort by</span>

        <select name="filterPrice">
          <option value="commom">Popular</option>
          <option value="lowPrice">Menor preço</option>
          <option value="bigPrice">Maior preço</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="mb-4">Preço</h3>

        <input type="number" className="w-16" />
      </div>

      <div className="mb-6">
        <h3 className="mb-3">Categoria</h3>

        <select name="filterCategory">
          <option value="shoes">Shoes</option>
          <option value="Shirts">Shirts</option>
          <option value="sandals">Sandals</option>
          <option value="heels">Heels</option>
        </select>
      </div>

      <div className="grid-cols-2 mb-6">
        <h3>Cores</h3>

        <div className="grid grid-cols-2 gap-6 ">
          <div>
            <div className="bg-black rounded-full w-6">
              <span>Black</span>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-full w-6">
              <span className="">White</span>
            </div>
          </div>
          <div>
            <div className="bg-red-600 rounded-full w-6 ">
              <span className="">Red</span>
            </div>
          </div>
          <div>
            <div className="bg-blue-600 rounded-full w-6 ">
              <span className="">Blue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
