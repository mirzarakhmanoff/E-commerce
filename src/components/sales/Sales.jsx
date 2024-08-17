import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaPercent } from "react-icons/fa6";
import axios from "../../api";
import buy from "../../assets/buy.svg";
import ProductSkeleton from "../Skeleton/Skeleton";
import { Link } from "react-router-dom";

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get()
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
      className="relative w-full sm:w-64 border overflow-hidden transition-transform duration-300 ease-in-out transform hover:shadow-lg p-3 sm:p-5 rounded-2xl bg-white group"
    >
      <div className="relative overflow-hidden">
        <Link to={`product/${product.id}`}>
          <img
            className="w-full h-36 sm:h-48 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={product.images[0]}
            alt={product.title}
          />
        </Link>
      </div>
      <div className="p-2 sm:p-3">
        <span className="flex items-center text-xs sm:text-sm">
          12 <FaPercent />
        </span>
        <h5 className="mt-2 mb-3 text-base sm:text-lg font-bold leading-tight">
          {product.title}
        </h5>
        <p className="mb-2 text-xs sm:text-sm">
          {product.description.length > 80
            ? product.description.slice(0, 60) + "..."
            : product.description}
        </p>
        <p className="line-through mb-2 text-red-500 text-xs sm:text-sm">
          {product.price} $
        </p>
        <span className="text-green-500 font-bold text-base sm:text-lg">
          {Math.round(product.price - product.price * 0.12)} ₽
        </span>
      </div>

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
        <img className="w-8 h-8 cursor-pointer" src={buy} alt="Buy" />
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
