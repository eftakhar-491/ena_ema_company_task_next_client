import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className="min-w-[290px] flex-1 group border-2 relative  p-3 rounded-lg overflow-hidden shadow-md transition-transform transform hover:border-green-500">
      <img
        src="https://example.com/chanise-cabbage.jpg"
        alt="Chanise Cabbage"
        className=" w-full rounded-md h-60 object-cover"
      />
      <div className="">
        <h2 className="font-bold mt-2">Chanise Cabbage</h2>
        <p className="flex items-center gap-1">
          <AiOutlineDollar /> <span>3.55</span>
        </p>
        <p className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">Category</span>
          <button className="group-hover:bg-green-500 border  group-hover:text-white px-2 py-1 rounded-md">
            <IoBagAddOutline />
          </button>
        </p>
      </div>
      <div className="absolute top-5 right-5 z-20">
        <button className=" border w-10 h-10 flex items-center justify-center hover:bg-green-500 hover:text-white active:scale-95 rounded-full">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
}
