import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";
import LoadSpinner from "../Components/LoadSpinner";
import NotFund from "./NotFund";

const AllApps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [searchLoading, setSearchLoading] = useState(false);
  const term = search.trim().toLowerCase();

  
  useEffect(() => {
    setSearchLoading(true);
    const delay = setTimeout(() => {
      if (term) {
        const result = apps.filter((app) =>
          app.title?.toLowerCase().includes(term)
        );
        setFilteredApps(result);
      }      else {
        setFilteredApps(apps);
      }
      setSearchLoading(false);
    }, 500);
    return () => clearTimeout(delay);
  }, [term, apps]);



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

        {loading || searchLoading ? (
          <LoadSpinner></LoadSpinner>
        ) : (filteredApps.length === 0 ) ? <NotFund></NotFund> : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-5 mb-20">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app}>
                {" "}
              </AppCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
