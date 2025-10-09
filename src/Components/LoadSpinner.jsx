import React from "react";
import { HashLoader, MoonLoader, RingLoader } from "react-spinners";

const LoadSpinner = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <MoonLoader
        color="#f68fff"
        cssOverride={override}
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadSpinner;
