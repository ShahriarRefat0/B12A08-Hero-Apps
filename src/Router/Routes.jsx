import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import AllApps from '../Pages/AllApps';
import InstalledApps from '../Pages/InstalledApps';
import AppDetails from '../Pages/AppDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/installedApps",
        element:<InstalledApps></InstalledApps>
      },
      {
        path: '/appDetails',
        element: <AppDetails></AppDetails>
      }
    ],
  },
]);

export default router;