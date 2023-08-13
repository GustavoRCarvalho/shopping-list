import { motion } from "framer-motion"
import { styled } from "styled-components"

export const MenuItem = ({ onClick = () => {}, isSelected, children }) => {
  return (
    <Item
      onClick={onClick}
      layout
      animate={{
        color: isSelected ? "var(--color-orange)" : "var(--menu-color)",
        backgroundColor: isSelected ? "#fff" : "#0000",
      }}
    >
      {children}
    </Item>
  )
}

const Item = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--menu-color);
  padding: 0.2em;
  border: 1px solid #fff;
  border-radius: 0.2em;

  cursor: pointer;
`
