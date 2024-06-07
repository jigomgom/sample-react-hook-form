import React, { useState } from "react";

import * as S from "./Login.styled";

const Login = () => {
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const validate = (value: string, regEx: RegExp) => regEx.test(value);

  const emailValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    setEmailError(
      validate(e.target.value, emailRegEx) ? null : "이메일 형식을 맞춰주세요"
    );
  };

  const passwordValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      validate(value, passwordRegEx) ? null : "패스워드 형식을 맞춰주세요"
    );

    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 불일치합니다.");
    } else {
      setConfirmPasswordError(null);
    }
  };

  const confirmPasswordValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(
      validate(value, passwordRegEx) ? null : "패스워드 형식을 맞춰주세요"
    );

    if (password && value !== password) {
      setConfirmPasswordError("비밀번호가 불일치합니다.");
    } else {
      setConfirmPasswordError(null);
    }
  };

  return (
    <S.Section>
      <S.LoginForm>
        <S.Ptag>로그인</S.Ptag>
        <S.FormContent>
          <S.Ptag>Email : </S.Ptag>
          <S.Input
            type="email"
            placeholder="Enter the email"
            hasError={!!emailError}
            onChange={emailValidate}
          />
          {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
        </S.FormContent>
        <S.FormContent>
          <S.Ptag>Password : </S.Ptag>
          <S.Input
            type="password"
            placeholder="Enter the password"
            hasError={!!passwordError}
            value={password || ""}
            onChange={passwordValidate}
          />
          {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
        </S.FormContent>
        <S.FormContent>
          <S.Ptag>Confirm password : </S.Ptag>
          <S.Input
            type="password"
            placeholder="Enter the confirm password"
            hasError={!!confirmPasswordError}
            value={confirmPassword || ""}
            onChange={confirmPasswordValidate}
          />
          {confirmPasswordError && (
            <S.ErrorMessage>{confirmPasswordError}</S.ErrorMessage>
          )}
        </S.FormContent>
      </S.LoginForm>
    </S.Section>
  );
};

export default Login;
