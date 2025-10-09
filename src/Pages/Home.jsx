import React from "react";
import { Link } from "react-router";
import AppCard from "./AppCard";
import useApps from "../Hooks/useApps";
import Banner from "../Components/Banner";
import HeroSection from "../Components/HeroSection";
import LoadSpinner from "../Components/LoadSpinner";

const Home = () => {
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(0, 8);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="mD:mt-20 mt-10 ">
        <Banner></Banner>
        <HeroSection></HeroSection>

        <div className="md:my-20 my-10">
          <div className="text-center space-y-4 px-5">
            <h1 className="md:text-5xl text-4xl font-bold">Trending Apps</h1>
            <p className="text-gray-500 ">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          {loading ? (
            <LoadSpinner></LoadSpinner>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto md:mt-10 mt-6">
              {featuredApps.map((app) => (
                <AppCard key={app.id} app={app}>
                  {" "}
                </AppCard>
              ))}
            </div>
          )}
          <div className="flex  items-center justify-center mt-7">
            <Link
              to="/allApps"
              className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-8"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
