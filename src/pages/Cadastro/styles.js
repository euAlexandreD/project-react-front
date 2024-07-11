import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #181f36;
  height: 100vh;
`;

export const ContainerTitle = styled.div`
  margin-top: 1.875rem;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.875rem;
`;

export const DivForms = styled.div`
  margin-top: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.625rem;

  input {
    padding: 0.625rem;
    width: 12.5rem;
    border-radius: 0.3125rem;
    border: none;
    margin-left: 10px;
  }
`;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    margin-left: 0.7rem;
    color: #fff;
  }
  span {
    color: red;
  }
`;

export const FormEmail = styled.div`
  margin-bottom: 0.625rem;
  margin-top: 0.625rem;

  input {
    padding: 0.625rem;
    width: 25.625rem;
    border-radius: 0.3125rem;
    border: none;
    margin-left: 10px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ButtonUsuarios = styled.button`
  padding: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  margin-top: 0.625rem;
`;
