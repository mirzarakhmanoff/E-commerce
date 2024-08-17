import axios from "../../api";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const API_URL = "https://dummyjson.com";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setoffset] = useState(0);
  const handleClick = () => setoffset(offset + 1);
  const onhandleClick = () => setoffsett(offsett + 1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`/${id}`);
        setData(response.data);
        if (response.data.category) {
          const categoryResponse = await axios.get(
            `/category/${response.data.category}`,
            {
              params: {
                limit: 4,
              },
            }
          );
          setRecommendations(
            categoryResponse.data.products.filter(
              (product) => product.id !== id
            )
          );
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
      <div className="detail_wrap  pt-10">
        <p className="text-[#7d7d7d]">Товары Ванная Платяные шкафы</p>
        <hr />
        <div className="flex gap-11 mt-6">
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <img src={data?.thumbnail} alt="" />
            <div className="flex items-center justify-center"></div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <b className="text-2xl">{data?.title}</b>
            <div className="flex items-center">
              <p className="text-xl">Арт. 890.321.44 / </p>
              <p className="text-gray-400">Под заказ на 4.04.2021</p>
            </div>
            <p className="text-gray-400">
              Банка с крышкой и поднос, 5 шт., стекло пробка банки и коробки
              помогут организовать удобное хранение.{" "}
            </p>
            <div className="flex items-center gap-14">
              <p className="text-black dark:text-white text-3xl mb-10 mt-5 font-bold">
                {data?.price} <span className="text-xl">Br</span>
              </p>
              <div className="w-1/2 flex items-center gap-3">
                <button
                  className="flex items-center justify-center border w-[14px] h-[14px] p-3 text-4xl  pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
                  disabled={offset <= 0}
                  onClick={() => setoffset(offset - 1)}
                >
                  -
                </button>
                <p>{offset}</p>
                <button
                  className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
                  onClick={() => setoffset(offset + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <button className="bg-orange-500 p-2 rounded-lg text-white pl-4 pr-4">
                Добаить в корзину +
              </button>
              <div className="flex items-center gap-2">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <p className="text-gray-400">{data?.description}</p>
            <div className="flex flex-col gap-3">
              <hr />
              <p>{data?.warrantyInformation}</p>
              <hr />
              <p>{data?.brand}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
        <div className="flex gap-4 overflow-x-auto">
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="w-64 border rounded-lg overflow-hidden bg-white shadow-md"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-700 text-sm mb-2">
                  {product.description.slice(0, 80)}...
                </p>
                <span className="text-green-500 font-bold">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
