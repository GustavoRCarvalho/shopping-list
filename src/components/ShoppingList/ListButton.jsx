import { styled } from "styled-components"

export const ListButton = styled.button`
  background-color: #0000;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  padding: 0.2em;
  border-radius: 0.2em;
  padding-inline: 0.2em;

  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:active {
    background-color: ${(props) => !props.disabled && props.$clickColor};
  }
`
