import React from "react";

function Buttonppr({ text }) {
  return (
    <a href="#_" className=" w-full sm:w-fit relative inline-block px-6 py-3 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-orange-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-black border-2 border-orange-500  group-hover:bg-orange-500"></span>
      <div className="w-full flex items-center">
      <span className="  w-full text-center relative text-white group-hover:text-black font-bold ">
        {text}
      </span>
      </div>
    </a>
  );
}

export default Buttonppr;
