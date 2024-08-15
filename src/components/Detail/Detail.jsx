import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://dummyjson.com";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        setData(response.data);
        if (response.data.category) {
          const categoryResponse = await axios.get(
            `${API_URL}/products/category/${response.data.category}`,
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
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            src={data.images[0]}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{data.description}</p>
            <p className="text-xl font-semibold text-gray-900 mb-4">
              ${data.price}
            </p>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
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
              <Link to={`product/${product.id}`}>
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
    </div>
  );
};

export default Detail;
