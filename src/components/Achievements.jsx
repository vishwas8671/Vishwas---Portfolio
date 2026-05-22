import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaGithub, FaAward } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

export default function Achievements() {
  const achievementsList = [
    {
      title: 'GSSoC 2026 Selected Contributor',
      subtitle: 'GirlScript Summer of Code',
      description: 'Selected as an official contributor for GSSoC 2026, working on real-world web applications and optimizing API systems.',
      icon: <FaGithub className="text-emerald-400 h-6 w-6" />,
      color: 'border-emerald-500/30 shadow-emerald-950/20'
    },
    {
      title: '250+ DSA Problems Solved',
      subtitle: 'Algorithms & Structures',
      description: 'Solved a combined total of over 250 coding problems, focusing on trees, graphs, dynamic programming, and hash tables.',
      icon: <FaCode className="text-cyan-400 h-6 w-6" />,
      color: 'border-cyan-500/30 shadow-cyan-950/20'
    },
    {
      title: 'LeetCode Rating 1550+',
      subtitle: 'Competitive Programming',
      description: 'Maintained an active LeetCode profile with a peak rating of 1550+, consistently competing in weekly programming contests.',
      icon: <SiLeetcode className="text-amber-500 h-6 w-6" />,
      color: 'border-amber-500/30 shadow-amber-950/20'
    },
    {
      title: 'Active Coding Profiles',
      subtitle: 'Multi-platform coder',
      description: 'Consistently practicing algorithms and systems across LeetCode, CodeChef, and GeeksforGeeks.',
      icon: <FaAward className="text-indigo-400 h-6 w-6" />,
      color: 'border-indigo-500/30 shadow-indigo-950/20'
    }
  ];

  const profiles = [
    { name: 'LeetCode', link: 'https://leetcode.com/u/vishwas8671/', icon: <SiLeetcode className="text-amber-500" /> },
    { name: 'CodeChef', link: 'https://www.codechef.com/users/vishwas7906', icon: <SiCodechef className="text-amber-800" /> },
    { name: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/profile/vishwaewse', icon: <SiGeeksforgeeks className="text-emerald-600" /> }
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
    <section id="achievements" className="py-20 px-4 md:px-8 bg-slate-950/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Milestones, coding benchmarks, and active participation in developer communities.
          </p>
        </div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-card p-6 rounded-2xl border ${item.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-900/40 flex items-start space-x-4`}
            >
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1.5 text-left">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-cyan-400 uppercase">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Profiles Links Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl border border-slate-800/80 p-6 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Track my live coding progress</h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Explore contest ratings, problem submissions, and active streaks.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {profiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 border border-slate-800 text-gray-300 hover:text-white hover:border-slate-700 transition-all duration-200"
              >
                <span className="text-lg">{profile.icon}</span>
                <span>{profile.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
