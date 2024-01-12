import { styled } from "styled-components"
import ImageBackground from "../../assets/Image.jpg"

export const Container = styled.div `
    font-size: large;
    
`;

export const Background = styled.div `
    width: 100vw;
    height: 90vh;
    display: flex;
    background-image: url(${ImageBackground});
    background-position: center;
    background-size: cover;
`;

export const Textos = styled.div`
    padding: 10% 7%;
    
`

export const NomeMenor = styled.p`
    font-size: 80px;
    width: min-content;
`

export const NomeMaior = styled.p`
    font-size: 180px;
    font-weight: bolder;
    width: min-content;
    margin: -70px -10px;
`

export const Cargo = styled.p`
    font-size: 38px;
    margin: 18px 2px;
`

export const Content = styled.div`
    width: 900px;
    height: 655px;
    display: flex;
    align-items: center;
    justify-content: center;
`

