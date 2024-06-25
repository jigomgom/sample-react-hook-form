import React from "react";
import { useForm } from "react-hook-form";

import { BackLink } from "components";
import { PATH } from "constants/index";
import * as S from "../Login.styled";

interface HooFormLoginType {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

const LOGIN_INIT_FORM = {
  email: null,
  password: null,
  confirmPassword: null,
};

const HookFormLogin = () => {
  const {
    formState: { errors },
    register,
    watch,
  } = useForm<HooFormLoginType>({
    defaultValues: LOGIN_INIT_FORM,
    mode: "onChange",
  });

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  return (
    <S.Section>
      <S.LoginForm>
        <S.Ptag>로그인</S.Ptag>
        <S.FormContent>
          <S.Ptag>Email : </S.Ptag>
          <S.Input
            type="email"
            placeholder="Enter the email"
            hasError={!!errors.email}
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: emailRegEx,
                message: "이메일 형식이 틀렸습니다.",
              },
            })}
          />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.FormContent>
        <S.FormContent>
          <S.Ptag>Password : </S.Ptag>
          <S.Input
            type="password"
            placeholder="Enter the password"
            hasError={!!errors.password}
            {...register("password", {
              // react-hook-form에서 제공하는 내장된 유효성 검사 기능
              required: "패스워드는 필수입니다.",
              // react-hook-form에서 제공하는 내장된 유효성 검사 기능
              minLength: { value: 8, message: "최소 자리수는 8자리입니다." },
              // custom 한 유효성 검사 기능
              pattern: {
                value: passwordRegEx,
                message: "패스워드 형식이 틀렸습니다.",
              },
            })}
          />
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </S.FormContent>
        <S.FormContent>
          <S.Ptag>Confirm password : </S.Ptag>
          <S.Input
            type="password"
            placeholder="Enter the confirm password"
            hasError={!!errors.confirmPassword}
            {...register("confirmPassword", {
              required: "확인 패스워드는 필수 입니다.",
              pattern: {
                value: passwordRegEx,
                message: "패스워드 형식이 틀렸습니다.",
              },
              // validate를 활용한 유효성 검사 기능
              validate: {
                notMatchPassword: (confirmPassword) =>
                  confirmPassword === watch("password") ||
                  "패스워드가 일치하지 않습니다.",
              },
            })}
          />
          {errors.confirmPassword && (
            <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>
          )}
        </S.FormContent>
      </S.LoginForm>
      <BackLink href={PATH.ROOT} />
    </S.Section>
  );
};

export default HookFormLogin;
