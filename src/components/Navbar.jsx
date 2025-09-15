import React from 'react';

const Navbar = () => {
  return (
    <header className='bg-gray/300 backdrop-blur top-0 z-30 border-b  '>
        <div className='container-max flex items-center justify-center py-4 text-green-600'>
            <nav className='space-x-7 hidden md:flex justify-center items-center'>
                <a href="#about" className='transition-transform duration-300 hover:scale-115' >About</a>
                <a href="#skills" className='transition-transform duration-300 hover:scale-115'>Skills</a>
                <a href="#projects" className='transition-transform duration-300 hover:scale-115'>Projects</a>
                <a href="#contact" className='transition-transform duration-300 hover:scale-110'>Contact</a>
                <a href="#download" download className='ml-lg px-3 py-1 rounded-md border text-green-600 transition-transform duration-300 hover:scale-110 hover:text-yellow-300 hover:border-green-600' >Resume</a>
            </nav>
            <div className='md:hidden'></div>
            
        </div>
    </header>
  );
}

export default Navbar;