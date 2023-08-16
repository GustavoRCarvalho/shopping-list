import { styled } from "styled-components"
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { MenuItem } from "./MenuItem"
import { SubMenu } from "./SubMenu"
import { useState } from "react"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"
import { SubMenuItem } from "./SubMenuItem"

const staticData = {
  myLists: [{ title: "lista 1" }, { title: "lista 2" }, { title: "lista 3" }],
  sharedLists: [
    { title: "lista 4" },
    { title: "lista 5" },
    { title: "lista 6" },
    { title: "lista 7" },
    { title: "lista 8" },
    { title: "lista 9" },
    { title: "lista 10" },
    { title: "lista 11" },
    { title: "lista 12" },
    { title: "lista 13" },
  ],
}

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
        <MenuItem
          onClick={() => {
            subMenu === "compartilhadas"
              ? setSubMenu("")
              : setSubMenu("compartilhadas")
          }}
          isSelected={subMenu === "compartilhadas"}
        >
          <BsFillShareFill className="iconMenu" />
        </MenuItem>
        {[0, 1, 2, 3].map((a) => {
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
        {staticData.myLists.map((list) => {
          return (
            <NoStyleLinkRouter key={list.title} to={`/list/${list.title}`}>
              <SubMenuItem isSelected={path === list.title}>
                {list.title}
              </SubMenuItem>
            </NoStyleLinkRouter>
          )
        })}
      </SubMenu>
      <SubMenu isActive={subMenu === "compartilhadas"} role="list">
        {staticData.sharedLists.map((list) => {
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
