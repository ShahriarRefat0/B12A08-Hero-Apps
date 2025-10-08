import React from 'react';
import playStore from "../assets/playStore.png";
import appleStore from "../assets/appleStore.png";
import { Link } from 'react-router';


const Banner = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 justify-center items-center px-2">
        <h1 className="md:text-[72px] text-5xl font-bold text-center">
          We Build <br />{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-gray-500  text-center">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more <br /> exciting. Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-4">
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost font-bold border-1 border-gray-200"
          >
            <img className="w-6" src={playStore} alt="" /> Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost font-bold border-1 border-gray-200"
          >
            <img className="w-6" src={appleStore} alt="" /> Apple Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;