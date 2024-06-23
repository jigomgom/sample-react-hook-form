import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "constants/index";
import * as S from "./Root.styled";

const Root = () => {
  return (
    <S.Main>
      <h1>Hook form 예제</h1>
      <S.LinkWrapper>
        <h2>1. 로그인</h2>
        <Link to={`${PATH.EXAMPLE}/${PATH.LOGIN}`}>State를 활용한 Login</Link>
        <Link to={`${PATH.EXAMPLE}/${PATH.HOOK_FORM_LOGIN}`}>
          react hook form을 활용한 Login
        </Link>
      </S.LinkWrapper>
    </S.Main>
  );
};

export default Root;
