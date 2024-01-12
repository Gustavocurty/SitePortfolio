import { Routes, Route} from "react-router-dom"
import Home from "./Components/Pages/Home/content"
import PageOne from "./Components/Pages/PageOne/content"

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Jogos" element={<PageOne />} />
        </Routes>
    )
}

export default MainRoutes