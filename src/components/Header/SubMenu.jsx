import { motion } from "framer-motion"
import { styled } from "styled-components"

export const SubMenu = ({ isActive, children }) => {
  return (
    <SubMenuContainer
      layout
      animate={{
        marginTop: isActive ? "0.5em" : "0",
        height: isActive ? "auto" : "0",
      }}
      transition={{ duration: 0.2 }}
      $isActive={isActive}
    >
      {children}
    </SubMenuContainer>
  )
}

const SubMenuContainer = styled(motion.ul)`
  width: 100%;

  padding: 0;
  margin: 0;
  max-height: 50vh;
  overflow: auto;
`
