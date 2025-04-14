// Estrutura main
import { Outlet } from 'react-router-dom'

// Menu superior
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default App