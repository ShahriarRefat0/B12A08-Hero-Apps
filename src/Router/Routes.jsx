import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';

import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';
import InstalledApps from '../Pages/InstalledApps';
import AppDetails from '../Pages/AppDetails';
import Error from '../Pages/Error';
import NotFund from '../Pages/NotFund';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading..</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allApps",
        element: <AllApps></AllApps>,
      },
      {
        path: '/allApps/*',
        element:<NotFund></NotFund>
      },
      {
        path: "/installedApps",
        element:<InstalledApps></InstalledApps>
      },
      {
        path: '/appDetails/:id',
        element: <AppDetails></AppDetails>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ],
  },
]);

export default router;