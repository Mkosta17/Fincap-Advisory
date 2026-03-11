import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse" onClick={() => setIsMenuOpen(false)}>
          <img src="https://i.imgur.com/9aay0sn.png" alt="Fincap Advisory Logo" className="h-16" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800 whitespace-nowrap">Fincap Advisory</span>
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-0.5">Donde la financiación se vuelve estrategia</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/servicios" className="text-gray-600 hover:text-gray-800">Servicios</Link>
          <Link to="/nosotros" className="text-gray-600 hover:text-gray-800">Nosotros</Link>
          <Link to="/contacto" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Reservar sesión</Link>
        </nav>
        <div className="md:hidden">
          <button 
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 px-6 py-4">
              <Link 
                to="/servicios" 
                className="text-gray-600 hover:text-gray-800 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/nosotros" 
                className="text-gray-600 hover:text-gray-800 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                to="/contacto" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar sesión
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
