import styled from "@emotion/styled";

export const Section = styled.section`
  width: 800px;
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
  height: 10px;
  font-size: 1.4rem;
  color: black;
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
  font-size: 1.4rem;
  border: 1px solid black;
`;
