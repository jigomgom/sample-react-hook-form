import React, { Suspense } from "react";

import { FormContextContainer } from "./containers";

const FormContext = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormContextContainer />
    </Suspense>
  );
};

export default FormContext;
