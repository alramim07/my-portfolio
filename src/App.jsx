import React from 'react';

// Tech stack with exact original icons & branding colors
const techStack = [
  { 
    name: 'Tailwindcss', 
    color: '#38BDF8',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3 0-5.5 1.5-6.5 4.5 1-1.5 2.5-2 4-1.5 1 .3 1.7 1.1 2.5 1.9C13.3 12.2 14.8 14 18 14c3 0 5.5-1.5 6.5-4.5-1 1.5-2.5 2-4 1.5-1-.3-1.7-1.1-2.5-1.9C16.7 7.8 15.2 6 12 6zm-6 8c-3 0-5.5 1.5-6.5 4.5 1-1.5 2.5-2 4-1.5 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.8 3.1 6 3.1 3 0 5.5-1.5 6.5-4.5-1 1.5-2.5 2-4 1.5-1-.3-1.7-1.1-2.5-1.9C10.7 15.8 9.2 14 6 14z"/>
      </svg>
    )
  },
  { 
    name: 'Next', 
    color: '#ffffff',
    icon: (
      <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center font-bold text-[10px]">
        N
      </div>
    )
  },
  { 
    name: 'Nodejs', 
    color: '#43853d',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.3L4.2 8.8v8.9L12 22.1l7.8-4.5V8.8L12 4.3z"/>
      </svg>
    )
  },
  { 
    name: 'HTML5', 
    color: '#e34f26',
    icon: (
      <div className="bg-[#e34f26] text-white text-[10px] font-bold px-1 rounded-sm">5</div>
    )
  },
  { 
    name: 'CSS3', 
    color: '#1572b6',
    icon: (
      <div className="bg-[#1572b6] text-white text-[10px] font-bold px-1 rounded-sm">3</div>
    )
  },
  { 
    name: 'JavaScript', 
    color: '#f7df1e',
    icon: (
      <div className="bg-[#f7df1e] text-black text-[10px] font-bold px-1 rounded-sm">JS</div>
    )
  },
  { 
    name: 'Git', 
    color: '#F05032',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.6L10.6 2.6c.8-.8 2.1-.8 2.8 0l1.9 1.9-2.5 2.5c-.6-.2-1.3-.1-1.8.4-.5.5-.6 1.2-.4 1.8L8.2 11.6c-.6-.2-1.3-.1-1.8.4-.7.7-.7 1.9 0 2.6.7.7 1.9.7 2.6 0 .5-.5.6-1.2.4-1.8l2.4-2.4c.6.2 1.3.1 1.8-.4.5-.5.6-1.2.4-1.8l2.5-2.5 5.9 5.9c.8.8.8 2.1 0 2.8l-8 8c-.8.8-2.1.8-2.8 0l-8.8-8.8c-.8-.8-.8-2.1 0-2.8z"/>
      </svg>
    )
  },
  { 
    name: 'Supabase', 
    color: '#3ECF8E',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.2 0v10.9h9.1L8.5 24v-10.9H0L13.2 0z"/>
      </svg>
    )
  },
  { 
    name: 'Mysql', 
    color: '#00758F',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  { 
    name: 'Bash', 
    color: '#ffffff',
    icon: (
      <div className="border border-white/40 text-[9px] font-mono px-1 rounded">$_</div>
    )
  }
];

export default function App() {
  return (
    <div className="bg-[#0b0b0c] text-white min-h-screen flex flex-col justify-between selection:bg-[#00f59b] selection:text-black">
      
      {/* 1. Header / Top Pill Navigation with tight 24px top spacing */}
      <header className="w-full flex justify-center pt-6">
        <nav className="flex items-center gap-7 px-5 py-1.5 rounded-full bg-[#131416]/80 backdrop-blur-md border border-white/5 shadow-lg">
          <a href="#home" className="flex items-center gap-2 text-[13px] font-normal text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] shadow-[0_0_8px_#00f59b]"></span>
            Home
          </a>
          <a href="#projects" className="text-[13px] font-normal text-[#8e8f93] hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-[13px] font-normal text-[#8e8f93] hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* 2. Hero Section - EXACT 1:1 Pixel & Gaps Matching */}
      <main className="w-full max-w-[1280px] mx-auto px-10 md:px-14 flex-1 flex flex-col justify-center py-6">
        
        {/* Top greeting text */}
        <p className="text-[15px] text-[#7c7d81] font-normal mb-2 tracking-normal">
          Hi, I'm Al Ramim
        </p>

        {/* 2-Column Exact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          
          {/* Left Column: Big Title */}
          <div>
            <h1 className="text-[54px] md:text-[68px] lg:text-[76px] font-bold leading-[1.05] tracking-tight text-white mb-0">
              Software<br />Developer
            </h1>
          </div>

          {/* Right Column: Paragraph aligned with Title */}
          <div className="flex items-center">
            <p className="text-[20px] md:text-[23px] text-[#717276] leading-[1.4] font-normal tracking-tight">
              Transforming ideas into interactive and seamless digital experiences with cutting-edge{' '}
              <span className="text-[#a855f7] font-normal">backend</span> development.
            </p>
          </div>
        </div>

        {/* Social Icons row with exact 24px top gap */}
        <div className="flex items-center gap-3.5 mt-6">
          {/* GitHub */}
          <a 
            href="https://github.com/alramim07" 
            target="_blank" 
            rel="noreferrer"
            className="w-11 h-11 rounded-lg bg-[#141517] border border-white/5 flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#00d8f6]/40 transition-all hover:-translate-y-0.5"
            title="GitHub"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-11 h-11 rounded-lg bg-[#141517] border border-white/5 flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#00d8f6]/40 transition-all hover:-translate-y-0.5"
            title="LinkedIn"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* Medium / Mail */}
          <a 
            href="mailto:sakibramim4@gmail.com"
            className="w-11 h-11 rounded-lg bg-[#141517] border border-white/5 flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#00d8f6]/40 transition-all hover:-translate-y-0.5"
            title="Contact Mail"
          >
            <span className="font-serif font-black text-base text-[#9ca3af] hover:text-white leading-none">M</span>
          </a>
        </div>
      </main>

      {/* 3. Infinite Tech Stack Strip with exact spacing */}
      <section className="w-full border-t border-white/5 py-6 overflow-hidden relative bg-[#09090a]">
        {/* Soft edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0b0b0c] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#0b0b0c] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 px-8 text-[#5c5d61] font-medium text-[15px] hover:text-white transition-colors cursor-default select-none"
            >
              <div style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
