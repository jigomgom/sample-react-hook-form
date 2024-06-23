import React from "react";
import { Outlet } from "react-router-dom";

import Router from "router";

const Root = () => {
  return (
    <Router>
      <Outlet />
    </Router>
  );
};

export default Root;
