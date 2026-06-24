import { Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { ROUTES, SOCIAL } from "../../lib/constants"

const footerLinks = [
  { path: ROUTES.HOME, label: "Home" },
  { path: ROUTES.PORTFOLIO, label: "Portfolio" },
  { path: ROUTES.CONTACT, label: "Contato" },
]

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to={ROUTES.HOME} className="text-xl font-bold text-white">
              Curtyu
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Desenvolvedor Front-end especializado em criar experiências digitais excepcionais.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              {footerLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SOCIAL.email}
                className="bg-gray-800 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Gustavo Curty. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
