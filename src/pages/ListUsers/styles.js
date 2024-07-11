import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #181f36;
  height: 100vh;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.875rem;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const User = styled.div`
  align-items: center;
  gap: 20px;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  margin-bottom: 50px;

  @media (max-width: 390px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #252d48;
  gap: 20px;
  padding: 10px;
  border-radius: 20px;
  width: 400px;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    color: #fff;
    font-size: 12px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const DivInformations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrashIcon = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
