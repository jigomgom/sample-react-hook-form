import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Section = styled.section`
  width: 600px;
  height: 500px;
  margin: 20px auto;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  padding: 15px;

  border: 1px solid gray;
`;

export const Ptag = styled.p`
  font-size: 1.4rem;
  color: black;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
`;

export const Input = styled.input<{ hasError: boolean }>`
  ${({ hasError }) => css`
    padding: 5px;
    font-size: 1.4rem;
    border: 1px solid ${hasError ? "red" : "black"};
  `}
`;

export const ErrorMessage = styled.p`
  color: red;
`;
