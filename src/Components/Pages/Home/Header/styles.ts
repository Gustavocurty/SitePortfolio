import { styled } from "styled-components"

export const Container = styled.div `
    width: 100vw;
    height: 13vh;
    font-size: large;
    background-color: #008B8B;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Rota = styled.a `
    padding: 7px;
    text-decoration: none;
    color: white;
    font-size: 30px;
    margin-right: 25px;
    &:hover {
        background-color: rgba( 240, 248, 255, 0.3 ) ;
        color: black;
        border-radius: 15px;
    }
`;

export const Foto = styled.img`
    height: 80%;
    margin-left: 35px;
`;

export const DivRotas = styled.div`
    margin-right: 15px;
`;