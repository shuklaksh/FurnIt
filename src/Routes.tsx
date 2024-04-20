import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import Shop from "pages/Shop";
import ShopDetailDescription from "pages/ShopDetailDescription";
import DetailReview from "pages/DetailReview";
import Aboutus from "pages/Aboutus";
import Layout from "components/Layouts/Layout";

const ProjectRoutes = () => {
  let element = useRoutes([
    { 
      path: "/", 
      element: <Layout />,
      children: [
        { path: "*", element: <NotFound /> },
        { path: "/", element: <Navigate to="/homepage" /> },
        {
          path: "homepage",
          element: <Homepage />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "shopdetaildescription",
          element: <ShopDetailDescription />,
        },
        {
          path: "detailreview",
          element: <DetailReview />,
        },
        {
          path: "aboutus",
          element: <Aboutus />,
        },
      ]

  },
    
  ]);

  return element;
};

export default ProjectRoutes;
