"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Verifica se estamos na página de contatos ou portfolio
  const isContactPage = location.pathname === "/contatos"
  const isPortfolioPage = location.pathname === "/portfolio"

  const isWhiteTextPage = isContactPage || isPortfolioPage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getTextColorClass = () => {
    if (isWhiteTextPage) {
      return "text-white"
    }
    return isScrolled ? "text-white" : "text-black"
  }

  const textColorClass = getTextColorClass()

  return (
    <div
      className={`fixed w-full flex items-center justify-between px-6 transition-all duration-500 z-50 ${
        isScrolled ? "bg-black text-white shadow-md h-16" : `bg-transparent ${textColorClass} backdrop-blur-sm h-18`
      }`}
    >
      {/* Logo */}
      <div className="flex-1 md:flex-none">
        <p
          onClick={() => alert("Curtyu né!")}
          className={`text-xl font-bold cursor-pointer ${
            isWhiteTextPage && !isScrolled ? "text-white" : ""
          }`}
        >
          Curtyu
        </p>
      </div>

      {/* Links de navegação para desktop */}
      <nav className="hidden md:flex justify-center flex-1">
        <div className="flex space-x-2">
          {["/", "/portfolio", "/contatos"].map((path) => {
            const isActivePage = location.pathname === path
            const isWhiteBackground = isWhiteTextPage && !isScrolled

            return (
              <Link
                key={path}
                to={path}
                className={`${
                  isWhiteBackground
                    ? "text-white hover:bg-white/20 font-bold"
                    : isScrolled
                    ? "hover:bg-gray-200 hover:text-black font-bold"
                    : "hover:bg-white/20 font-bold"
                } rounded-md px-6 py-2 transition-colors`}
              >
                {path === "/" ? "Home" : path === "/portfolio" ? "Portfolio" : "Contato"}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Botão hambúrguer */}
      <button
        onClick={toggleMenu}
        className={`md:hidden focus:outline-none ${
          isWhiteTextPage && !isScrolled ? "text-white" : isScrolled ? "text-white" : "text-black"
        }`}
        aria-label="Toggle menu"
      >
        {/* Ícone */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Mobile */}
      <div
        className={`absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md transition-all duration-300 overflow-hidden md:hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          <Link
            to={"/"}
            className="text-white px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/skills"}
            className="text-white px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to={"/portfolio"}
            className="text-white px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to={"/contatos"}
            className="text-white px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contatos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
