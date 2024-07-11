import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  margin-top: 3.125rem;
  padding: 1.875rem;
  border-radius: 0.625rem;
  width: 90vw;
  height: 30vh;
  max-width: 70rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
