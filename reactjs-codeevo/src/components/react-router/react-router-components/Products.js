import React from "react";
import { Link, Outlet } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";

const Products = () => {
  return (
    <>
      <div>
        <input type={"text"} placeholder={"Search Products"} />
      </div>
      <nav>
        <Link to="featured" element={<FeaturedProducts />}>
          Featured Products
        </Link>
        <Link to="new" element={<NewProducts />}>
          New Products
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
