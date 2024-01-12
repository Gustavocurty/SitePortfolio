import React from "react";
import { Container, Rota, Foto, DivRotas, ContentLogo, Titulo } from "./styles";
import Logo from "../../assets/minhalogo.svg"

const Header: React.FC = () => {
    return(
        <Container>
            <ContentLogo>
                <Foto src={Logo} alt="Eu" onClick={() => prompt("Ta clicando aq pq Rapa?")} />
                <Titulo>Curty Produções</Titulo>
            </ContentLogo>
            <DivRotas>
                <Rota href="/">Home</Rota>
                <Rota href="/Sobre">Sobre</Rota>
                <Rota href="/Portfolio">Portfólio</Rota>
                <Rota href="/jogos">Jogos</Rota>
            </DivRotas>
        </Container>
    )
}

export default Header