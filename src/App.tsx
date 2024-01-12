
import { BrowserRouter } from "react-router-dom"
import MainRoutes from "./Components/Pages/routes"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
