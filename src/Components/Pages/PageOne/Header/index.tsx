import React from "react";
import { Link } from "react-router-dom";
import { Container, Texto, Rota } from "./styles";

const Header: React.FC = () => {
    return(
        <Container>
            <Texto> Área de Jogos...</Texto>
            <Rota href="/">Home</Rota>
            <Rota href="/jogos">Jogos</Rota>
        </Container>
    )
}

export default Header