import React, { useState } from "react";

import { BackLink } from "components";
import { PATH } from "constants/index";
import type { UserType } from "types";

interface PropsDrillingFormProps {
  onFormSubmit: (updatedUser: UserType) => void;
}

const PropsDrillingForm = ({ onFormSubmit }: PropsDrillingFormProps) => {
  const [user, setUser] = useState<UserType>({
    name: "",
    age: 0,
    location: "",
  });

  const handleUpdateUserInformation = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "age" ? +value : value,
    }));
  };

  const handleUpdateSubmit = (): void => onFormSubmit(user);

  return (
    <div>
      Field
      {["name", "age", "location"].map((field) => (
        <p key={field}>
          <span>{field} : </span>
          <input
            name={field}
            onChange={handleUpdateUserInformation}
            value={user[field as keyof UserType]}
            type={field === "age" ? "number" : "text"}
          />
        </p>
      ))}
      <button type="button" onClick={handleUpdateSubmit}>
        Update
      </button>
      <BackLink href={`${PATH.EXAMPLE2}${PATH.DRILLING}${PATH.SECTION}`} />
    </div>
  );
};

export default PropsDrillingForm;
