import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { NotFound } from "../components/pages/NotFound"
import { ShoppingList } from "../components/pages/ShoppingList"

export default function Content() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<ShoppingList />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  background-color: #242424;
  max-width: 1280px;
  width: 95vw;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding-inline: 2.5vw;
  }
`
