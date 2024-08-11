import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaPercent } from "react-icons/fa6";
import axios from "axios";
import buy from "../../assets/buy.svg";
import ProductSkeleton from "../Skeleton/Skeleton";
import { FaSearch } from "react-icons/fa";

const API_URL = "https://dummyjson.com/products";
const CATEGORIES_URL = "https://dummyjson.com/products/category-list";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);
  const limit = 4;

  const [serach, setSearch] = useState("");
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(serach.toLowerCase());
  });

  useEffect(() => {
    axios
      .get(CATEGORIES_URL)

      .then((res) => {
        setCategories(res.data);
        setLength(res.data.length);
      })
      .catch((err) => console.log(err));
  }, [setOffset]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${selectedCategory}`, {
        params: {
          limit: limit * offset,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [offset, selectedCategory]);

  const categoryItems = categories?.map((category) => (
    <button
      onClick={() => {
        setSelectedCategory(`category/${category}`);
        setOffset(1);
      }}
      key={category}
      type="button"
      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
    >
      {category}
    </button>
  ));

  const productItems = filteredProducts.map((product) => (
    <div
      key={product.id}
      className="relative w-full sm:w-72 border overflow-hidden transition-transform duration-300 ease-in-out transform hover:shadow-xl p-4 sm:p-7 rounded-3xl bg-white group"
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-96 object-contain transform transition duration-300 ease-in-out hover:scale-105"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="p-4">
        <h5 className="mt-2 mb-4 text-xl font-bold leading-tight">
          {product.title}
        </h5>
        <p className="mb-2">{product.description.slice(0, 100)}</p>
        <span className="text-green-500 font-bold text-lg">
          {product.price} $
        </span>

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
    </div>
  ));

  return (
    <div className="container mx-auto">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center gap-4 mt-14 hover:text-yellow-500 mb-11">
          <h3 className="font-bold text-4xl text-black flex items-center">
            Скидки <FaPercent className="text-red-500" />
          </h3>
          <span className="flex items-center cursor-pointer">
            Все категории <FaArrowRightLong />
          </span>
        </div>
        <div className="w-96 relative flex items-center border rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg focus-within:shadow-lg">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 outline-none border-none rounded-lg placeholder-gray-400 text-gray-800 focus:ring-0 focus:outline-none transition-all duration-300 ease-in-out"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto py-8 whitespace-nowrap">
        <button
          onClick={() => setSelectedCategory("")}
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          All
        </button>
        {categoryItems}
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : productItems}
      </div>
      <div className="btn m-auto flex items-center justify-center mt-7">
        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-14 py-4 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => setOffset((prevOffset) => prevOffset + 1)}
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Products;
