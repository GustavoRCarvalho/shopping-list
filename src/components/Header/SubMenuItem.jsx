import { styled } from "styled-components"

export const SubMenuItem = ({ isSelected, children }) => {
  return (
    <Item
      layout="position"
      animate={{
        color: isSelected ? "var(--menu-color-active)" : "var(--menu-color)",
        backgroundColor: isSelected ? "#fff" : "#0000",
      }}
    >
      <ItemSpan>{children}</ItemSpan>
    </Item>
  )
}

const ItemSpan = styled.span`
  margin-top: 0.3em;
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--menu-color);
  padding: 0.2em;
  margin-bottom: 0.5em;
  border: 1px solid #fff;
  border-radius: 0.2em;

  cursor: pointer;
`
