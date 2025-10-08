import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex flex-col min-h-screen'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;