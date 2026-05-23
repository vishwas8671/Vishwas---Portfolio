import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profileImg from '../assets/myphoto1.jpeg';

function TypingAnimation({ words, speed = 80, delay = 1500 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          word.slice(0, prev.length + 1)
        );
      }, speed);
    }

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex(
        (prev) => (prev + 1) % words.length
      );
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
      {currentText}
    </span>
  );
}

export default function Hero() {
  const typingWords = [
    'MERN Stack Developer',
    'DSA Enthusiast',
    'Open Source Contributor',
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10000ms]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT SECTION */}
        <motion.div
          className="lg:col-span-7 space-y-6 text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />

            <span>AVAILABLE FOR INTERNSHIPS & PLACEMENTS</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">
              Vishwas
            </span>
          </h1>

          {/* Typing */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 font-mono">
            I am a <TypingAnimation words={typingWords} />
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            AI/ML undergraduate skilled in MERN stack, REST APIs, and DSA,
            focused on building scalable full-stack applications, solving algorithmic problems,
            contributing to open source, and developing efficient real-world software systems.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-cyan-400">
              250+ DSA Problems
            </div>

            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-indigo-400">
              8.03 CGPA
            </div>

            <div className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-emerald-400">
              MERN Projects
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com/vishwas8671"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/vishwasrajput/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a
              href="https://leetcode.com/u/vishwas8671/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:scale-110"
            >
              <SiLeetcode className="h-5 w-5" />
            </a>

            <a
              href="mailto:vishwas706@gmail.com"
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Projects
            </button>

            <a
              href="/Vishwas_(CSE-AIML)_2027_Batch - Resume.pdf"
              download="Vishwas_(CSE-AIML)_2027_Batch - Resume.pdf"
              className="px-6 py-3 rounded-lg font-medium text-gray-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-lg font-medium text-cyan-400 bg-cyan-950/20 border border-cyan-800/40 hover:bg-cyan-950/40 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="lg:col-span-5 w-full flex justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: 0.2,
          }}
        >
          <div className="relative w-full max-w-md">

            {/* TERMINAL CARD */}
            <div
              className="
                relative
                glass-card
                rounded-2xl
                shadow-2xl
                overflow-hidden
                border border-slate-800/80
                pt-46
              "
            >

              {/* PROFILE IMAGE */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="p-[3px] rounded-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-[0_0_30px_rgba(15,23,42,0.45)]">
                  <img
                    src={profileImg}
                    alt="Vishwas Rajput"
                    className="
                      w-32 h-32 sm:w-40 sm:h-40
                      object-cover
                      rounded-2xl
                      bg-slate-900
                      hover:scale-105
                      transition-all duration-300
                    "
                  />
                </div>
              </div>

              {/* HEADER */}
              <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/85" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/85" />
                  <span className="w-3 h-3 rounded-full bg-green-500/85" />
                </div>

                <span className="text-xs text-gray-500 font-mono">
                  vishwas_profile.js
                </span>

                <span className="w-8" />
              </div>

              {/* TERMINAL BODY */}
              <div className="p-5 text-left font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-300">

                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span>{' '}
                  <span className="text-white">=</span>{' '}
                  {'{'}
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">name:</span>{' '}
                  <span className="text-emerald-300">'Vishwas'</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">role:</span>{' '}
                  <span className="text-emerald-300">
                    'MERN Stack & AI/ML Engineer'
                  </span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">education:</span> {'{'}
                </div>

                <div className="pl-8">
                  <span className="text-gray-400">degree:</span>{' '}
                  <span className="text-emerald-300">
                    'B.Tech CSE-AIML'
                  </span>,
                </div>

                <div className="pl-8">
                  <span className="text-gray-400">college:</span>{' '}
                  <span className="text-emerald-300">
                    'ABES Engineering College'
                  </span>,
                </div>

                <div className="pl-8">
                  <span className="text-gray-400">cgpa:</span>{' '}
                  <span className="text-amber-400">8.03</span>
                </div>

                <div className="pl-4">{'}'},</div>

                <div className="pl-4">
                  <span className="text-gray-400">skills:</span> [
                </div>

                <div className="pl-8 text-emerald-300">
                  'React', 'Node', 'Express',
                </div>

                <div className="pl-8 text-emerald-300">
                  'MongoDB', 'REST APIs', 'DSA'
                </div>

                <div className="pl-4">],</div>

                <div className="pl-4">
                  <span className="text-gray-400">contributions:</span>{' '}
                  <span className="text-emerald-300">
                    'GSSoC 2026 Contributor'
                  </span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">problemSolving:</span>{' '}
                  <span className="text-amber-400">true</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">motto:</span>{' '}
                  <span className="text-indigo-400">function</span>() {'{'}
                </div>

                <div className="pl-8 text-cyan-400">
                  return{' '}
                  <span className="text-emerald-300">
                    'Build scalable systems'
                  </span>;
                </div>

                <div className="pl-4">{'}'}</div>

                <div>{'};'}</div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}