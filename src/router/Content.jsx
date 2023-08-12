import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { NotFound } from "../components/pages/NotFound"
import { ShoppingList } from "../components/pages/ShoppingList"
import { ShoppingList2 } from "../components/pages/ShoppingList2"

export default function Content() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<div>HOME</div>}></Route>
        <Route path="/lista" element={<ShoppingList />}></Route>
        <Route path="/lista2" element={<ShoppingList2 />}></Route>
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
    width: 100%;
  }
`
