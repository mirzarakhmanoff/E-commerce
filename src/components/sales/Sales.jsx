import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaPercent } from "react-icons/fa6";
import axios from "axios";
import buy from "../../assets/buy.svg";

const API_URL = "https://dummyjson.com/products";

const Sales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const limitedProducts = res.data.products.slice(0, 4);
        setProducts(limitedProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  const productItems = products.map((product) => (
    <div
      key={product.id}
      className="sales__item w-full sm:w-72 border overflow-hidden transition duration-300 ease-in-out transform hover:shadow-xl p-4 sm:p-7 rounded-3xl bg-white"
    >
      <div className="sales__img relative overflow-hidden">
        <img
          className="w-full h-48 sm:h-96 object-contain transform transition duration-300 ease-in-out hover:scale-105"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="sales__desc p-2 sm:p-4">
        <span className="flex items-center text-sm sm:text-base">
          12 <FaPercent />
        </span>
        <h5 className="mt-2 mb-4 text-lg sm:text-xl font-bold leading-tight">
          {product.title}
        </h5>
        <p className="mb-2 text-sm sm:text-base">
          {product.description.length > 100
            ? product.description.slice(0, 100) + "..."
            : product.description}
        </p>
        <p className="line-through mb-2 text-red-500 text-sm sm:text-base">
          {product.price} ₽
        </p>
        <span className="text-green-500 font-bold text-lg sm:text-xl">
          {Math.round(product.price - product.price * 0.12)} ₽
        </span>

        <div className="buy mt-2 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
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
      <div className="sales flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap">
        {productItems}
      </div>
    </div>
  );
};

export default Sales;
