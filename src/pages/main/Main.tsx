import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "constants/index";
import * as S from "./Main.styled";

const Main = () => {
  return (
    <S.Main>
      <h1>Hook form 예제</h1>
      <S.LinkWrapper>
        <h2>1. State 예제 - Login </h2>
        <Link to={`${PATH.EXAMPLE1}${PATH.LOGIN}`}>State를 활용한 Login</Link>
        <Link to={`${PATH.EXAMPLE1}${PATH.HOOK_FORM_LOGIN}`}>
          react hook form을 활용한 Login
        </Link>
      </S.LinkWrapper>
      <S.LinkWrapper>
        <h2>2. Props drilling 예제 - 회원 정보 </h2>
        <Link to={`${PATH.EXAMPLE2}${PATH.DRILLING}`}>Props drilling</Link>
        <Link to={`${PATH.EXAMPLE2}${PATH.HOOK_FORM_CONTEXT}`}>
          useFormContext
        </Link>
      </S.LinkWrapper>
    </S.Main>
  );
};

export default Main;
