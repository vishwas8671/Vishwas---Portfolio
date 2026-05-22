import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading/compiling phase for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  const sectionReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center font-mono select-none"
          >
            <div className="w-16 h-16 border-4 border-cyan-500/10 border-t-cyan-400 rounded-full animate-spin mb-6" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.2, repeatType: 'reverse' }}
              className="text-cyan-400 text-xs sm:text-sm tracking-widest font-semibold"
            >
              COMPILE_PORTFOLIO // VISHWAS_RAJPUT
            </motion.div>
          </motion.div>
        ) : (
          <div className="min-h-screen text-slate-100 select-none overflow-x-hidden relative">
            {/* Interactive Effects */}
            <ParticleBackground />
            <CursorGlow />
            
            {/* Layout Navigation */}
            <Navbar />
            
            {/* Core Sections with Scroll-Reveal Wrappers */}
            <Hero />
            
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <About />
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Skills />
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Achievements />
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Certifications />
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Contact />
            </motion.div>

            {/* Layout Footer */}
            <Footer />

            {/* Utility Floating Buttons */}
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
