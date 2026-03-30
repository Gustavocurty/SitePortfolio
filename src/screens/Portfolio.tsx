"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Github, ExternalLink, Code } from "lucide-react"
import { Badge } from "../components/badge"
import { Button } from "../components/button"

import backgroundPortf from "../assets/backgroundPortf.jpg"

import AquaFri from "../assets/AquaFri/home.png"
import ClimaApp from "../assets/ClimaApp/home.png"
import RickMorty from "../assets/RickMorty/home.png"

import Dashboard from "../assets/Dashboard/home.png"
import FlappyHome from "../assets/FlapCharizard/home.png"
import RunnerHome from "../assets/RunnerDipper/home.png"
import Main from "../assets/Portfolio/main.png"
import ppgctm from "../assets/ppgctm/foto1.png"

// Dados dos projetos
const projects = [
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
      "Website desenvolvido para o programa de pós graduação em Ciência e Tecnologia dos Materiais da Universidade do Estado do Rio de Janeiro UERJ.",
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
      "Ferramenta web para visualização de horários em comum entre pessoas, com sistema de cards coloridos que indicam disponibilidade, filtro de seleção e organização visual via styled-components.",
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
      "Portfólio pessoal desenvolvido em Next.js com foco em performance, responsividade e design limpo, apresentando projetos, habilidades e experiências.",
    image: Main,
    technologies: ["React"],
    demoLink: "https://gustavocurty.dev",
    codeLink: "https://github.com/gustavocurty/portfolio",
    featured: true,
  },
  {
    id: 8,
    title: "Jogo PyGames Flappy Charizard",
    description:
      "Um jogo desenvolvido com PyGames, onde que o jogador tem que bater as asas sem colidir na parede.",
    image: FlappyHome,
    technologies: ["Python"],
    demoLink: "https://gustavocurty.dev",
    codeLink: "https://github.com/gustavocurty/portfolio",
    featured: true,
  },
  {
    id: 9,
    title: "Jogo PyGames Runner Dipper",
    description:
      "Um jogo desenvolvido com PyGames, onde que o jogador tem que pular e abaixar para desviar de objetos que vão em direção a ele.",
    image: RunnerHome,
    technologies: ["Python"],
    demoLink: "https://gustavocurty.dev",
    codeLink: "https://github.com/gustavocurty/portfolio",
    featured: true,
  },
]


// Categorias para filtrar os projetos
const categories = ["Todos", "React","Wordpress", "Mobile", "Flutter", "Python", "React Native"]

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos")

  // Filtra os projetos com base na categoria selecionada
  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((project) => project.technologies.includes(filter))

  // Variantes de animação para os projetos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-[50vh] flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundPortf})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Efeito de partículas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent opacity-30"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            ></div>
          ))}
        </div>

        {/* Container para o conteúdo */}
        <div className="container mx-auto px-4 md:px-6 z-10 pt-24 pb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Meus Projetos</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos recentes em desenvolvimento web e mobile, demonstrando minhas habilidades
              técnicas e criativas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl relative group"
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="default" className="bg-primary text-white">
                      Destaque
                    </Badge>
                  </div>
                )}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-white/0 dark:bg-black/0 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/95 text-black p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:-translate-y-1"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/95 text-black p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:-translate-y-1"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.codeLink, "_blank")}
                    >
                      <Code size={16} />
                      Código
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Estou sempre aberto a novos projetos e colaborações. Se você tem uma ideia ou projeto em mente, entre em
              contato para conversarmos.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200" to="/contatos">
              Entre em Contato
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Portfolio