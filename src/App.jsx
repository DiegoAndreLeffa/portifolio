import React, { useState } from "react";
import styled, {
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

import pixelcraft from "./assets/pixelcraft.png";
import glowbottle from "./assets/glowbottle.png";
import cheffacil1 from "./assets/Cheffacil-escuro.png";
import cheffacil2 from "./assets/Cheffacil-claro.png";

const lightTheme = {
  background: "#f5f5f5",
  cardBackground: "#ffffffcc",
  text: "#0d1117",
  primary: "#1f6feb",
};

const darkTheme = {
  background: "linear-gradient(145deg, #0d1117, #161b22)",
  cardBackground: "rgba(33, 38, 45, 0.85)",
  text: "#fff",
  primary: "#58a6ff",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "Poppins", sans-serif;
    transition: all 0.3s;
  }
`;

const Container = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: transparent;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  a {
    margin-left: 2rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Hero = styled.section`
  padding: 6rem 4rem 4rem;
  text-align: center;
`;

const neonText = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px #58a6ff, 0 0 20px #58a6ff, 0 0 30px #1f6feb;
  }
  50% {
    text-shadow: 0 0 20px #1f6feb, 0 0 40px #58a6ff, 0 0 60px #1f6feb;
  }
`;

const Name = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${neonText} 3s infinite;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const Bio = styled.p`
  max-width: 800px;
  margin: 2rem auto;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => (theme.text === "#fff" ? "#0d1117" : "#fff")};
  font-weight: bold;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px ${({ theme }) => theme.primary};
  }
`;

const Section = styled.section`
  padding: 4rem;
`;

const SectionContact = styled.section`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const SkillsList = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }
`;

const Projects = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #30363d;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px ${({ theme }) => theme.primary};
  }
  a {
    display: inline-block;
    margin-top: 1rem;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
  color: #8b949e;
`;

const ContactLinks = styled.div`
  margin-top: 1rem;
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #1f6feb;
    }
  }
`;

const ThemeToggle = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  height: 36px;
  margin-left: 2rem;
`;

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo>Diego Leffa</Logo>
          <Nav>
            <a href="#sobre">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
            <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <FaToggleOff style={{ height: "36px" }} />
              ) : (
                <FaToggleOn style={{ height: "36px" }} />
              )}
            </ThemeToggle>
          </Nav>
        </Header>

        <Hero>
          <Name>Diego André Leffa Antunes do Canto</Name>
          <Title>Programador Full Stack</Title>
          <Bio>
            Desenvolvedor Front End formado em Desenvolvimento Web Full Stack
            pela Kenzie Academy Brasil e com graduação em Análise e
            Desenvolvimento de Sistemas pela CESUSC em andamento. Experiência em
            desenvolvimento de software, especializado em frontend e backend,
            com habilidades avançadas em React com TypeScript para a construção
            de interfaces interativas e responsivas. Experiência em
            desenvolvimento de APIs RESTFul utilizando Express e TypeORM para a
            gestão de dados com PostegreSQL. Capacidade de trabalhar em projetos
            complexos e entregar soluções eficientes. Inglês básico.
          </Bio>
          <CTAButton href="#projetos">Veja meus projetos</CTAButton>
        </Hero>

        <Section id="skills">
          <SectionTitle>Habilidades</SectionTitle>
          <SkillsList>
            <Skill>
              <FaReact /> React / styled-components
            </Skill>
            <Skill>
              <FaNodeJs /> Express
            </Skill>
            <Skill>
              <FaDatabase /> TypeORM
            </Skill>
            <Skill>
              <FaDatabase /> PostgreSQL
            </Skill>
          </SkillsList>
        </Section>

        <Section id="projetos">
          <SectionTitle>Projetos</SectionTitle>
          <Projects>
            <ProjectCard>
              <img
                src={pixelcraft}
                alt="PixelCraft"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                }}
              />
              <h3>PixelCraft</h3>
              <p>
                Empresa especializada em criação de landing pages modernas e
                responsivas.
              </p>
              <a
                href="https://pixelcraft-rouge.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto
              </a>
            </ProjectCard>

            <ProjectCard>
              <img
                src={glowbottle}
                alt="GlowBottle"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                }}
              />
              <h3>GlowBottle</h3>
              <p>Landing page sobre uma garrafa tecnológica e inovadora.</p>
              <a
                href="https://glowbottle.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto
              </a>
            </ProjectCard>

            <ProjectCard>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={cheffacil1}
                  alt="ChefFácil Tema Escuro"
                  style={{
                    width: "50%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <img
                  src={cheffacil2}
                  alt="ChefFácil Tema Claro"
                  style={{
                    width: "50%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <h3>ChefFácil</h3>
              <p>Aplicativo de receitas e lista de compras fácil de usar.</p>
              <a
                href="https://cheffacil.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto
              </a>
            </ProjectCard>
          </Projects>
        </Section>

        <SectionContact id="contato">
          <SectionTitle>Contato</SectionTitle>
          <p>diegoleffa@hotmail.com</p>
          <ContactLinks>
            <a href="https://github.com/DiegoAndreLeffa" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diegoandreleffa/"
              target="_blank"
            >
              LinkedIn
            </a>
          </ContactLinks>
        </SectionContact>

        <Footer>
          © {new Date().getFullYear()} Diego Leffa. Todos os direitos
          reservados.
        </Footer>
      </Container>
    </ThemeProvider>
  );
}
