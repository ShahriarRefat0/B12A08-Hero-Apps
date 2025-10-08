import { ArrowUpDown } from "lucide-react";
import React from "react";
import useApps from "../Hooks/useApps";
import star from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const InstalledApps = () => {
  const { apps, loading } = useApps();

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto md:my-20 my-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="md:text-5xl text-3xl font-bold">
            Out All Applications
          </h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-2xl">{}Apps Found</h2>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort By Size <ArrowUpDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            {apps.map((p) => (
              <div
                key={p.id}
                className="card card-side bg-base-100 shadow p-4 lg:flex-row flex flex-col items-center lg:items-stretch justify-between"
              >
                <figure className="rounded-xl">
                  <img
                    className="w-40 h-28 object-cover"
                    src={p.image}
                    alt={p.name}
                  />
                </figure>
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 p-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-medium md:text-left text-center">{p.title}</h3>
                    <div className="flex flex-row gap-3">
                      <div className="badge badge-soft badge-accent font-semibold">
                        <img className="w-4" src={download} alt="" />
                        {p.downloads}
                      </div>
                      <div className="badge badge-soft badge-error font-semibold">
                        <img className="w-4" src={star} alt="" />
                        {p.ratingAvg}
                      </div>
                      <div className="badge badge-ghost">
                        <p className="text-gray-500">{p.size} MB</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(p.id)}
                    className="btn btn-success text-white w-full lg:w-auto"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
