import React from "react";
import { FaPhoneAlt, FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className=" ">
      <div className="bg-[#333333] text-white/80 ">
        <div className="max-w-[1440px] mx-auto py-1 text-sm w-11/12 lg:w-4/5 flex items-center justify-between ">
          <p className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>{" "}
            Store Location: 123 Main St, Anytown, USA
          </p>
          <div>Sign in / Sign Up</div>
        </div>
      </div>
      <div className="border-b">
        <div className="flex items-center justify-between py-3 max-w-[1440px] mx-auto text-sm w-11/12 lg:w-4/5 ">
          <div className="flex items-center text-xl font-bold text-green-600">
            <span className="mr-1">🌱</span> Ecobazar
          </div>

          {/* Search Bar */}
          <div className="flex w-1/3 border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 outline-none"
            />
            <button className="bg-green-600 text-white px-4">Search</button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <FaRegHeart className="text-xl cursor-pointer" />
            <div className="relative flex items-center">
              <BiShoppingBag className="text-xl cursor-pointer" />
              <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full px-1.5 py-0.5 -mt-2 -mr-2">
                2
              </span>
            </div>
            <span className="text-gray-600">
              Shopping cart: <br /> <b>$57.00</b>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto py-1 text-sm w-11/12 lg:w-4/5  flex items-center justify-between ">
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-green-600">
            Home
          </Link>
          <Link href="/shop" className="text-gray-600 hover:text-green-600">
            Shop
          </Link>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">
            <FaPhoneAlt className="inline text-sm" />
          </span>
          (219) 555-0114
        </div>
      </div>
    </nav>
  );
}
