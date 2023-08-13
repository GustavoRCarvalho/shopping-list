import { styled } from "styled-components"

export const ListButton = styled.button`
  background-color: #0000;
  transition: background-color 500ms;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  padding: 0.2em;
  border-radius: 0.2em;
  padding-inline: 0.2em;

  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${(props) => !props.disabled && props.$clickColor};
  }

  &:active {
    background-color: ${(props) => !props.disabled && props.$clickColor};
  }
`
