import { useState, type ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin, FileText, ExternalLink, Send, CheckCircle } from "lucide-react"
import curriculoPDF from "../assets/Curriculo.pdf"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-16 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"
        animate={{ x: [0, -25, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 py-12 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Estou disponível para projetos freelance, oportunidades de trabalho e colaborações. Vamos conversar sobre como
          posso ajudar a transformar suas ideias em realidade.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-start gap-4 border border-white/5"
              >
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-300 mb-2">Respondo em até 24 horas</p>
                  <a
                    href="mailto:gutocurty18@gmail.com"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    gutocurty18@gmail.com
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-start gap-4 border border-white/5"
              >
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                  <p className="text-gray-300 mb-2">Disponível em horário comercial</p>
                  <a href="tel:+5522981430248" className="text-primary hover:underline flex items-center gap-1">
                    +55 (22) 98143-0248
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-start gap-4 border border-white/5"
              >
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Localização</h3>
                  <p className="text-gray-300 mb-2">Disponível para trabalho remoto</p>
                  <p className="text-primary">Rio de Janeiro, Brasil</p>
                  <p className="text-primary">Nova Friburgo, Brasil</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Form */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send size={18} />
                    </motion.div>
                  ) : (
                    <Send size={18} />
                  )}
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                  >
                    <CheckCircle size={18} />
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* CV Download */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-4">Currículo</h3>
              <p className="text-gray-300 mb-4">
                Baixe meu currículo completo para mais informações sobre minha experiência e habilidades.
              </p>
              <a
                href={curriculoPDF}
                download="Curriculo_Gustavo_Curty.pdf"
                className="inline-flex items-center gap-2 py-3 px-6 bg-gray-700 hover:bg-gray-600 rounded-md font-medium transition-colors"
              >
                <FileText size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social Media */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <p className="text-gray-300 mb-6">
                Conecte-se comigo nas redes sociais para acompanhar meus projetos e atualizações.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/gustavocurty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/gustavocurty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:gutocurty18@gmail.com"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 md:px-6 py-16 relative z-10"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Perguntas Frequentes</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5"
          >
            <h3 className="text-xl font-semibold mb-3">Qual é o seu processo de trabalho?</h3>
            <p className="text-gray-300">
              Meu processo inclui uma fase inicial de descoberta, seguida por planejamento, design, desenvolvimento,
              testes e lançamento. Mantenho comunicação constante durante todo o projeto.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5"
          >
            <h3 className="text-xl font-semibold mb-3">Quanto tempo leva para concluir um projeto?</h3>
            <p className="text-gray-300">
              O tempo varia dependendo da complexidade do projeto. Um site simples pode levar 2-3 semanas, enquanto
              projetos mais complexos podem levar vários meses.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5"
          >
            <h3 className="text-xl font-semibold mb-3">Você trabalha com clientes internacionais?</h3>
            <p className="text-gray-300">
              Sim! Trabalho com clientes de todo o mundo. A comunicação é feita principalmente por email, videochamadas
              e ferramentas de gerenciamento de projetos.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5"
          >
            <h3 className="text-xl font-semibold mb-3">Quais tecnologias você utiliza?</h3>
            <p className="text-gray-300">
              Trabalho principalmente com React, TypeScript, Next.js e Tailwind CSS para front-end. Para back-end,
              utilizo Node.js, Express e bancos de dados SQL/NoSQL.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
