import { styled } from "styled-components"
import { NoStyleLinkRouter } from "../common/NoStyleLinkRouter"

export const Menu = () => {
  return (
    <MenuList>
      <NoStyleLinkRouter to={"/lista"}>
        <MenuItem>LISTA</MenuItem>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to={"/lista2"}>
        <MenuItem>LISTA2</MenuItem>
      </NoStyleLinkRouter>
    </MenuList>
  )
}

const MenuList = styled.ul`
  list-style: none;

  width: 100%;

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;
`
const MenuItem = styled.li``
