import React from 'react';
import notFound from '../assets/App-Error.png'

const NotFund = () => {
  return (
    <div className="bg-[]">
      <div>
        <img src={notFound} alt="" />
        <h1 className="text-4xl ">OPPS!! APP NOT FOUND</h1>
        <p className="text-gray-500">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
    </div>
  );
};

export default NotFund;
