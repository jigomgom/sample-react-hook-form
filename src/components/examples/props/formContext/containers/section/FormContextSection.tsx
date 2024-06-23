import React, { useState } from "react";
import {
  useFormContext,
  type UseFormRegister,
  type UseFormWatch,
} from "react-hook-form";

import type { UserType } from "types";
import { FormContextForm } from "../form";
import * as S from "../FormContextContainer.styled";

const FormContextSection = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditChange = (): void => setIsEdit(!isEdit);

  const { watch } = useFormContext<UserType>();

  return (
    <S.Section>
      {!isEdit ? (
        <>
          Section
          <S.EditButton type="button" onClick={handleEditChange}>
            Edit
          </S.EditButton>
          <p>{`name : ${watch("name")}`}</p>
          <p>{`age : ${watch("age")}`}</p>
          <p>{`location : ${watch("location")}`}</p>
        </>
      ) : (
        <FormContextForm />
      )}
    </S.Section>
  );
};

export default FormContextSection;
