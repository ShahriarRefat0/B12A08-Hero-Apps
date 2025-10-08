import { Download } from 'lucide-react';
import React from 'react';
import star from '../assets/icon-ratings.png';
import download from "../assets/icon-downloads.png";
import { Link } from 'react-router';



const AppCard = ({app}) => {
  const { image, title, ratingAvg, downloads, id } = app;

  
  return (
    <Link to={`/appDetails/${id}`}>
      <div>
        <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
          <figure className="px-5 pt-5 overflow-hidden">
            <img
              className="w-[315px] h-[250px] rounded-xl"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body space-y-1">
            <p className="font-semibold text-xl">{title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-soft badge-accent font-semibold">
                <img className="w-4" src={download} alt="" />
                {downloads}
              </div>
              <div className="badge badge-soft badge-error font-semibold">
                <img className="w-4" src={star} alt="" />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;