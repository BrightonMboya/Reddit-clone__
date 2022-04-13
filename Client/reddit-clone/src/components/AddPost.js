import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

function AddPost() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
             <FaIcons.FaUserAlt className="mt-3 w-5 h-5  md:ml-[43vh] lg:ml-[150vh]" />
          
        </button>
      ) : (
        <div className="">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)} >
          <FaIcons.FaPlusCircle className="ml-[10vh] mt-3 w-5 h-5 fill-red-500 md:ml-[43vh] lg:ml-[150vh]" />
          </button>
        </div>
      )}
    </>
  );
}

export default AddPost;
