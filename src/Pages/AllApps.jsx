import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";

const AllApps = () => {
  const { apps, loading } = useApps();

  const [search, setSearch ] = useState('')
  const term = search.trim().toLowerCase();


  const searchApp = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;



  
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto mt-20">
        <div className="text-center space-y-4 mb-12">
          <h1 className="md:text-5xl text-3xl font-bold">
            Out All Applications
          </h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold md:text-base text-sm">
            ({apps.length}) Apps Found
          </h2>
          <label className="input md:w-[320px] w-50">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search App"
            />
          </label>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-5 mb-20">
          {searchApp.map((app) => (
            <AppCard key={app.id} app={app}>
              {" "}
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
