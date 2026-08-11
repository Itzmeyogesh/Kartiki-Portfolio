import React, { useState, useEffect } from 'react';
import { Download, Mail, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import kartikiImg from '../assets/Kartiki.jpeg';

const Hero = () => {
  const roles = ["AI & ML Engineer", "Deep Learning Developer", "NLP Specialist", "Data Scientist"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Information */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for AI/ML Engineer Roles
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Kartiki Nandeshwar
            </span>
          </h1>

          <div className="text-xl sm:text-2xl font-semibold text-slate-300 h-8 flex items-center">
            <span>I am an&nbsp;</span>
            <span className="text-cyan-400 underline decoration-cyan-500/50 underline-offset-4">
              {displayText}
            </span>
            <span className="animate-pulse text-cyan-400 font-bold ml-1">|</span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Results-driven AI & Machine Learning Engineer with hands-on experience designing, fine-tuning, and deploying end-to-end ML pipelines, deep learning architectures, and NLP models. Highly proficient in PyTorch, TensorFlow, Scikit-learn, and Hugging Face transformers.
          </p>

          {/* Social Icons & Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://linkedin.com/in/kartiki-nandeshwar"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition-all duration-300 border border-slate-700 hover:border-cyan-400 shadow-md"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Kartikii12"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition-all duration-300 border border-slate-700 hover:border-cyan-400 shadow-md"
              title="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://kartikii12.github.io/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl transition-all duration-300 border border-slate-700 hover:border-cyan-400 shadow-md"
              title="Portfolio Website"
            >
              <Globe className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              Contact Me <Mail className="w-4 h-4" />
            </a>

            <a
              href="#"
              download
              className="px-6 py-3 bg-slate-800/90 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 font-semibold rounded-xl border border-cyan-500/30 transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Container (Square with Smooth Rounded Corners) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Soft background glow matching the square frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            
            {/* Square Image Box */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-cyan-500/40 bg-slate-900 shadow-2xl flex items-center justify-center">
              <img
                src={kartikiImg}
                alt="Kartiki Nandeshwar"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;