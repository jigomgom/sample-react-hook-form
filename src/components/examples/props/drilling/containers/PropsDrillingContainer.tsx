import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

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

  console.log("User type ", user);

  return <div>PropsDrillingContainer</div>;
};

export default PropsDrillingContainer;
