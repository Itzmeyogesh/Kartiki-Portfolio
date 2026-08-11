import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Floating Interactive Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections with Sidebar Clearance */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;