import React from "react";

export default function ProductDetails() {
  return (
    <>
      <section className="flex-col fixed top-0 left-0 w-screen h-screen z-10 flex items-center justify-center bg-black/50">
        <div className="relative bg-white rounded-lg p-5">
          <div className="absolute top-4 border rounded-full cursor-pointer hover:border-black active:scale-95 w-8 p-1 h-8 flex items-center justify-center right-4">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex items-center max-w-[1200px]">
            <div className="w-1/2 pr-5">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Chinese Cabbage"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold">Chinese Cabbage</h2>
              <p className="text-green-600 font-semibold mt-2">In Stock</p>
              <p className="text-lg line-through text-gray-500">$48.00</p>
              <p className="text-xl font-bold text-green-600">$17.28</p>
              <p className="mt-4">
                <span className="font-semibold">Category:</span> Vegetables
              </p>

              <p className="mt-4 text-gray-700">
                Cras efficitur tristique necologis and fermentum per convallis
                mauris, per inceptos himenaeos. Nulla ultricies diam ullamcorper
                nisl, vitae ultricies lorem. Nulla vestibulum magna a consequat
                purus.
              </p>
              <button className="mt-5 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
