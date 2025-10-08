import React from 'react';
import useApps from '../Hooks/useApps';

const AppDetails = () => {
  const { apps, loading } = useApps();
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto">
        <div>
          <img src="" alt="" />
          <div className="">
            <h3 className="text-[32px] ">{apps.title}</h3>
            <p className="text-gray-500">
              Developed by {' '}<span className="text-purple-500">{apps.companyName}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;