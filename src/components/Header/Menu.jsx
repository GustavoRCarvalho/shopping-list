import { styled } from "styled-components"
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { MenuItem } from "./MenuItem"
import { SubMenu } from "./SubMenu"
import { useState } from "react"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { SubMenuItem } from "./SubMenuItem"

const arrayLists = [
  { title: "lista 1" },
  { title: "lista 2" },
  { title: "lista 3" },
]

export const Menu = () => {
  const [subMenu, setSubMenu] = useState("")
  const { pathname } = useLocation()
  const path = decodeURI(pathname.split("/")[2])

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
        {[0, 1, 2, 3, 4].map((a) => {
          return (
            <MenuItem
              key={a}
              onClick={() => {
                subMenu === "user" ? setSubMenu("") : setSubMenu("user")
              }}
              isSelected={subMenu === "user"}
            >
              <AiOutlineUser className="iconMenu" />
            </MenuItem>
          )
        })}
      </MenuList>
      <SubMenu isActive={subMenu === "user"} role="list">
        USER
      </SubMenu>
      <SubMenu isActive={subMenu === "listas"} role="list">
        {arrayLists.map((list) => {
          return (
            <NoStyleLinkRouter key={list.title} to={`/list/${list.title}`}>
              <SubMenuItem isSelected={path === list.title}>
                {list.title}
              </SubMenuItem>
            </NoStyleLinkRouter>
          )
        })}
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
