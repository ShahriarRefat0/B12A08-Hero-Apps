import { Gitlab, House, MonitorDown, Webhook } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
  
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">
                  <House className="w-4" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/allApps">
                  <Webhook className="w-4" />
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/installedApps">
                  <MonitorDown className="w-4" />
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost ">
            <img className="md:w-10 w-7" src="../src/assets/logo.png" alt="" />
            <p className="font-bold text-transparent bg-clip-text bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
              HERO.IO
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">
                <House className="w-4" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allApps">
                <Webhook className="w-4" />
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installedApps">
                <MonitorDown className="w-4" />
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/ShahriarRefat0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white"
          >
            <Gitlab />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;