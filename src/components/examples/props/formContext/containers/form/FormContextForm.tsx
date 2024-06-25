import React from "react";
import { useFormContext } from "react-hook-form";

import { BackLink } from "components";
import { PATH } from "constants/index";
import type { UserType } from "types";

const FormContextForm = () => {
  const { register, handleSubmit } = useFormContext<UserType>();

  const handleUpdateClick = handleSubmit((data): void =>
    console.log("Updated user", data)
  );

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
      <button type="button" onClick={handleUpdateClick}>
        Update
      </button>
      <BackLink
        href={`${PATH.EXAMPLE2}${PATH.HOOK_FORM_CONTEXT}${PATH.SECTION}`}
      />
    </div>
  );
};

export default FormContextForm;
