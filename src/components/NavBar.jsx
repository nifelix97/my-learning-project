import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";

const variantClasses = {
  primary: 'text-primary-50 hover:bg-primary-300 bg-primary-200',
  secondary: 'bg-gray-500 hover:bg-gray-600',
}

export default function NavBar() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center min-h-[100px] px-4 bg-primary-200 text-primary-100 py-4 lg:py-0 gap-4 lg:gap-0'>
        {/* Logo Section */}
        <div className='flex items-center gap-2 md:gap-4'>
            <LuLayoutDashboard className='text-3xl md:text-4xl lg:text-5xl text-primary-50'/>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-primary-100'>Business</h1>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-primary-50'>Cafe</h1>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col sm:flex-row gap-2 md:gap-4 w-full lg:w-auto'>
            <div className='w-full sm:w-auto'>
                <a href="/" className={`${variantClasses.primary} px-3 py-2 md:px-4 md:py-2 rounded transition-colors block text-center sm:inline-block hover:bg-primary-300`}>
                    Home
                </a>
            </div>
            <div className='w-full sm:w-auto'>
                <a href="/about" className={`text-primary-100 px-3 py-2 md:px-4 md:py-2 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors block text-center sm:inline-block`}>
                    About
                </a>
            </div>
            <div className='w-full sm:w-auto'>
                <a href="/blog" className={`text-primary-100 px-3 py-2 md:px-4 md:py-2 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors block text-center sm:inline-block`}>
                    Blog
                </a>
            </div>
            <div className='w-full sm:w-auto'>
                <a href="/contact" className={`text-primary-100 px-3 py-2 md:px-4 md:py-2 hover:text-primary-50 hover:bg-primary-300 rounded transition-colors block text-center sm:inline-block`}>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}