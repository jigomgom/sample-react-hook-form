import React from "react";

import * as S from "./Login.styled";

const Login = () => {
  return (
    <S.Section>
      <S.LoginForm>
        <S.Ptag>로그인</S.Ptag>
        <S.FormContent>
          <S.Ptag>Email : </S.Ptag>
          <S.Input type="email" placeholder="Enter the email" />
        </S.FormContent>
        <S.FormContent>
          <S.Ptag>Password : </S.Ptag>
          <S.Input type="password" placeholder="Enter the password" />
        </S.FormContent>
        <S.FormContent>
          <S.Ptag>Confirm password : </S.Ptag>
          <S.Input type="password" placeholder="Enter the confirm password" />
        </S.FormContent>
      </S.LoginForm>
    </S.Section>
  );
};

export default Login;
