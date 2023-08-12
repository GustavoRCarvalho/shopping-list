import { styled } from "styled-components"

export const ItemInput = styled.input`
  background-color: #0000;
  outline: none;
  border: none;
  user-select: none;
  font-family: var(--li-font-family);
  font-size: var(--li-font-size);

  text-decoration: ${(props) => props.$isChecked && "line-through"};

  width: 100%;

  margin-top: 0.4em;
`
