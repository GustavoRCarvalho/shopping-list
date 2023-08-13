import { BrowserRouter } from "react-router-dom"
import Content from "./router/Content"
import { TabBar } from "./components/pages/TabBar"

export const App = () => {
  return (
    <BrowserRouter>
      <Content />
      <TabBar />
    </BrowserRouter>
  )
}
