import React, { useEffect, useState } from "react";
import axios from "../../api";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProductCard from "../product/ProductCard";
import { memo } from "react";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`/${id}`);
        setData(response.data);

        if (response.data.category) {
          const categoryResponse = await axios.get(
            `/category/${response.data.category}`,
            {
              params: { limit: 4 },
            }
          );
          setProducts(categoryResponse.data.products);
        }
      } catch (err) {
        setError("Error fetching product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) return <div className="text-center py-6">Loading...</div>;
  if (error)
    return <div className="text-center py-6 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <Header />
      <div className="detail_wrap pt-10">
        <p className="text-[#7d7d7d]">Товары Ванная Платяные шкафы</p>
        <hr />
        <div className="flex gap-11 mt-6">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <img
              src={data?.thumbnail}
              alt={data?.title}
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{data?.title}</h1>
            <div className="flex items-center">
              <p className="text-xl">Арт. 890.321.44 / </p>
              <p className="text-gray-400">Под заказ на 4.04.2021</p>
            </div>
            <p className="text-gray-400">{data?.description}</p>
            <div className="flex items-center gap-14 mt-5">
              <p className="text-black text-3xl font-bold">
                {data?.price} <span className="text-xl">Br</span>
              </p>
              <div className="flex items-center gap-3">
                <button className="border w-8 h-8 text-xl rounded text-gray-700">
                  -
                </button>
                <p>1</p>
                <button className="border w-8 h-8 text-xl rounded text-gray-700">
                  +
                </button>
              </div>
            </div>
            <button className="bg-orange-500 p-2 rounded-lg text-white mt-4">
              Добавить в корзину +
            </button>
            <div className="mt-4">
              <p className="text-gray-400">{data?.warrantyInformation}</p>
              <p className="text-gray-400">{data?.brand}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
        {products.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto">
            <ProductCard products={products} />
          </div>
        ) : (
          <p>No recommended products available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default memo(Detail);
