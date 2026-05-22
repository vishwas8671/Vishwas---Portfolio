import { motion } from 'framer-motion';
import { FaAws, FaBrain, FaPython, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiCentos } from 'react-icons/si';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      skills: ['Cloud Computing', 'AWS EC2', 'S3 Storage', 'Cloud Security'],
      icon: <FaAws className="text-amber-500 h-8 w-8" />,
      color: 'hover:border-amber-500/30'
    },
    {
      title: 'AI Prompt Engineering',
      issuer: 'Industry Certified',
      skills: ['Prompt Design', 'LLM Tuning', 'AI Security', 'Context Optimization'],
      icon: <FaBrain className="text-cyan-400 h-8 w-8" />,
      color: 'hover:border-cyan-500/30'
    },
    {
      title: 'Data Science and Python',
      issuer: 'Mission Upskill India',
      skills: ['Python Coding', 'Data Visualization', 'Pandas & NumPy', 'Statistical Models'],
      icon: <FaPython className="text-blue-500 h-8 w-8" />,
      color: 'hover:border-blue-500/30'
    },
    {
      title: 'AI Fundamentals',
      issuer: 'Technical Foundation Program',
      skills: ['Machine Learning', 'Neural Networks', 'AI Ethics', 'Predictive Analysis'],
      icon: <FaCertificate className="text-indigo-400 h-8 w-8" />,
      color: 'hover:border-indigo-500/30'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } }
  };

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-slate-950/60 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Verifiable credentials confirming expertise in cloud architecture, AI workflows, and analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-card p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 flex items-start space-x-5 group hover:bg-slate-900/30 ${cert.color}`}
            >
              {/* Icon Container */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                {cert.icon}
              </div>

              {/* Text Info */}
              <div className="text-left space-y-3 flex-1">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors duration-200 mt-0.5">
                    {cert.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] sm:text-[11px] font-mono font-medium text-gray-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification indicator */}
                <div className="flex items-center text-xs text-emerald-400 font-semibold space-x-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Credential Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
