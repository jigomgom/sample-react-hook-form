import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { faker } from "@faker-js/faker";

import { FormContextSection } from "./section";
import type { UserType } from "types";

const FormContextContainer = () => {
  const formMethod = useForm<UserType>({
    defaultValues: { name: "", age: 0, location: "" },
    mode: "onChange",
  });

  const fakeUser = {
    name: faker.name.fullName(),
    age: faker.datatype.number({ min: 18, max: 60 }),
    location: faker.address.city(),
  };

  useEffect(() => {
    const fakeUser = {
      name: faker.name.fullName(),
      age: faker.datatype.number({ min: 18, max: 60 }),
      location: faker.address.city(),
    };

    if (!fakeUser) return;

    formMethod.reset({
      name: fakeUser.name,
      age: fakeUser.age,
      location: fakeUser.location,
    });
  }, []);

  return (
    <main>
      <h1>useFormContext Example</h1>
      {fakeUser && (
        <FormProvider {...formMethod}>
          <FormContextSection />
        </FormProvider>
      )}
    </main>
  );
};

export default FormContextContainer;
