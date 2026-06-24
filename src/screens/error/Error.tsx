import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home } from "lucide-react"

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Página não encontrada</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-lg"
        >
          <Home size={20} />
          Voltar ao início
        </Link>
      </motion.div>
    </div>
  )
}

export default ErrorPage