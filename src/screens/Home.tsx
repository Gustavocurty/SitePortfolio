"use client"
import { motion } from "framer-motion"
import { Button } from "../components/button"
import { Card, CardContent } from "../components/card"
import { Badge } from "../components/badge"
import { FileText, Mail } from "../components/icons"
import backgroundImage from "../assets/backgroundImage.jpg"
import curriculoPDF from "../assets/Curriculo.pdf"

const skills = [
  { name: "Git", level: "Avançado" },
  { name: "HTML/CSS", level: "Avançado" },
  { name: "React", level: "Intermediário" },
  { name: "TypeScript", level: "Intermediário" },
  { name: "JavaScript", level: "Intermediário" },
  { name: "Tailwind CSS", level: "Intermediário" },
  { name: "Node.js", level: "Intermediário" },
  { name: "Next.js", level: "Intermediário" },
  { name: "Flutter", level: "Intermediário" },
  { name: "Dart", level: "Intermediário" },
  { name: "Styled-components", level: "Intermediário" },
  { name: "Python", level: "Básico" },
  { name: "Figma", level: "Básico" },
  { name: "SQL", level: "Básico" },
  { name: "MongoDB", level: "Básico" },
]

const experiences = [
  {
    title: "Desenvolvedor Front-end",
    company: "Serra Jr Engenharia",
    period: "2022 - 2025",
    description: "Desenvolvimento de sites e aplicações web e mobile utilizando React, React Native e ferramentas modernas como Tailwind CSS e TypeScript, com foco em soluções para clientes e projetos internos da empresa.",
  },
  {
    title: "Bolsista Proatec - LTI",
    company: "Universidade do Estado do Rio de Janeiro - UERJ-IRPJ",
    period: "2024 - 2025",
    description: "Desenvolvimento e manutenção de projetos em flutter, além de participação ativa em pesquisa e implementação de soluções.",
  },
  {
    title: "Auxiliar Administrativo",
    company: "Mercado do Eraldo",
    period: "2018 - 2022",
    description: "Atendimento ao público e suporte administrativo.",
  },
]


const Home = () => {
  // Função para lidar com o download do currículo
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = curriculoPDF
    link.download = "Curriculo_Gustavo_Curty.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4 md:px-6 z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl mb-2 text-gray-200">Olá, eu sou</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">Gustavo</h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6">CURTY</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Desenvolvedor Front-end especializado em criar experiências digitais excepcionais
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200" to="/portfolio">
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" to="/contatos">
                Contato
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-lg text-gray-700 mb-6">
                Sou um desenvolvedor front-end apaixonado por criar interfaces interativas e responsivas. Com
                experiência em React, TypeScript e Tailwind CSS, busco sempre as melhores práticas e tecnologias para
                entregar produtos de alta qualidade.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Estudante em Engenharia de Computação na, tenho trabalhado em projetos desafiadores que me permitiram
                aprimorar minhas habilidades técnicas e de resolução de problemas. Estou sempre em busca de novos
                desafios e oportunidades para crescer profissionalmente.
              </p>
              <div className="flex gap-4">
                {/* Botão de download do currículo com a função de download */}
                <Button variant="outline" className="gap-2 cursor-pointer" onClick={handleDownloadCV}>
                  <FileText size={18} />
                  Download CV
                </Button>

                <Button variant="outline" className="gap-2" to="/contatos">
                  <Mail size={18} />
                  Contato
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Minhas Habilidades</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        <h4 className="font-semibold mb-1">{skill.name}</h4>
                        <Badge
                          variant={
                            skill.level === "Avançado"
                              ? "default"
                              : skill.level === "Intermediário"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experiência Profissional</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-10 relative pl-8 border-l-2 border-gray-200 pb-8"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-2 text-gray-600">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home