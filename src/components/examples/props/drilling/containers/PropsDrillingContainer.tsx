import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import { PropsDrillingSection } from "./section";
import type { UserType } from "types";

const PropsDrillingContainer = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fakeUser = {
      name: faker.name.fullName(),
      age: faker.datatype.number({ min: 18, max: 60 }),
      location: faker.address.city(),
    };
    setUser(fakeUser);
  }, []);

  const handleFormSubmit = (updatedUser: UserType): void => {
    console.log("Updated User:", updatedUser);
  };

  return (
    <main>
      <h1>Props Drilling Example</h1>
      {user && (
        <PropsDrillingSection user={user} onFormSubmit={handleFormSubmit} />
      )}
    </main>
  );
};

export default PropsDrillingContainer;
