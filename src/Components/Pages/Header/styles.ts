import { styled } from "styled-components"

export const Container = styled.div `
    width: 100vw;
    height: 10vh;
    font-size: large;
    background: linear-gradient(30deg, rgba(216, 223, 230) 20%, rgba(5, 3, 5) 57%);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContentLogo = styled.div`
    display: flex;
    align-items: center;
`

export const Titulo = styled.p`
    font-size: 20px;
`

export const Rota = styled.a `
    padding: 7px;
    text-decoration: none;
    color: white;
    font-size: 30px;
    margin-right: 25px;
    &:hover {
        background-color: rgba( 240, 248, 255, 0.7 ) ;
        color: black;
        border-radius: 15px;
    }
`;

export const Foto = styled.img`
    height: 65px;
    margin: 0 10px;
`;

export const DivRotas = styled.div`
    margin-right: 15px;
`;