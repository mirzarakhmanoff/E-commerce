import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa6";
import buy from "../../assets/buy.svg";
import ProductSkeleton from "../Skeleton/Skeleton";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const API_URL = "https://dummyjson.com/products";
const CATEGORIES_URL = "https://dummyjson.com/products/category-list";

const Products = ({ onCategoryChange }) => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const limit = 4;

  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(CATEGORIES_URL)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const handleCategoryClick = (category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
    setSelectedCategory(`category/${categorySlug}`);
    setOffset(1);
    if (onCategoryChange) {
      onCategoryChange(`category/${categorySlug}`); // Передача selectedCategory через пропс
    }
  };

  const categoryItems = categories.map((category) => (
    <button
      onClick={() => handleCategoryClick(category)}
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
          onClick={() => handleCategoryClick("")}
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
