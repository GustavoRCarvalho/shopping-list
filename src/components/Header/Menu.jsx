import { styled } from "styled-components"
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { MenuItem } from "./MenuItem"
import { SubMenu } from "./SubMenu"
import { useState } from "react"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { SubMenuItem } from "./SubMenuItem"

export const Menu = () => {
  const [subMenu, setSubMenu] = useState("")
  const { pathname } = useLocation()
  const path = pathname.split("/")[1]

  return (
    <MenuContainer layout>
      <MenuList role="list">
        <MenuItem
          onClick={() => {
            subMenu === "listas" ? setSubMenu("") : setSubMenu("listas")
          }}
          isSelected={subMenu === "listas"}
        >
          <AiOutlineUnorderedList className="iconMenu" />
        </MenuItem>
        <NoStyleLinkRouter to={`/user`}>
          <MenuItem isSelected={path === "user"}>
            <AiOutlineUser className="iconMenu" />
          </MenuItem>
        </NoStyleLinkRouter>
      </MenuList>
      <SubMenu isActive={subMenu === "listas"} role="list">
        <NoStyleLinkRouter to={`/lista`}>
          <SubMenuItem isSelected={path === "lista"}>LISTA</SubMenuItem>
        </NoStyleLinkRouter>
        <NoStyleLinkRouter to={`/lista2`}>
          <SubMenuItem isSelected={path === "lista2"}>LISTA2</SubMenuItem>
        </NoStyleLinkRouter>
        <NoStyleLinkRouter to={`/lista3`}>
          <SubMenuItem isSelected={path === "lista3"}>LISTA3</SubMenuItem>
        </NoStyleLinkRouter>
      </SubMenu>
    </MenuContainer>
  )
}

const MenuList = styled.ul`
  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MenuContainer = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-direction: column;
`
