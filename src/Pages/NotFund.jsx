import React from "react";
import notFound from "../assets/App-Error.png";

const NotFund = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col items-center gap-5 py-15 px-5 my-43">
        <img className="w-auto" src={notFound} alt="" />
        <h1 className="text-4xl font-semibold">OPPS!! APP NOT FOUND</h1>
        <p className="text-gray-500">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
    </div>
  );
};

export default NotFund;
