import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Information */}
        <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            I am actively looking for AI & Machine Learning Engineering opportunities. Feel free to reach out for collaborations or inquiries!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Email Me</p>
                <a href="mailto:kartiiki1204@gmail.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                  kartiiki1204@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Call Me</p>
                <a href="tel:+919370169056" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                  +91 9370169056
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-sm font-semibold text-white">Pune, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-slate-400 text-sm">Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Hiring / Project Inquiry"
                  className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Kartiki Nandeshwar. All Rights Reserved.</p>
        <p className="mt-1 font-semibold text-cyan-400">Made by Technical One</p>
      </footer>
    </section>
  );
};

export default Contact;