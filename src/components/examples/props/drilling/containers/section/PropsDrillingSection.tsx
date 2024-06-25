import React, { useState } from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";

import type { UserType } from "types";
import { PropsDrillingForm } from "../form";
import * as S from "../PropsDrillingContainer.styled";

interface PropsDrillingSectionProps {
  watch: UseFormWatch<UserType>;
  register: UseFormRegister<UserType>;
  onFormSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

const PropsDrillingSection = ({
  watch,
  register,
  onFormSubmit,
}: PropsDrillingSectionProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditChange = (): void => setIsEdit(!isEdit);

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
        <PropsDrillingForm register={register} onFormSubmit={onFormSubmit} />
      )}
    </S.Section>
  );
};

export default PropsDrillingSection;
