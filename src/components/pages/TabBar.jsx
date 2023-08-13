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
  max-width: 600px;
  width: 95vw;

  padding-block: 1em;
`
const ContainerHeader = styled.header`
  background-color: var(--bg-color-default);
  position: sticky;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  bottom: 0;

  z-index: 2;
`
