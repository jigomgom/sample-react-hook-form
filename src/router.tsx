import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { PATH } from "constants/index";
import * as P from "pages";

interface RouterProps {
  children: React.ReactNode;
}

const Router = ({ children }: RouterProps) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={children}>
        <Route path={PATH.ROOT} element={<P.Root />} />
        <Route
          path={`${PATH.EXAMPLE}/${PATH.LOGIN}`}
          element={<P.StateLogin />}
        />
        <Route
          path={`${PATH.EXAMPLE}/${PATH.HOOK_FORM_LOGIN}`}
          element={<P.StateLogin />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
