import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaPercent } from "react-icons/fa6";
import axios from "axios";
import buy from "../../assets/buy.svg";
import sales from "../../assets/sales.png";

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
      className="sales__item w-72 border overflow-hidden transition duration-300 ease-in-out transform hover:shadow-xl p-7 rounded-3xl"
    >
      <div className="sales__img relative overflow-hidden">
        <img
          className="w-full h-96 object-contain transform transition duration-300 ease-in-out hover:scale-105"
          src={product.images[0]}
          alt=""
        />
      </div>
      <div className="sales__desc p-4">
        <span className="flex items-center">
          12 <FaPercent />
        </span>
        <h5 className="mt-2 mb-4 text-xl font-bold leading-tight">
          {product.title}
        </h5>
        <p className="mb-2">{product.description.slice(0, 100)}</p>
        <p className="line-through mb-2 text-red-500">{product.price}</p>
        <span className="text-green-500 font-bold text-lg">
          {product.price - product.price * 0.12}
        </span>

        <div className="buy mt-4 flex justify-between items-center">
          <select className="p-2 border rounded-md" name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <img className="ml-4 cursor-pointer" src={buy} alt="" />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-4 mt-14 hover:text-yellow-500">
        <h3 className="font-bold text-4xl text-black flex items-center">
          Скидки <FaPercent className="text-red-500" />
        </h3>
        <span className="flex items-center cursor-pointer">
          Все категории <FaArrowRightLong />
        </span>
      </div>
      <div className="sales flex gap-8 flex-wrap">{productItems}</div>
    </div>
  );
};

export default Sales;
