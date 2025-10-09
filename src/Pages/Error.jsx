import React from 'react';
import errorImg from '../assets/error-404.png'
import { Link } from 'lucide-react';
const Error = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col items-center gap-5 my-43">
        <img src={errorImg} alt="" />
        <h1 className="text-4xl font-semibold">Oops, page not found!</h1>
        <p className="text-gray-500">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="btn btn-primary mt-6 px-7 font-bold"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;