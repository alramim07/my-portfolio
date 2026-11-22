import React from 'react';

const techStack = [
  { 
    name: 'Vue', 
    color: '#41B883',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 3h3.5L12 14.2 18.5 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12 6.5 3z"/>
      </svg>
    )
  },
  { 
    name: 'React', 
    color: '#61DAFB',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-7c-5 0-9.2 1.3-11.4 3.3-.4.4-.7.8-.9 1.3-.4.8-.4 1.7 0 2.5.5 1 1.4 1.9 2.7 2.7-.4.8-.6 1.7-.6 2.6 0 1.9.9 3.7 2.4 5 1.5 1.3 3.6 2.1 6 2.4-.3.9-.4 1.8-.4 2.7 0 2.8 1.8 5 4.5 5.5 1 .2 2 .1 3-.3 1.9-.8 3.3-2.3 4-4.2.8.3 1.7.5 2.6.5 2.8 0 5-1.8 5.5-4.5.2-1 .1-2-.3-3-.8-1.9-2.3-3.3-4.2-4 .3-.8.5-1.7.5-2.6 0-2.8-1.8-5-4.5-5.5-1-.2-2-.1-3 .3-1.9.8-3.3 2.3-4 4.2-.8-.3-1.7-.5-2.6-.5zm0 1.5c2.3 0 4.4.8 5.9 2.2 1.5 1.4 2.3 3.3 2.3 5.4 0 2.1-.8 4-2.3 5.4-1.5 1.4-3.6 2.2-5.9 2.2s-4.4-.8-5.9-2.2C4.6 18.1 3.8 16.2 3.8 14.1c0-2.1.8-4 2.3-5.4 1.5-1.4 3.6-2.2 5.9-2.2z"/>
      </svg>
    )
  },
  { 
    name: 'TypeScript', 
    color: '#3178C6',
    icon: (
      <span className="font-bold text-xs bg-[#3178C6] text-white px-1 py-0.5 rounded leading-none">TS</span>
    )
  },
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
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.8 17.5l-6.2-8.3v8.3H9.8V6.5h1.8l6.2 8.3V6.5h1.8v11h-1.8z"/>
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
    name: 'Git', 
    color: '#F05032',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.6L10.6 2.6c.8-.8 2.1-.8 2.8 0l1.9 1.9-2.5 2.5c-.6-.2-1.3-.1-1.8.4-.5.5-.6 1.2-.4 1.8L8.2 11.6c-.6-.2-1.3-.1-1.8.4-.7.7-.7 1.9 0 2.6.7.7 1.9.7 2.6 0 .5-.5.6-1.2.4-1.8l2.4-2.4c.6.2 1.3.1 1.8-.4.5-.5.6-1.2.4-1.8l2.5-2.5 5.9 5.9c.8.8.8 2.1 0 2.8l-8 8c-.8.8-2.1.8-2.8 0l-8.8-8.8c-.8-.8-.8-2.1 0-2.8z"/>
      </svg>
    )
  },
  { 
    name: 'Bash', 
    color: '#4EAA25',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 4l4 4-4 4m6 0h6"/>
      </svg>
    )
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0b0b0c] text-white">
      {/* 1. Top Pill Navigation */}
      <header className="w-full flex justify-center pt-8">
        <nav className="flex items-center gap-8 px-6 py-2 rounded-full bg-[#141517]/80 backdrop-blur-md border border-white/5 shadow-2xl">
          <a href="#home" className="flex items-center gap-2 text-sm font-medium text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]"></span>
            Home
          </a>
          <a href="#projects" className="text-sm font-medium text-[#71717a] hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium text-[#71717a] hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <main className="max-w-[1140px] w-full mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Intro + Title + Social Icons */}
          <div>
            <p className="text-base text-[#71717a] mb-4 font-normal">
              Hi, I'm Al Ramim
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 text-white">
              Software<br />Developer
            </h1>

            {/* Social Icons matching original dark-minimal */}
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a 
                href="https://github.com/alramim07" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#141517] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5"
                title="GitHub"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#141517] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:sakibramim4@gmail.com"
                className="w-12 h-12 rounded-xl bg-[#141517] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5"
                title="Email Dispatch"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Exact Paragraph Styling */}
          <div className="md:pl-4">
            <p className="text-xl md:text-2xl text-[#88888b] leading-relaxed font-normal">
              Transforming ideas into interactive and seamless digital experiences with cutting-edge{' '}
              <span className="text-[#a855f7] font-medium">backend</span> development.
            </p>
          </div>
        </div>
      </main>

      {/* 3. Tech Stack Infinite Auto-Scroll Bar */}
      <section className="w-full border-t border-white/5 py-8 overflow-hidden relative bg-[#09090a]">
        {/* Soft Side Blurs */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b0c] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0b0c] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {/* Double map for seamless infinite looping */}
          {[...techStack, ...techStack].map((tech, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 px-8 text-[#71717a] font-medium text-base hover:text-white transition-colors cursor-default select-none"
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
