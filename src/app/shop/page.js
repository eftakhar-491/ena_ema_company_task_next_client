import React from "react";

import ProductCard from "@/components/Shared/ProductCard";
export default function page() {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://static.vecteezy.com/system/resources/thumbnails/002/885/318/small/nature-green-tree-fresh-leaf-on-beautiful-blurred-soft-bokeh-sunlight-background-with-free-copy-space-spring-summer-or-environment-cover-page-template-web-banner-and-header-free-photo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* section banner with background image and text */}
          <div className="max-w-[1440px] mx-auto  text-sm w-11/12 lg:w-4/5 py-20">
            <h1 className="text-2xl font-bold text-center text-white">
              All Products
            </h1>
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <p className="text-center text-white">
              <span>Home</span> &gt; <span>Shop</span>
            </p>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap gap-3 max-w-[1440px] mx-auto w-11/12 lg:w-4/5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}
