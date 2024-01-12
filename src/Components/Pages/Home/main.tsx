import React from "react";
import Foto from "../../assets/FotoPerfil.jpg"
import { Container, Background, Textos, NomeMenor, NomeMaior, Cargo, Content } from "./styles";

const Header: React.FC = () => {
    return(
        <Container>
            <Background>
                <Textos>
                    <NomeMenor>Gustavo</NomeMenor>
                    <NomeMaior>Curty</NomeMaior> 
                    <Cargo>Desenvolvedor Web</Cargo>                  
                </Textos>
                <Content>
                    
                </Content>
                
            </Background>
            
        </Container>
    )
}

export default Header