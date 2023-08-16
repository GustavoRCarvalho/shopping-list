import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { NotFound } from "../components/pages/NotFound"
import { ShoppingList } from "../components/pages/ShoppingList"

export default function Content() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<div>HOME</div>}></Route>
        <Route path="/list/:lista" element={<ShoppingList />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  background-color: var(--bg-color-default);
  font-family: var(--li-font-family);
  max-width: 1280px;
  width: 95vw;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
