import React from 'react';
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <aside className="fixed left-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center py-4 px-2 bg-navy-900/80 backdrop-blur-md border border-cyan-500/20 rounded-full shadow-2xl shadow-cyan-500/10">
      <div className="flex flex-col gap-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              title={item.label}
              className={`relative p-3 rounded-full transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-cyan-500/30 shadow-md">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;