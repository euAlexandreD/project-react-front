import styled from "styled-components";

export const Button = styled.button`
  padding: 0.625rem;
  border-radius: 1.25rem;
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(to right, #fe7e5d, #7f3841)"
      : "transparent"};
  color: #fff;
  margin-top: 0.625rem;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
    background: ${(props) => (props.theme === "primary" ? "#7f3841" : "grey")};
  }
`;
