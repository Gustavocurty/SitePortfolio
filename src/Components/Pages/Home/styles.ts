import { styled, keyframes } from "styled-components"
import ImageBackground from "../../assets/Image.jpg"

export const Container = styled.div `

`;

export const Background = styled.div `
    width: 100vw;
    height: 93vh;
    background-image: url(${ImageBackground});
    background-position: center;
    background-size: cover;
`;

export const Textos = styled.div`
    margin-left: 100px;
    padding-top: 120px;
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

const glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

export const DivButton = styled.div `
    display: flex;
    margin-left: 100px;
`

export const BotaoSobre = styled.button `
    width: 220px;
    height: 50px;
    border: none;
    margin-right: 20px;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;

    &:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: ${glowing} 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    &:active {
        color: #000;
    }

    &:active:after {
        background: transparent;
    }

    &:hover:before {
        opacity: 1;
    }

    &:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #111;
        left: 0;
        top: 0;
        border-radius: 10px;
    }
`
