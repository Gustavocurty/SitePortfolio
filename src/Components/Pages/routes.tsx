import { Routes, Route} from "react-router-dom"
import Header from "./Header/index"
import Home from "./Home/main"
import PageOne from "./PageOne"
function MainRoutes() {
    return (

        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Jogos" element={<PageOne />} />
            </Routes>    
        </>
    )
}

export default MainRoutes