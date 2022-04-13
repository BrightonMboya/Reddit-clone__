import SideBar from "./SideBar";
import AddPost from "./AddPost";

function NavBar() {
  return (
    <div className="shadow-lg w-full">
      <div className="ml-7 mt-8 flex items-stretch">
        <SideBar/>
        <img className="px-8 ml-5" src={require("../images/reddit-1.png")} alt="reddit-icon" />
        <AddPost/>
        {/* <FaIcons.FaSearch className="ml-[10vh]  mt-3 w-5 h-5"/> */}
        {/* <FaIcons.FaUserAlt className="ml-[10vh] mt-5 w-5 h-5  md:ml-[43vh] lg:ml-[150vh]"/> */}
      </div>

      <div className="ml-7 mt-3 flex text-xl">
          <p className="">Filter by <span className="text-red-400 font-bold">Hot</span></p>
          <img className="px-4 py-1" src={require("../images/icon-arrow.png")} alt="arrow-icon" />
      </div>
    </div>
  );
}

export default NavBar;
