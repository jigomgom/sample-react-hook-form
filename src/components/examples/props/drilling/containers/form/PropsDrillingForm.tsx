import React from "react";
import type { UseFormRegister } from "react-hook-form";

import { BackLink } from "components";
import { PATH } from "constants/index";
import type { UserType } from "types";

interface PropsDrillingFormProps {
  register: UseFormRegister<UserType>;
  onFormSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

const PropsDrillingForm = ({
  register,
  onFormSubmit,
}: PropsDrillingFormProps) => {
  return (
    <div>
      Field
      {["name", "age", "location"].map((field) => (
        <p key={field}>
          <span>{field} : </span>
          <input
            {...register(field as keyof UserType)}
            type={field === "age" ? "number" : "text"}
          />
        </p>
      ))}
      <button type="button" onClick={onFormSubmit}>
        Update
      </button>
      <BackLink href={`${PATH.EXAMPLE2}${PATH.DRILLING}${PATH.SECTION}`} />
    </div>
  );
};

export default PropsDrillingForm;
