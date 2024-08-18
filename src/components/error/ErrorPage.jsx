import React, { memo } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="text-lg mt-4">Oops! Page not found.</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default memo(ErrorPage);
