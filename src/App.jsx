import React from 'react';

const techItems = [
  {
    name: 'Astro',
    color: '#FF5D01',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  {
    name: 'Vue',
    color: '#41B883',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 3h3.5L12 14.2 18.5 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12 6.5 3z"/>
      </svg>
    )
  },
  {
    name: 'React',
    color: '#61DAFB',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-7c-5 0-9.2 1.3-11.4 3.3-.4.4-.7.8-.9 1.3-.4.8-.4 1.7 0 2.5.5 1 1.4 1.9 2.7 2.7-.4.8-.6 1.7-.6 2.6 0 1.9.9 3.7 2.4 5 1.5 1.3 3.6 2.1 6 2.4-.3.9-.4 1.8-.4 2.7 0 2.8 1.8 5 4.5 5.5 1 .2 2 .1 3-.3 1.9-.8 3.3-2.3 4-4.2.8.3 1.7.5 2.6.5 2.8 0 5-1.8 5.5-4.5.2-1 .1-2-.3-3-.8-1.9-2.3-3.3-4.2-4 .3-.8.5-1.7.5-2.6 0-2.8-1.8-5-4.5-5.5-1-.2-2-.1-3 .3-1.9.8-3.3 2.3-4 4.2-.8-.3-1.7-.5-2.6-.5zm0 1.5c2.3 0 4.4.8 5.9 2.2 1.5 1.4 2.3 3.3 2.3 5.4 0 2.1-.8 4-2.3 5.4-1.5 1.4-3.6 2.2-5.9 2.2s-4.4-.8-5.9-2.2C4.6 18.1 3.8 16.2 3.8 14.1c0-2.1.8-4 2.3-5.4 1.5-1.4 3.6-2.2 5.9-2.2z"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    svg: (
      <span className="font-bold text-sm bg-[#3178C6] text-white px-1.5 py-0.5 rounded leading-none opacity-80 group-hover:scale-110 transition-transform">TS</span>
    )
  },
  {
    name: 'Tailwindcss',
    color: '#38BDF8',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3 0-5.5 1.5-6.5 4.5 1-1.5 2.5-2 4-1.5 1 .3 1.7 1.1 2.5 1.9C13.3 12.2 14.8 14 18 14c3 0 5.5-1.5 6.5-4.5-1 1.5-2.5 2-4 1.5-1-.3-1.7-1.1-2.5-1.9C16.7 7.8 15.2 6 12 6zm-6 8c-3 0-5.5 1.5-6.5 4.5 1-1.5 2.5-2 4-1.5 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.8 3.1 6 3.1 3 0 5.5-1.5 6.5-4.5-1 1.5-2.5 2-4 1.5-1-.3-1.7-1.1-2.5-1.9C10.7 15.8 9.2 14 6 14z"/>
      </svg>
    )
  },
  {
    name: 'Next',
    color: '#ffffff',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.8 17.5l-6.2-8.3v8.3H9.8V6.5h1.8l6.2 8.3V6.5h1.8v11h-1.8z"/>
      </svg>
    )
  },
  {
    name: 'Nodejs',
    color: '#339933',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.3L4.2 8.8v8.9L12 22.1l7.8-4.5V8.8L12 4.3z"/>
      </svg>
    )
  },
  {
    name: 'HTML5',
    color: '#E34F26',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 5.3H5l.4 4.4h11.2l-.4 4.5-4.2 1.2-4.2-1.2-.2-2.7H3.9l.4 5.3 7.7 2.1 7.7-2.1 1-11.2z"/>
      </svg>
    )
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 5.3H5l.4 4.4h11.2l-.4 4.5-4.2 1.2-4.2-1.2-.2-2.7H3.9l.4 5.3 7.7 2.1 7.7-2.1 1-11.2z"/>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22 17.5c0-2.8-1.7-4.1-4.2-4.1-1.3 0-2.3.5-2.8 1.2l1.6 1c.3-.5.7-.8 1.2-.8 1 0 1.6.5 1.6 1.4v.1c-.5-.3-1.2-.4-1.9-.4-2 0-3.3 1.1-3.3 2.7 0 1.5 1.1 2.5 2.6 2.5 1.2 0 2-.6 2.4-1.4h.1v1.2H22v-3.4zm-2.6 2.1c0 .8-.7 1.3-1.6 1.3-.8 0-1.3-.4-1.3-1.1 0-.7.6-1.1 1.4-1.1.6 0 1.1.1 1.5.3v.6zM7.5 12h2.7v7.2c0 1.6-.9 2.5-2.5 2.5-1.1 0-2-.5-2.4-1.2l1.8-1.1c.2.4.4.6.7.6.4 0 .7-.2.7-.8V12z"/>
      </svg>
    )
  },
  {
    name: 'Git',
    color: '#F05032',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.6L10.6 2.6c.8-.8 2.1-.8 2.8 0l1.9 1.9-2.5 2.5c-.6-.2-1.3-.1-1.8.4-.5.5-.6 1.2-.4 1.8L8.2 11.6c-.6-.2-1.3-.1-1.8.4-.7.7-.7 1.9 0 2.6.7.7 1.9.7 2.6 0 .5-.5.6-1.2.4-1.8l2.4-2.4c.6.2 1.3.1 1.8-.4.5-.5.6-1.2.4-1.8l2.5-2.5 5.9 5.9c.8.8.8 2.1 0 2.8l-8 8c-.8.8-2.1.8-2.8 0l-8.8-8.8c-.8-.8-.8-2.1 0-2.8z"/>
      </svg>
    )
  },
  {
    name: 'Supabase',
    color: '#3ECF8E',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.2 0v10.9h9.1L8.5 24v-10.9H0L13.2 0z"/>
      </svg>
    )
  },
  {
    name: 'Mysql',
    color: '#00758F',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  {
    name: 'Bash',
    color: '#4EAA25',
    svg: (
      <svg className="h-7 w-auto object-contain opacity-60 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 4l4 4-4 4m6 0h6"/>
      </svg>
    )
  }
];

export default function App() {
  return (
    <div className="bg-[#000000] text-[#ffffff] min-h-screen sm:px-28 lg:px-20 px-9 flex flex-col justify-between overflow-x-hidden">
      
      {/* 1. Exact Nav from source code */}
      <div className="flex justify-center w-full">
        <nav id="main-nav" className="fixed left-1/2 -translate-x-1/2 z-[100] bg-[#000000] border border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[80%] max-w-[528px]">
          <div className="container mx-auto flex justify-center items-center p-3">
            <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6">
              
              <li className="flex-1 md:flex-none">
                <a href="#home" className="flex flex-col items-center gap-1 text-[#ffffff] transition-colors text-xs md:text-base relative group">
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A9FF5B] hidden md:block"></div>
                  <span className="hidden md:inline-block">Home</span>
                  <span className="md:hidden">Home</span>
                </a>
              </li>

              <li className="flex-1 md:flex-none">
                <a href="#projects" className="flex flex-col items-center gap-1 text-[#7c7c82] hover:text-[#ffffff] transition-colors text-xs md:text-base relative group">
                  <span className="hidden md:inline-block">Projects</span>
                  <span className="md:hidden">Projects</span>
                </a>
              </li>

              <li className="flex-1 md:flex-none">
                <a href="#contact" className="flex flex-col items-center gap-1 text-[#7c7c82] hover:text-[#ffffff] transition-colors text-xs md:text-base relative group">
                  <span className="hidden md:inline-block">Contact</span>
                  <span className="md:hidden">Contact</span>
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </div>

      {/* 2. Hero Section - EXACT CONTAINER & CLASSES FROM SOURCE CODE */}
      <section className="text-[#ffffff] mt-12 md:mt-0 flex-1 flex flex-col justify-center" id="home">
        <div className="max-w-5xl mx-auto w-full space-y-8 md:py-36 pb-14">
          
          {/* EXACT DIV 1: class="text-left space-y-4" */}
          <div className="text-left space-y-4">
            <p className="text-md md:text-lg text-[#7c7c82]">Hi, I'm Al Ramim</p>
            
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4">
              <h1 className="text-[#ffffff] text-5xl md:text-6xl font-medium text-pretty leading-none">
                Software <br /> Developer
              </h1>
              <p className="text-md md:text-2xl text-[#7c7c82]">
                Transforming ideas into interactive and seamless digital experiences with cutting-edge{' '}
                <span className="text-[#a855f7]">backend</span> development.
              </p>
            </div>

            {/* Social Buttons - EXACT CLASSES & SVG SIZES FROM SOURCE CODE */}
            <div className="flex justify-start gap-2 pt-3 md:pt-6">
              {/* GitHub */}
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://github.com/alramim07" 
                aria-label="GitHub" 
                className="text-[#7c7c82] hover:text-white transition duration-300 ease-in-out border border-white/10 p-3 rounded-xl bg-[#1414149c] hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://linkedin.com" 
                aria-label="LinkedIn" 
                className="text-[#7c7c82] hover:text-white transition duration-300 ease-in-out border border-white/10 p-3 rounded-xl bg-[#1414149c] hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:sakibramim4@gmail.com" 
                aria-label="Email" 
                className="text-[#7c7c82] hover:text-white transition duration-300 ease-in-out border border-white/10 p-3 rounded-xl bg-[#1414149c] hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/>
                </svg>
              </a>
            </div>
          </div>

          {/* EXACT DIV 2: class="relative overflow-x-hidden py-8" */}
          <div className="relative overflow-x-hidden py-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000000] to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000000] to-transparent z-20"></div>
            
            <div className="flex animate-scroll w-max will-change-transform">
              {/* Clone twice for seamless continuous loop */}
              {[...techItems, ...techItems].map((item, index) => (
                <div key={index} className="flex items-center gap-2 pr-12 md:pr-20 group transition-all duration-300">
                  {item.svg}
                  <span className="text-lg font-medium text-[#7c7c82] whitespace-nowrap group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
