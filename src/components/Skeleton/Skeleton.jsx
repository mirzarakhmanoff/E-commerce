import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="relative w-full sm:w-72 border overflow-hidden transition-transform duration-300 ease-in-out transform hover:shadow-xl p-4 sm:p-7 rounded-3xl bg-white animate-pulse">
      <div className="relative overflow-hidden bg-gray-200 h-96">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
