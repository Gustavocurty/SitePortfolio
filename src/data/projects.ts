import type { Project } from "../types"
import AquaFri from "../assets/AquaFri/home.png"
import ClimaApp from "../assets/Climaapp/home.png"
import RickMorty from "../assets/RickMorty/home.png"
import Dashboard from "../assets/Dashboard/home.png"
import FlappyHome from "../assets/FlapCharizard/home.png"
import RunnerHome from "../assets/RunnerDipper/home.png"
import Main from "../assets/Portfolio/main.png"
import ppgctm from "../assets/ppgctm/foto1.png"

export const projects: Project[] = [
  {
    id: 1,
    title: "Aplicativo ClimaApp",
    description:
      "Aplicativo mobile desenvolvido em Flutter para exibir dados meteorológicos, com imagens do clima, medidas de temperatura e precipitação, e animações de fundo dinâmicas conforme a temperatura.",
    image: ClimaApp,
    technologies: ["Mobile", "Flutter"],
    demoLink: "https://github.com/gustavocurty/app-clima",
    codeLink: "https://github.com/gustavocurty/app-clima",
    featured: true,
  },
  {
    id: 2,
    title: "Plataforma AquaFriburgo",
    description:
      "App desenvolvido em hackathon para incentivar o uso consciente da água em Nova Friburgo. Inclui gamificação, denúncias de vazamentos, acompanhamento de consumo e ranking de moradores.",
    image: AquaFri,
    technologies: ["React Native"],
    demoLink: "https://github.com/gustavocurty/hackathon-agua",
    codeLink: "https://github.com/gustavocurty/hackathon-agua",
    featured: true,
  },
  {
    id: 3,
    title: "Website PPGCTM-UERJ",
    description:
      "Website desenvolvido para o programa de pós graduação em Ciência e Tecnologia dos Materiais da UERJ.",
    image: ppgctm,
    technologies: ["Wordpress"],
    demoLink: "https://github.com/gustavocurty/hackathon-agua",
    codeLink: "https://github.com/gustavocurty/hackathon-agua",
    featured: true,
  },
  {
    id: 4,
    title: "Dashboard de Disponibilidade",
    description:
      "Ferramenta web para visualização de horários em comum entre pessoas, com sistema de cards coloridos que indicam disponibilidade, filtro de seleção e organização visual.",
    image: Dashboard,
    technologies: ["React"],
    demoLink: "https://github.com/gustavocurty/disponibilidade-dashboard",
    codeLink: "https://github.com/gustavocurty/disponibilidade-dashboard",
    featured: false,
  },
  {
    id: 5,
    title: "Aplicativo Rick & Morty",
    description:
      "Aplicativo desenvolvido para testar meus conhecimentos em flutter, com uma página de pesquisa de personagens, resgatando de uma API.",
    image: RickMorty,
    technologies: ["Flutter", "Mobile"],
    demoLink: "https://github.com/gustavocurty/image-analysis-project",
    codeLink: "https://github.com/gustavocurty/image-analysis-project",
    featured: false,
  },
  {
    id: 6,
    title: "Aplicativo Appfy",
    description:
      "Aplicativo desenvolvido para um treinamento, onde voce pesquisa um cantor(a) e ele retorna uma parte de uma letra de qualquer música desse(a) cantor(a).",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Mobile"],
    demoLink: "https://github.com/gustavocurty/image-analysis-project",
    codeLink: "https://github.com/gustavocurty/image-analysis-project",
    featured: false,
  },
  {
    id: 7,
    title: "Portfólio Pessoal",
    description:
      "Portfólio pessoal desenvolvido com React e Vite, com foco em performance, responsividade e design limpo, apresentando projetos, habilidades e experiências.",
    image: Main,
    technologies: ["React"],
    demoLink: "https://gustavocurty.dev",
    codeLink: "https://github.com/gustavocurty/portfolio",
    featured: true,
  },
  {
    id: 8,
    title: "Flappy Charizard",
    description: "Um jogo desenvolvido com PyGames, onde o jogador tem que bater as asas sem colidir na parede.",
    image: FlappyHome,
    technologies: ["Python"],
    demoLink: "https://github.com/gustavocurty/portfolio",
    codeLink: "https://github.com/gustavocurty/portfolio",
    featured: true,
  },
  {
    id: 9,
    title: "Runner Dipper",
    description: "Um jogo desenvolvido com PyGames, onde o jogador tem que pular e abaixar para desviar de objetos.",
    image: RunnerHome,
    technologies: ["Python"],
    demoLink: "https://github.com/gustavocurty/portfolio",
    codeLink: "https://github.com/gustavocurty/portfolio",
    featured: true,
  },
]

export const categories = ["Todos", "React", "Wordpress", "Mobile", "Flutter", "Python", "React Native"]
