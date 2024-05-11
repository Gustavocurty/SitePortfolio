import { styled } from "styled-components"

export const Container = styled.div `
    width: 100vw;
    height: 7vh;
    font-size: large;
    background: linear-gradient(30deg, rgba(216, 223, 230) 20%, rgba(5, 3, 5) 57%);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContentLogo = styled.div`

`

export const Titulo = styled.p`
    font-size: 20px;
    margin-left: 15px;
`

export const Rota = styled.a `
    padding: 7px;
    text-decoration: none;
    color: white;
    font-size: 30px;
    margin-right: 25px;
    &:hover {
        color: #808080;
    }
`;

export const DivRotas = styled.div`
    margin-right: 15px;
`;