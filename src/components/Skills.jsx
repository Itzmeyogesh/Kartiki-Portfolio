import React from 'react';
import { Database, Terminal, Layers, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core AI & ML',
      icon: Cpu,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Hugging Face', 'Transformers', 'Sentiment Analysis', 'Feature Engineering', 'Hyperparameter Tuning']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Programming & Databases',
      icon: Terminal,
      skills: ['Python', 'SQL', 'MySQL', 'Query Optimization', 'Data Wrangling', 'ETL Pipelines']
    },
    {
      title: 'Developer Tools',
      icon: Database,
      skills: ['GitHub', 'Git', 'Agile/Scrum', 'Business Analysis', 'Model Documentation', 'System Testing']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Technical Skills</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium rounded-lg border border-slate-700/60 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;