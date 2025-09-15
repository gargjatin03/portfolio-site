import { section } from 'framer-motion/client';
import React from 'react';

const Hero = () => {
  return (
    <section className='grid md:grid-cols-2 gap-8 items-center py-16 justify-center'>
        <div className="mx-auto items-center justify-center">
            <img src='/profile.jpg' alt="profile pic" className="w-80 h-80 object-cover rounded-full shadow-lg duration-300 transition-transform hover:scale-110"/>
        </div>
        
        <div>
            <h1 className='text-4xl md:text-5xl text-yellow-500 flex items-center justify-center font-bold leading-tight transition-transform duration-400 hover:scale-110 hover:text-yellow-300
           hover:bg-clip-text'>Jatin Garg</h1>
            <p className='mt-4 text-lg text-slate-300 flex items-center justify-center'>A Passionate Web Developer...</p>

            <div className='mt-6 gap-4 flex items-center justify-center' id='contact'>
                <a href="#contact" className='px-5 py-3 rounded-md border bg-gray-800 text-white transition-colors duration-300 hover:border-green-400 hover:text-green-400'>Connect with Me</a>
                <a href="/Jatin_Garg_Resume.pdf.pdf" download className='px-5 py-3 rounded-md border bg-gray-600 text-white transition-colors duration-300 hover:border-green-400 hover:text-green-400'>Download Resume</a>
            </div>
        </div>
        
    </section>
    
  );
}

export default Hero;