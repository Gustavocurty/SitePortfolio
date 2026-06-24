import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { FileText, Mail, ChevronDown } from "lucide-react"
import backgroundImage from "../assets/backgroundImage.jpg"
import curriculoPDF from "../assets/Curriculo.pdf"
import { skills, experiences } from "../data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const HeroSection = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <motion.div
      ref={heroRef}
      style={{ opacity }}
      className="h-screen flex flex-col justify-center bg-cover bg-center relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", y: backgroundY }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-200 mb-2 font-light tracking-wide">
            Olá, eu sou
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 leading-none">
            Gustavo
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-none tracking-tight">
            CURTY
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200/90 mb-8 max-w-xl">
            Desenvolvedor Front-end especializado em criar experiências digitais excepcionais
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200" to="/portfolio">
              Ver Projetos
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" to="/contatos">
              Contato
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={28} />
      </motion.div>
    </motion.div>
  )
}

const AboutSection = () => (
  <section className="py-24 bg-gradient-to-b from-muted to-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Sou um desenvolvedor front-end apaixonado por criar interfaces interativas e responsivas. Com
            experiência em React, TypeScript e Tailwind CSS, busco sempre as melhores práticas e tecnologias para
            entregar produtos de alta qualidade.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Estudante em Engenharia de Computação na UERJ, tenho trabalhado em projetos desafiadores que me permitiram
            aprimorar minhas habilidades técnicas e de resolução de problemas. Estou sempre em busca de novos
            desafios e oportunidades para crescer profissionalmente.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="gap-2 cursor-pointer"
              onClick={() => {
                const link = document.createElement("a")
                link.href = curriculoPDF
                link.download = "Curriculo_Gustavo_Curty.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <FileText size={18} />
              Download CV
            </Button>
            <Button variant="outline" className="gap-2" to="/contatos">
              <Mail size={18} />
              Contato
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-bold mb-8">Minhas Habilidades</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Card className="border border-border shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center gap-2">
                      <h4 className="font-semibold text-sm">{skill.name}</h4>
                      <motion.div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.04 }}
                          viewport={{ once: true }}
                          style={{
                            transformOrigin: "left",
                            scaleX: skill.level === "Avançado" ? 0.9 : skill.level === "Intermediário" ? 0.6 : 0.35,
                          }}
                        />
                      </motion.div>
                      <Badge
                        variant={
                          skill.level === "Avançado"
                            ? "default"
                            : skill.level === "Intermediário"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-[10px] px-2 py-0"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const ExperienceSection = () => {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  })

  return (
    <section className="py-24 bg-background" ref={timelineRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Experiência <span className="text-primary">Profissional</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border origin-top"
            style={{ scaleY: scrollYProgress }}
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ x: 6 }}
              className="mb-12 relative pl-10 last:mb-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                className="absolute w-4 h-4 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-white"
              />
              <div className="bg-muted rounded-xl p-6 border border-border hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">{exp.company}</span>
                  <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Home = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
  </>
)

export default Home
