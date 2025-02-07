import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5); // Altera a navbar após 100px de rolagem
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full h-12 flex items-center justify-between p-3 transition-all duration-500 ${isScrolled ? 'bg-black text-white shadow-md' : 'bg-transparent text-black' }`}>

      <p onClick={() => alert("Curtyu né!")} className='text-xl cursor-pointer flex justify-start'>Curtyu</p>

      <nav className='w-[35%] flex justify-between text-xl'>
        <Link 
        to={'/'}
        className={` ${isScrolled ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-black hover:text-white' } rounded-4xl px-6 `}
        >Home</Link>
        <Link to={'./skills'}
        className={` ${isScrolled ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-black hover:text-white' } rounded-4xl px-6 `}
        >Skills</Link>
        <Link to={'/portfolio'}
        className={` ${isScrolled ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-black hover:text-white' } rounded-4xl px-6 `}
        >Portfolio</Link>
        <Link to={'/contatos'}
        className={` ${isScrolled ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-black hover:text-white' } rounded-4xl px-6 `}
        >Contatos</Link>
      </nav>

      <div className='flex'>
        <a href="https://www.instagram.com/gust_curty/" target="_blank" rel="noopener noreferrer">
          <Instagram className='mr-4' />
        </a>
        <a href="https://www.linkedin.com/in/gustavo-curty-b394b7255/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
          <Linkedin className='mr-2' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
