import React from 'react';
import { Award, Brain, Users, Cpu, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & ML Expertise',
      description: 'Specialized in building end-to-end Machine Learning pipelines, NLP sentiment analysis, and Hugging Face transformer models.'
    },
    {
      icon: Users,
      title: 'Team Player & Coordination',
      description: 'Highly cooperative team player with strong interpersonal skills and active coordination in cross-functional Agile teams.'
    },
    {
      icon: Award,
      title: 'Deloitte Certified',
      description: 'Holds a specialized AI/ML Certification from Deloitte (May 2026), proving industry-aligned analytical capabilities.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Education & Background */}
        <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Cpu className="text-cyan-400 w-6 h-6" /> Educational Background
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Currently pursuing my Master's degree in Computer Science with a specialization in Artificial Intelligence & Machine Learning at Savitribai Phule Pune University. Driven by a deep interest in deploying automated intelligence to solve real-world problems.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border-l-4 border-cyan-400">
                <h4 className="font-bold text-white">Master of Computer Science (AI & ML)</h4>
                <p className="text-xs text-cyan-400">Savitribai Phule Pune University | 2025 – 2027</p>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-bold text-white">Bachelor of Computer Science</h4>
                <p className="text-xs text-blue-400">Savitribai Phule Pune University | 2023 – 2025</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <h4 className="font-bold text-slate-200 mb-2">Key Certifications</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" /> Deloitte AI/ML Certification (May 2026)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" /> Machine Learning & Advanced AI Techniques — AI Academy of Tech (2026)
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Highlights Cards */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;