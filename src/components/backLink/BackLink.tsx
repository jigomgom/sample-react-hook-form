import React from "react";

import * as S from "./BackLink.styled";

interface BackLinkProps {
  href: string;
}

const BackLink = ({ href }: BackLinkProps) => {
  return <S.BackLink href={href}>Go to previous page</S.BackLink>;
};

export default BackLink;
