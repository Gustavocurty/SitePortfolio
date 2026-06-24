import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Code } from "lucide-react"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { projects, categories } from "../data"
import type { Project } from "../types"
import backgroundPortf from "../assets/backgroundPortf.jpg"

const TiltCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-card text-card-foreground rounded-xl overflow-hidden shadow-lg transition-all duration-200 hover:shadow-2xl relative group"
      style={{ transformStyle: "preserve-3d" }}
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="default" className="bg-primary text-white shadow-lg">
            Destaque
          </Badge>
        </div>
      )}
      <div className="relative h-56 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
            aria-label={`Ver demonstração do ${project.title}`}
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
            aria-label={`Ver código do ${project.title}`}
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-muted text-[11px]">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between">
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(project.demoLink, "_blank")}>
            <ExternalLink size={16} />
            Demo
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(project.codeLink, "_blank")}>
            <Code size={16} />
            Código
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos")

  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((project) => project.technologies.includes(filter))

  return (
    <>
      <section
        className="min-h-[50vh] flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundPortf})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent opacity-30" />
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
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10 pt-24 pb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Meus Projetos</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos recentes em desenvolvimento web e mobile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-muted sticky top-16 z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-foreground text-background shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <TiltCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
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
