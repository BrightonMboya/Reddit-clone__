import React, { useState } from "react";

function SideBar() {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <button onClick={() => SetIsOpen(!isOpen)} >
          <svg
            className="z-30 flex items-center cursor-pointer left-7 top-6 mt-2 ml-3"
            fill="#000000"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      ) : (
        <div className="top-0 left-0 fixed bg-slate-200 w-[39vw] h-[50vh] p-10 shadow-lg">
            <button className="text-xl text-white fixed top-4 left-4" 
            onClick={() => SetIsOpen(!isOpen)} >
                X
            </button>
          <div className="mt-8 text-lg fixed left-5 ">
              <ul className="mt-3">
                  <li className="mt-3">New</li>
                  <li className="mt-3">Rising</li>
                  <li className="mt-3">Controversial</li>
                  <li className="mt-3">Top</li>
                  <li className="mt-3">Guided</li>
                  <li className="mt-3">Promoted</li>
              </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
