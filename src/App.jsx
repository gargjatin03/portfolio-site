import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Thanks from './components/Thanks';
import { useState } from 'react';

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900">
      <Navbar />
      <main className='container-max py-12'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact onSubmit={() => setSubmitted(true)} />
        {submitted && <Thanks />}
      </main>
      <Footer />
    </div>
  );
}

export default App;