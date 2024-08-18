import React, { memo } from "react";

const ProductSkeleton = () => {
  return (
    <div className="relative w-full sm:w-64 border overflow-hidden bg-white shadow-md rounded-lg p-4">
      <div className="animate-pulse">
        <div className="w-full h-60 bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
        <div className="absolute inset-x-0 bottom-0 bg-white p-3">
          <div className="flex items-center justify-between">
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductSkeleton);
