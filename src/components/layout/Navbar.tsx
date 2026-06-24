import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { ROUTES } from "../../lib/constants"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import { useScrollProgress } from "../../hooks/useScrollProgress"
import { useThemeContext } from "../../hooks/useThemeContext"

const navLinks = [
  { path: ROUTES.HOME, label: "Home" },
  { path: ROUTES.PORTFOLIO, label: "Portfolio" },
  { path: ROUTES.CONTACT, label: "Contato" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrollPosition(20)
  const scrollProgress = useScrollProgress()
  const location = useLocation()
  const { theme, toggleTheme } = useThemeContext()

  const isDarkPage = location.pathname === "/contatos" || location.pathname === "/portfolio"

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen)
    return () => document.body.classList.remove("menu-open")
  }, [isMenuOpen])

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-[60] origin-left"
        style={{ scaleX: scrollProgress }}
      />

      <div
        className={`fixed w-full flex items-center justify-between px-6 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-black/80 text-white shadow-lg h-16 backdrop-blur-lg"
            : `${isDarkPage ? "bg-transparent text-white" : "bg-transparent text-black"} h-18`
        }`}
      >
        <div className="flex-1 md:flex-none">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight"
          >
            Curtyu
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center flex-1">
          <div className="flex space-x-1">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path
              const isWhiteBg = isDarkPage && !isScrolled

              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative rounded-md px-5 py-2 text-sm font-medium transition-colors ${
                    isWhiteBg
                      ? "text-white/80 hover:text-white"
                      : isScrolled
                        ? "text-white/70 hover:text-white"
                        : "text-gray-700 hover:text-black"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full ${
                        isScrolled || isDarkPage ? "bg-white" : "bg-black"
                      }`}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled || isDarkPage
                ? "text-white/70 hover:text-white hover:bg-white/10"
                : "text-gray-700 hover:text-black hover:bg-black/5"
            }`}
            aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Hamburger */}
          <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none ${
            isDarkPage && !isScrolled ? "text-white" : "text-white"
          }`}
          aria-label="Abrir menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg md:hidden border-t border-white/10"
            >
              <div className="flex flex-col p-4 space-y-1">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar
