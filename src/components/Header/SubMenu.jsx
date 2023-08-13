import { motion } from "framer-motion"
import { styled } from "styled-components"

export const SubMenu = ({ isActive, children }) => {
  return (
    <SubMenuContainer
      layout
      animate={{
        height: isActive ? "50vh" : "0",
        marginTop: isActive ? "0.5em" : "0",
      }}
    >
      {children}
    </SubMenuContainer>
  )
}

const SubMenuContainer = styled(motion.ul)`
  width: 100%;

  padding: 0;
  margin: 0;
  overflow: auto;
`
