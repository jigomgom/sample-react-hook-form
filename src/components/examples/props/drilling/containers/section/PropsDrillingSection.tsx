import React, { useState } from "react";

import type { UserType } from "types";
import { PropsDrillingForm } from "../form";
import * as S from "../PropsDrillingContainer.styled";

interface PropsDrillingSectionProps {
  user: UserType;
  onFormSubmit: (updatedUser: UserType) => void;
}

const PropsDrillingSection = ({
  user,
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
          <p>{`name : ${user.name}`}</p>
          <p>{`age : ${user.age}`}</p>
          <p>{`location : ${user.location}`}</p>
        </>
      ) : (
        <PropsDrillingForm onFormSubmit={onFormSubmit} />
      )}
    </S.Section>
  );
};

export default PropsDrillingSection;
