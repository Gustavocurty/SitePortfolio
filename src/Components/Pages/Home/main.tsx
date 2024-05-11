import React from "react";

import { Container, Background, Textos, NomeMenor, NomeMaior, Cargo, BotaoSobre, DivButton } from "./styles";
import '../PageOne/index'
import { redirect } from "react-router-dom";

const Home: React.FC = () => {
    return(
        <Container>
            <Background>
                <Textos>
                    <NomeMenor>Gustavo</NomeMenor>
                    <NomeMaior>CURTY</NomeMaior> 
                    <Cargo>Desenvolvedor Web</Cargo>                  
                </Textos>
                <DivButton>
                    <BotaoSobre onClick={() => alert()}>Sobre Mim</BotaoSobre>
                    <BotaoSobre onClick={() => alert()}>Meu portfólio</BotaoSobre>

                </DivButton>
            </Background>   
     
        </Container>
    )
}

export default Home