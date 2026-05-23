import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";
import eduaiImg from "../assets/EduAI.png";
import fintrackImg from "../assets/FinTrack.png";
import studentPerformanceImg from '../assets/student-performance.png';

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Full Stack", "MERN", "AI/ML"];

  const projects = [
    {
      title: "EduAI — AI-Powered Learning Assistant",
      description:
        "An intelligent learning and interview preparation platform designed to help students practice coding and theory with automated evaluation.",
      tech: [
        "MERN Stack",
        "Gemini API",
        "JWT Auth",
        "REST APIs",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      categories: ["Full Stack", "MERN", "AI/ML"],
      image: eduaiImg,
      features: [
        "AI-driven interview sessions with interactive chat simulator.",
        "Dynamic question generation customized to standard topic domains.",
        "JWT-based authentication for securing user metrics.",
        "Rubric-based automated scoring with detailed answer explanations.",
        "Robust REST API endpoints and input validation middleware.",
      ],
      github:
        "https://github.com/vishwas8671/EduAI-AI-Powered-Learning-Interview-Preparation-Assistant",
      demo: "https://ai-powered-learning-interview-assis.vercel.app/",
    },
    {
      title: "FinTrack — Financial Transaction System",
      description:
        "A transaction management platform enabling users to track expenditures, analyze budgets, and structure finance details with secure access.",
      tech: [
        "MERN Stack",
        "MongoDB Aggregation",
        "RBAC Security",
        "REST APIs",
        "Express.js",
        "React.js",
      ],
      categories: ["Full Stack", "MERN"],
      image: fintrackImg,
      features: [
        "CRUD transaction dashboard with dynamic charting visualizers.",
        "Role-based access control (RBAC) to isolate user workspaces.",
        "Complex MongoDB aggregation pipelines for fast summaries.",
        "Scalable RESTful API design with global error-handling middlewares.",
        "Optimized database queries and robust error boundaries.",
      ],
      github:
        "https://github.com/vishwas8671/FinTrack-Financial-Transaction-Management-System",
      demo: "https://fin-track-financial-transaction-man.vercel.app/",
    },
    {
      title: "Student Performance Classification System",
      description:
        "A machine learning-based web application that predicts student academic performance categories using behavioral and academic indicators through an interactive Streamlit interface.",
      tech: [
        "Python",
        "Scikit-learn",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Joblib",
      ],
      categories: ["Machine Learning", "AI/ML", "Data Science"],
      image: studentPerformanceImg,
      features: [
        "Built and trained multiple ML classification models for student performance prediction.",
        "Interactive Streamlit dashboard for real-time performance classification.",
        "Synthetic dataset generation and preprocessing pipeline for training workflows.",
        "Model comparison, confusion matrix visualization, and feature importance analysis.",
        "Automated prediction system categorizing students as High Performer, Average Performer, or At Risk.",
      ],
      github:
        "https://github.com/vishwas8671/Student-Performance-Classification-using-AI-ML",
      demo: "https://student-performance-classification-using-ai-ml-wt2tftzrwuvgyze.streamlit.app/",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 bg-slate-950/60 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            A showcasing of production-ready web applications, featuring AI
            APIs, database aggregation, and backend security.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                filter === option
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                  : "bg-slate-900/60 text-gray-400 border-slate-800 hover:text-cyan-400 hover:border-cyan-550/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-slate-700/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Banner Image */}
                <div className="h-48 sm:h-56 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] uppercase tracking-wider font-semibold font-mono bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 px-2 py-0.5 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight hover:text-cyan-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                      {project.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start space-x-2 text-left"
                        >
                          <FaChevronRight className="text-cyan-400 h-3 w-3 mt-1 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-900">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono font-medium text-indigo-300 bg-indigo-950/20 border border-indigo-900/30 px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 border border-slate-800 text-gray-300 hover:text-white hover:border-slate-700 transition-all duration-200"
                      >
                        <FaGithub className="h-4 w-4" />
                        <span>GitHub Repo</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-semibold bg-cyan-950/30 border border-cyan-900/40 text-cyan-400 hover:bg-cyan-950/50 hover:border-cyan-500 transition-all duration-200"
                      >
                        <FaExternalLinkAlt className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
