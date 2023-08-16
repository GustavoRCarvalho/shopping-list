import { styled } from "styled-components"
import { Menu } from "../Header/Menu"

export const TabBar = () => {
  return (
    <ContainerHeader>
      <ContainerLimiteMenu>
        <Menu />
      </ContainerLimiteMenu>
    </ContainerHeader>
  )
}

const ContainerLimiteMenu = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 1em);

  padding-block: 0.5em;
  @media screen and (min-width: 768px) {
    width: 95%;
    padding-block: 0.5em;
  }
`

const ContainerHeader = styled.header`
  background-color: var(--bg-menu-color);
  font-family: var(--li-font-family);
  position: sticky;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  top: 100%;

  border-top-right-radius: 0.5em;
  border-top-left-radius: 0.5em;

  z-index: 2;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    border-radius: 0.25em;
    bottom: 0.5em;
  }
`
