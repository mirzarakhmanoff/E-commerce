import React, { memo, useEffect, useState } from "react";
import axios from "../../api";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa6";
import ProductSkeleton from "../Skeleton/Skeleton";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";

const Products = ({ onCategoryChange }) => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const limit = 4;
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    axios
      .get(`/category-list`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/${selectedCategory}`, {
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
      onCategoryChange(`category/${categorySlug}`);
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

      <div className="flex items-center justify-center">
        {" "}
        <ProductCard filteredProducts={filteredProducts} />
      </div>
      <div className="flex items-center justify-center gap-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : (
          <div></div>
        )}
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

export default memo(Products);
