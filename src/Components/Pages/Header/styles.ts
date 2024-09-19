import styled from "styled-components";

export const Container = styled.div<{ isScrolled: boolean }>`
  width: 100vw;
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent')}; /* Transição de transparente para uma cor escura */
  transition: background 0.3s ease; /* Suaviza a transição do background */
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const Titulo = styled.p<{ isScrolled: boolean }>`
  font-size: 30px;
  margin-left: 15px;
  color: ${({ isScrolled }) => (isScrolled ? 'white' : 'black')};
`;

export const Rota = styled.a`
  padding: 4px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: lighter;
  margin-right: 25px;

  &:hover {
    opacity: 0.3;
  }
`;

export const DivRotas = styled.div`
  margin-right: 15px;
`;

export const IconContent = styled.div`
  display: flex;
`;

export const SocialIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const IconCircle = styled.div`
  width: 28px;
  height: 28px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const Link = styled.a``;
