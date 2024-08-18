import React, { memo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import buy from "../../assets/buy.svg";

const ProductCard = ({ filteredProducts }) => {
  const productItems = filteredProducts?.map((product) => (
    <div
      key={product.id}
      className="relative w-full sm:w-64 border overflow-hidden transition-transform duration-300 ease-in-out transform hover:shadow-xl p-4 sm:p-5 rounded-2xl bg-white group"
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            className="w-full h-60 object-contain transform transition duration-300 ease-in-out hover:scale-105"
            src={product.images[0]}
            alt={product.title}
          />
        </Link>
      </div>
      <div className="p-3">
        <h5 className="mt-2 mb-3 text-lg font-bold leading-tight">
          {product.title}
        </h5>
        <p className="mb-2 text-sm">{product.description.slice(0, 80)}</p>
        <span className="text-green-500 font-bold text-lg">
          {product.price} $
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-white transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 z-10 flex justify-between items-center p-3">
          <select
            className="p-1 border rounded-md text-xs sm:text-sm"
            name=""
            id=""
          >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <img className="w-6 h-6 cursor-pointer" src={buy} alt="Buy" />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="flex gap-8 flex-wrap justify-center">{productItems}</div>
    </div>
  );
};

export default memo(ProductCard);
