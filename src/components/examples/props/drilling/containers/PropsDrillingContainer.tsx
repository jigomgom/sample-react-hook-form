import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { faker } from "@faker-js/faker";

import { PropsDrillingSection } from "./section";
import type { UserType } from "types";

const PropsDrillingContainer = () => {
  const { handleSubmit, register, reset, watch } = useForm<UserType>({
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

    reset({
      name: fakeUser.name,
      age: fakeUser.age,
      location: fakeUser.location,
    });
  }, []);

  const handleFormSubmit = handleSubmit((updatedUser): void => {
    console.log("Updated User:", updatedUser);
  });

  return (
    <main>
      <h1>Props Drilling Example</h1>
      {fakeUser && (
        <PropsDrillingSection
          register={register}
          watch={watch}
          onFormSubmit={handleFormSubmit}
        />
      )}
    </main>
  );
};

export default PropsDrillingContainer;
