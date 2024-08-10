import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaPercent } from "react-icons/fa6";
import axios from "axios";
import buy from "../../assets/buy.svg";
import ProductSkeleton from "../Skeleton/Skeleton";

const API_URL = "https://dummyjson.com/products";

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => {
        const limitedProducts = res.data.products.slice(4, 8);
        setProducts(limitedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const productItems = products.map((product) => (
    <div
      key={product.id}
      className="relative w-full sm:w-72 border overflow-hidden transition-transform duration-300 ease-in-out transform hover:shadow-xl p-4 sm:p-7 rounded-3xl bg-white group"
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 sm:h-96 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="p-2 sm:p-4">
        <span className="flex items-center text-sm sm:text-base">
          12 <FaPercent />
        </span>
        <h5 className="mt-2 mb-4 text-lg sm:text-xl font-bold leading-tight">
          {product.title}
        </h5>
        <p className="mb-2 text-sm sm:text-base">
          {product.description.length > 100
            ? product.description.slice(0, 80) + "..."
            : product.description}
        </p>
        <p className="line-through mb-2 text-red-500 text-sm sm:text-base">
          {product.price} $
        </p>
        <span className="text-green-500 font-bold text-lg sm:text-xl">
          {Math.round(product.price - product.price * 0.12)} ₽
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-white transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 z-10 flex justify-between items-center p-4">
        <select
          className="p-2 border rounded-md text-sm sm:text-base"
          name=""
          id=""
        >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <img className="cursor-pointer" src={buy} alt="Buy" />
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-4 mt-14 hover:text-yellow-500 mb-11">
        <h3 className="font-bold text-2xl sm:text-4xl text-black flex items-center">
          Скидки <FaPercent className="text-red-500" />
        </h3>
        <span className="flex items-center cursor-pointer text-sm sm:text-base">
          Все категории <FaArrowRightLong />
        </span>
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : productItems}
      </div>
    </div>
  );
};

export default Sales;
