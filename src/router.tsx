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
        <Route path={PATH.ROOT} element={<P.Main />} />
        <Route
          path={`${PATH.EXAMPLE1}${PATH.LOGIN}`}
          element={<P.StateLoginPage />}
        />
        <Route
          path={`${PATH.EXAMPLE1}${PATH.HOOK_FORM_LOGIN}`}
          element={<P.HookFormLoginPage />}
        />
        <Route
          path={`${PATH.EXAMPLE2}${PATH.DRILLING}`}
          element={<P.PropsDrillingPage />}
        />
        <Route
          path={`${PATH.EXAMPLE2}${PATH.HOOK_FORM_CONTEXT}`}
          element={<P.UseFormContextPage />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
