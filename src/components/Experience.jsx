import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'Technical One',
      location: 'Pune, India',
      period: 'April 2026 – June 2026',
      points: [
        'Completed weekly hands-on AI/ML deliverables assigned by technical leads with 100% on-time sprint completion.',
        'Engineered and benchmarked end-to-end Machine Learning pipelines and Deep Learning architectures for classification and predictive analytics tasks.',
        'Spearheaded the development of a high-accuracy Fake News Detection System utilizing Hugging Face transformer models (BERT), LSTM, and Scikit-learn classifiers.',
        'Demonstrated exceptional team coordination and active collaboration in daily Agile stand-ups, technical code reviews, and sprint backlog refinements.'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'Machine Learning Tech',
      location: 'Pune, India',
      period: 'December 2025 – February 2026',
      points: [
        'Designed and deployed end-to-end ML pipelines for classification and regression using decision trees, random forests, SVM, and neural networks.',
        'Built NLP models for text classification and sentiment analysis using TensorFlow and NLTK, achieving high benchmark accuracy.',
        'Optimized automated data preprocessing and ETL workflows, reducing pipeline processing time by 40% and accelerating model iteration cycles.',
        'Executed hyperparameter tuning and cross-validation across precision, recall, and F1-score metrics to ensure enterprise-grade model reliability.'
      ]
    },
    {
      title: 'Data Scientist Intern',
      company: 'Dataview Scientists',
      location: 'Pune, India',
      period: 'April 2024 – June 2024',
      points: [
        'Applied statistical analysis and predictive modeling in Python (Pandas, NumPy, Scikit-learn) to solve complex business problems.',
        'Constructed interactive dashboards aligned with key performance indicators (KPIs), reducing manual reporting overhead.',
        'Collaborated across Agile sprint teams to deploy ML models for operational optimization.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-3">
          <Briefcase className="w-4 h-4" /> Career Journey
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      {/* Vertical Central Timeline Wrapper */}
      <div className="relative">
        {/* Glowing Center Line */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-800 -translate-x-1/2"></div>

        <div className="space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Pulse Node Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-slate-950 border-2 border-cyan-400 shadow-md shadow-cyan-500/50"></span>
                  </span>
                </div>

                {/* Alternating Experience Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-cyan-500/10 backdrop-blur-xl group">
                    
                    {/* Role Title & Organization Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30">
                        {exp.company}
                      </span>
                    </div>

                    {/* Metadata Sub-Bar */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium mb-6 border-b border-slate-800/80 pb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {exp.location}
                      </span>
                    </div>

                    {/* Impact Bullet Points */}
                    <ul className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {exp.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Structural Grid Spacer (Desktop Alignment) */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;