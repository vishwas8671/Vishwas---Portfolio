import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy, FaCalendarAlt } from 'react-icons/fa';

export default function About() {
  const stats = [
    { label: 'DSA Solved', value: '250+', detail: 'LeetCode, CodeChef, GFG', icon: <FaCode className="text-cyan-400 h-6 w-6" /> },
    { label: 'MERN Projects', value: '2+', detail: 'Production-ready apps', icon: <FaGraduationCap className="text-indigo-400 h-6 w-6" /> },
    { label: 'GSSoC 2026', value: 'Selected', detail: 'Open-source Contributor', icon: <FaTrophy className="text-emerald-400 h-6 w-6" /> },
    { label: 'B.Tech CGPA', value: '8.03', detail: 'ABES Engineering College', icon: <FaGraduationCap className="text-purple-400 h-6 w-6" /> },
  ];

  const timeline = [
    {
  year: '2023 - Present',
  title: 'B.Tech in CSE-AIML',
  institution: 'ABES Engineering College, Ghaziabad',
  description:
    'Pursuing Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning. Focused on MERN stack development, backend engineering, REST APIs, DSA, and scalable software systems.',
  badge: 'CGPA: 8.03'
},
{
  year: '2022 - 2023',
  title: 'Class XII - Science (CBSE)',
  institution: 'Jawahar Navodaya Vidyalaya, Bijnor',
  description:
    'Completed higher secondary education with Science stream, developing strong analytical thinking, problem-solving abilities, and technical foundations for engineering studies.',
  badge: '87%'
},
{
  year: '2020 - 2021',
  title: 'Class X - CBSE',
  institution: 'Jawahar Navodaya Vidyalaya, Bijnor',
  description:
    'Achieved exceptional academic performance with a near-perfect score, demonstrating discipline, consistency, and strong conceptual understanding across subjects.',
  badge: '99.6%'
}
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } }
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-slate-950/60 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Myself</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Intro & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-200">
                Engineering student with a passion for building robust backend services.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I am a B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning at ABES Engineering College. My primary area of focus lies in modern Full Stack Engineering using the MERN ecosystem and developing secure, clean REST APIs.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I combine analytical algorithmic thinking (with 250+ DSA problems solved) with software engineering principles to build systems that handle edge-cases cleanly, scale properly, and perform validation optimally.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="glass-card glass-card-hover p-5 rounded-xl border border-slate-800/80 text-left flex flex-col justify-between h-36"
                >
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {stat.icon}
                    </span>
                    <span className="text-3xl font-extrabold text-white tracking-tight font-mono">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">{stat.label}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl border border-slate-800/80 p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <FaCalendarAlt className="text-cyan-400 h-5 w-5" />
                <span>Academic Journey</span>
              </h3>

              <div className="relative border-l border-slate-800/80 ml-3 space-y-8 pb-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8">
                    {/* Timeline bullet */}
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50">
                        {item.year}
                      </span>
                      <span className="text-xs text-indigo-300 font-semibold bg-indigo-950/20 px-2.5 py-0.5 rounded-full border border-indigo-900/30">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-gray-200">
                      {item.title}
                    </h4>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">
                      {item.institution}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
