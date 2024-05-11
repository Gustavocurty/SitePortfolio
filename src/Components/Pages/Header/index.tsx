import React from "react";
import { Container, Rota, DivRotas, ContentLogo, Titulo } from "./styles";

const Header: React.FC = () => {
    return(
        <Container>
            <ContentLogo>
                <Titulo onClick={()=> alert('Clicou!')}> Redes sociais logo</Titulo>
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