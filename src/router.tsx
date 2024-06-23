import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import * as P from "pages";

interface RouterProps {
  children: React.ReactNode;
}

const Router = ({ children }: RouterProps) => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route element={children}></Route>)
  );

  return <RouterProvider router={router} />;
};

export default Router;
