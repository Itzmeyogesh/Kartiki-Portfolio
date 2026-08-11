import React from 'react';
import { ExternalLink, Sparkles, Calendar, TrendingUp, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
  const experiences = [
    {
      title: 'Fake News Detection System',
      role: 'AI / ML Project',
      duration: 'April 2026 – May 2026',
      impact: '94% Accuracy & 92% F1-Score',
      description: 'Built an end-to-end NLP deep learning pipeline classifying news articles as real or fake across 45,000+ records. Fine-tuned BERT transformer models via Hugging Face and deployed an optimized inferencing architecture.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'NLP', 'PyTorch', 'TensorFlow', 'BERT', 'Hugging Face'],
      github: 'https://github.com/Kartikii12',
      live: 'https://kartikii12.github.io/Portfolio'
    },
    {
      title: 'Customer Churn Analysis',
      role: 'Data Science Project',
      duration: 'March 2025 – April 2025',
      impact: '+28% Segmentation Clarity',
      description: 'Analyzed behavioral patterns of 7,000+ telecom users using Python and Scikit-learn. Engineered tenure bands and contract features, boosting churn prediction accuracy and revealing critical retention indicators.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'EDA', 'Scikit-learn', 'Predictive Modeling', 'Analytics'],
      github: 'https://github.com/Kartikii12',
      live: 'https://kartikii12.github.io/Portfolio'
    }
  ];

  return (
    <section id="projects" className="w-full py-24 px-4 sm:px-8 lg:px-16 bg-slate-950/50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" /> Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects & Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Production-ready machine learning solutions, deep learning models, and data intelligence workflows.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="w-full bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                <div className="lg:col-span-5 relative overflow-hidden min-h-[250px] lg:min-h-full">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:hidden"></div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                        <Code2 className="w-3.5 h-3.5" /> {exp.role}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>

                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-lg mb-4">
                      <TrendingUp className="w-4 h-4" />
                      <span>Impact: {exp.impact}</span>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80">
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" /> Code Repository
                    </a>
                    <a
                      href={exp.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md shadow-cyan-500/20"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;