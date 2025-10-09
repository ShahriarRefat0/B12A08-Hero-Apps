import React from "react";
import { RingLoader } from "react-spinners";

const LoadSpinner = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <RingLoader
        color="gray"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadSpinner;
