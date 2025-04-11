"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Fecha o menu quando a tela é redimensionada para desktop
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

  // Bloqueia o scroll quando o menu está aberto
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

  return (
    <div
      className={`fixed w-full flex items-center justify-between px-6 transition-all duration-500 z-50 ${
        isScrolled ? "bg-black text-white shadow-md h-16" : "bg-transparent text-black backdrop-blur-sm h-18"   
      }`}
    >
      {/* Logo */}
      <div className="flex-1 md:flex-none">
        <p onClick={() => alert("Curtyu né!")} className="text-xl font-bold cursor-pointer">
          Curtyu
        </p>
      </div>

      {/* Links de navegação para desktop - centralizados */}
      <nav className="hidden md:flex justify-center flex-1">
        <div className="flex space-x-2">
          <Link
            to={"/"}
            className={`${
              isScrolled ? "hover:bg-gray-200 hover:text-black font-bold" : "hover:bg-white/20 font-bold"
            } rounded-md px-6 py-2 transition-colors`}
          >
            Home
          </Link>
          <Link
            to={"/portfolio"}
            className={`${
              isScrolled ? "hover:bg-gray-200 hover:text-black font-bold" : "hover:bg-white/20 font-bold"
            } rounded-md px-6 py-2 transition-colors`}
          >
            Portfolio
          </Link>
          <Link
            to={"/contatos"}
            className={`${
              isScrolled ? "hover:bg-gray-200 hover:text-black font-bold" : "hover:bg-white/20 font-bold"
            } rounded-md px-6 py-2 transition-colors`}
          >
            Contato
          </Link>
        </div>
      </nav>

      {/* Botão do menu hambúrguer para mobile */}
      <button onClick={toggleMenu} className={isScrolled ? "md:hidden text-white focus:outline-none" : "md:hidden text-black focus:outline-none"} aria-label="Toggle menu">
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

      {/* Menu suspenso para mobile */}
      <div
        className={`absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md transition-all duration-300 overflow-hidden md:hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          <Link
            to={"/"}
            className="px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"./skills"}
            className="px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to={"/portfolio"}
            className="px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to={"/contatos"}
            className="px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
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
