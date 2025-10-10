import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import star from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import like from "../assets/icon-review.png";
import {
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import LoadSpinner from "../Components/LoadSpinner";
import { useEffect, useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { toast } from "react-toastify";
import NotFund from "./NotFund";
import Error from "./Error";


const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const params = useParams();
  const { apps, loading, error } = useApps();

  useEffect(() => {
    const isExist = JSON.parse(localStorage.getItem("installs")) || [];
    const alreadyInstalled = isExist.some((a) => a.id === Number(params.id));
    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [params.id]);

  const app = apps.find((app) => app.id === Number(params.id));
  
  if (loading ) {
    return <LoadSpinner></LoadSpinner>;
  } 
  if(error) return <Error></Error>

  const {
    image,
    title,
    downloads,
    ratingAvg,
    reviews ,
    size,
    companyName,
    description,
    ratings,
  } = app || {};

  const formattedDownloads = abbreviateNumber(downloads);
  const formattedReviews = abbreviateNumber(reviews);

  const handleInstall = () => {
    if (isInstalled) return;
    const isExist = JSON.parse(localStorage.getItem("installs"));
    let updateList = [];
    if (isExist) {
      const allReadyInstalled = isExist.some((a) => a.id === app.id);
      if (allReadyInstalled) {
        setIsInstalled(true)
        return;
      }
      updateList = [...isExist, app];
    } else {
      updateList.push(app);
    }
    localStorage.setItem("installs", JSON.stringify(updateList));
    setIsInstalled(true);
    toast.success(`${title} app installed successfully`);
  };

  return (
    <div className="bg-[#F5F5F5]">
      {!app ? <NotFund></NotFund> : (
        <div className="w-11/12 mx-auto flex flex-col">
          <div>
            {/* //download info */}
            <div className="flex items-center gap-10 p-5 md:flex-row flex-col ">
              <img className="md:w-[350px] w-[200px]" src={image} alt="" />
              <div className="flex justify-between flex-col">
                <div className="border-b-1 border-b-gray-300 pb-7">
                  <h3 className="md:text-[32px] text-[25px] font-bold ">
                    {title}
                  </h3>
                  <p className="text-gray-500">
                    Developed by{" "}
                    <span className="text-purple-500 font-semibold">
                      {companyName}
                    </span>
                  </p>
                </div>
                <div className="pt-7 pb-11 flex justify-between md:items-center gap-6">
                  <div className="flex flex-col justify-start">
                    <img className="md:w-10 w-6" src={download} alt="" />
                    <p className="text-gray-500 md:text-base text-sm">
                      Downloads
                    </p>
                    <h2 className="font-bold md:text-[40px] text-3xl">
                      {formattedDownloads}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-start">
                    <img className="md:w-10 w-6" src={star} alt="" />
                    <p className="text-gray-500 md:text-base text-sm">
                      Average Ratings
                    </p>
                    <h2 className="font-bold md:text-[40px] text-3xl">
                      {ratingAvg}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-start">
                    <img className="md:w-10 w-6" src={like} alt="" />
                    <p className="text-gray-500 md:text-base text-sm">
                      Total Reviews
                    </p>
                    <h2 className="font-bold md:text-[40px] text-3xl ">
                      {formattedReviews}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={handleInstall}
                  className={` ${
                    isInstalled ? "btn btn-secondary" : "btn btn-success"
                  } text-white font-bold md:w-[240px] w-full`}
                  disabled={isInstalled}
                >
                  {isInstalled ? "Installed" : `Install Now ${size} MB`}
                </button>
              </div>
            </div>
            {/* //chart */}
            <div className=" border-t-1 border-gray-300 pt-10 px-3">
              <h3 className="text-2xl font-bold">Ratings</h3>

              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                  layout="vertical"
                  width={500}
                  height={400}
                  data={[...ratings].reverse()}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis axisLine={false} tickLine={false} type="number" />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="name"
                    type="category"
                    scale="band"
                  />
                  <Tooltip />
                  <Legend />

                  <Bar dataKey="count" barSize={20} fill="#ff8811" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* description */}
            <div className="pt-10 px-5 border-t-1 border-gray-300 mb-20">
              <p className="font-semibold text-purple-500 text-left">
                Description:
              </p>
              <p className="text-gray-500 text-left">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
