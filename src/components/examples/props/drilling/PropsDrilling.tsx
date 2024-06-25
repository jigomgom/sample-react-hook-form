import React, { Suspense } from "react";

import { PropsDrillingContainer } from "./containers";

const PropsDrilling = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropsDrillingContainer />
    </Suspense>
  );
};

export default PropsDrilling;
