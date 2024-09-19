import React, { useState, useEffect } from "react";
import { Container, Rota, DivRotas, Titulo, IconContent, SocialIcon, IconCircle, Link } from "./styles";

import InstagramIcon from '../../../assets/instagram.png';
import LinkedinIcon from '../../../assets/linkedin.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Troca de cor após 50px de rolagem
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container isScrolled={isScrolled}>
      <Titulo onClick={() => alert('Curtyu né!!')} isScrolled={isScrolled}>Curtyu</Titulo>
      
      <DivRotas>
        <Rota href="/" >Home</Rota>
        <Rota href="/Sobre">Skills</Rota>
        <Rota href="/Portfolio">Portfólio</Rota>
        <Rota href="/jogos">Jogos</Rota>
      </DivRotas>

      <IconContent>
        <IconCircle>
          <Link href="https://www.linkedin.com/in/gustavo-curty-b394b7255/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
            <SocialIcon src={LinkedinIcon} alt="Linkedin" />
          </Link>
        </IconCircle>
        <IconCircle>
          <Link href="https://www.instagram.com/gust_curty/" target="_blank" rel="noopener noreferrer">
            <SocialIcon src={InstagramIcon} alt="Instagram" />
          </Link>
        </IconCircle>
      </IconContent>
    </Container>
  );
};

export default Header;
