import React, { useState } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

const variantClasses = {
  primary: 'text-primary-50 hover:bg-primary-300 bg-primary-200',
  secondary: 'bg-gray-500 hover:bg-gray-600',
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='bg-primary-200 text-primary-100 fixed top-0 left-0 right-0 z-50 shadow-lg'>
      <div className='flex justify-between items-center px-4 py-3 lg:py-4'>
        
        {/* this is logo section */}
        <div className='flex items-center gap-2 xs:gap-3 sm:gap-4'>
          <LuLayoutDashboard className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-primary-50'/>
          <h1 className='font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-100'>Business</h1>
          <h1 className='font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-50'>Cafe</h1>
        </div>

        {/* Desktop Navigation pages */}
        <div className='hidden lg:flex gap-6 xl:gap-8'>
          <a 
            href="/" 
            className={`${variantClasses.primary} px-4 py-2 rounded transition-colors hover:bg-primary-300`}
          >
            Home
          </a>
          <a 
            href="/about" 
            className={`text-primary-100 px-4 py-2 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors`}
          >
            About
          </a>
          <a 
            href="/blog" 
            className={`text-primary-100 px-4 py-2 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors`}
          >
            Blog
          </a>
          <a 
            href="/contact" 
            className={`text-primary-100 px-4 py-2 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className='lg:hidden p-2 rounded-md hover:bg-primary-300 transition-colors'
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className='text-2xl text-primary-100' />
          ) : (
            <HiMenu className='text-2xl text-primary-100' />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100 border-t border-primary-300' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className='px-4 py-2 space-y-1'>
          <a 
            href="/" 
            onClick={closeMenu}
            className={`${variantClasses.primary} block px-4 py-3 rounded transition-colors hover:bg-primary-300 text-center`}
          >
            Home
          </a>
          <a 
            href="/about" 
            onClick={closeMenu}
            className={`text-primary-100 block px-4 py-3 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors text-center`}
          >
            About
          </a>
          <a 
            href="/blog" 
            onClick={closeMenu}
            className={`text-primary-100 block px-4 py-3 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors text-center`}
          >
            Blog
          </a>
          <a 
            href="/contact" 
            onClick={closeMenu}
            className={`text-primary-100 block px-4 py-3 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors text-center`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}