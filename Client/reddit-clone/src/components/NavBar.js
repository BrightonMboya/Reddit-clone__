function NavBar() {
  return (
    <div className="shadow-lg">
      <div className="ml-7 mt-8 flex">
        <img className="" src={require("../images/menu.png")} alt="menu-icon" />
        <img className="px-8 ml-5" src={require("../images/reddit-1.png")} alt="reddit-icon" />
        <img className="order-last px-9 ml-10" src={require("../images/search.png")} alt="search-icon" />
      </div>

      <div className="ml-7 mt-3 flex text-xl">
          <p className="">Filter by <span className="text-red-400 font-bold">Hot</span></p>
          <img className="px-4 py-1" src={require("../images/icon-arrow.png")} alt="arrow-icon" />
      </div>
    </div>
  );
}

export default NavBar;
