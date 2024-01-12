import React from "react";
import { Container, Rota, Foto, DivRotas } from "./styles";
import Logo from "../../../assets/Images/MinhaLogo.png"
import Jogos from "../../PageOne/content";

const Header: React.FC = () => {
    return(
        <Container>
            <Foto src={Logo} alt="Eu" onClick={() => prompt("Ta clicando aq pq Rapa?")}/>
            <DivRotas>
                <Rota href="/">Home</Rota>
                <Rota href="/jogos">Jogos</Rota>
            </DivRotas>
        </Container>
    )
}

export default Header