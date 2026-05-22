import { motion } from 'framer-motion';
import { 
  FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaNodeJs, FaServer, FaGitAlt, FaGithub, FaTerminal, FaCode, 
  FaBug, FaCheckDouble, FaCogs, FaCubes
} from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
      glow: 'glow-cyan',
      skills: [
        { name: 'C++', icon: <SiCplusplus className="text-blue-400" />, level: 85 },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 90 },
        { name: 'Python', icon: <FaPython className="text-sky-400" />, level: 75 }
      ]
    },
    {
      title: 'Frontend Development',
      color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
      glow: 'glow-indigo',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 88 },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 92 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 88 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 90 },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" />, level: 80 }
      ]
    },
    {
      title: 'Backend & APIs',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
      glow: 'glow-emerald',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85 },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" />, level: 85 },
        { name: 'REST API Design', icon: <FaServer className="text-rose-400" />, level: 90 }
      ]
    },
    {
      title: 'Databases',
      color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      glow: 'glow-purple',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500" />, level: 85 },
        { name: 'MySQL', icon: <SiMysql className="text-sky-500" />, level: 80 }
      ]
    },
    {
      title: 'Testing & QA',
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
      glow: 'glow-amber',
      skills: [
        { name: 'Postman API Testing', icon: <SiPostman className="text-orange-500" />, level: 88 },
        { name: 'Test Case Design', icon: <FaBug className="text-rose-500" />, level: 85 },
        { name: 'Edge Case Analysis', icon: <FaTerminal className="text-amber-500" />, level: 85 },
        { name: 'Data Validation', icon: <FaCheckDouble className="text-emerald-400" />, level: 88 }
      ]
    },
    {
      title: 'Tools & Concepts',
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
      glow: 'glow-indigo',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-600" />, level: 88 },
        { name: 'VS Code / Debugging', icon: <FaCode className="text-blue-400" />, level: 90 },
        { name: 'OOP', icon: <FaCogs className="text-purple-400" />, level: 85 },
        { name: 'SDLC', icon: <FaCubes className="text-indigo-400" />, level: 82 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 50, damping: 12 } 
    }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-slate-950/40 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Categorized skillsets reflecting backend capabilities, QA accuracy, frontend logic, and developer tools.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass-card p-6 rounded-2xl border bg-gradient-to-br ${category.color} ${category.glow} hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-6 tracking-wide pb-2 border-b border-slate-800/80">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                        <div className="flex items-center space-x-2 text-gray-200">
                          <span className="text-lg">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-gray-400 font-mono text-xs">{skill.level}%</span>
                      </div>
                      
                      {/* Custom Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-850">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
