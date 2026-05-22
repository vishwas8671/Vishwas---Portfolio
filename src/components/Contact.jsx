import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle, FaSpinner } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', message: '' });
      
      // Auto close success message after 4s
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-slate-950/40 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: CTA & Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Let's build scalable and impactful software together.
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Whether you're looking to hire a full-stack intern, discuss REST API optimizations, or brainstorm AI/ML solutions, I'd love to connect. Shoot me a message, and I'll reply within 24 hours.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-xl border border-slate-800/80 flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-850 text-cyan-400">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</h4>
                  <p className="text-sm font-semibold text-gray-200">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>

              <a 
                href="mailto:vishwas7906@gmail.com"
                className="glass-card p-4 rounded-xl border border-slate-800/80 flex items-center space-x-4 hover:border-cyan-500/35 transition-colors duration-300 block"
              >
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-850 text-cyan-400">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</h4>
                  <p className="text-sm font-semibold text-gray-200">vishwas7906@gmail.com</p>
                </div>
              </a>

              <div className="flex space-x-3 pt-2">
                <a 
                  href="https://www.linkedin.com/in/vishwasrajput/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 glass-card p-4 rounded-xl border border-slate-800/80 flex items-center justify-center space-x-2 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/35 transition-all duration-300"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/vishwas8671" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 glass-card p-4 rounded-xl border border-slate-800/80 flex items-center justify-center space-x-2 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/35 transition-all duration-300"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl border border-slate-800/80 p-6 sm:p-8 relative"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-left">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-900/60 border text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-slate-900 focus:border-cyan-500 transition-all duration-200 ${
                      errors.name ? 'border-rose-500/60' : 'border-slate-800/80'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-xs text-rose-500 font-medium">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-900/60 border text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-slate-900 focus:border-cyan-500 transition-all duration-200 ${
                      errors.email ? 'border-rose-500/60' : 'border-slate-800/80'
                    }`}
                    placeholder="id@gmail.com"
                  />
                  {errors.email && <span className="text-xs text-rose-500 font-medium">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-900/60 border text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-slate-900 focus:border-cyan-500 transition-all duration-200 ${
                      errors.message ? 'border-rose-500/60' : 'border-slate-800/80'
                    }`}
                    placeholder="Hii, Vishwas..."
                  />
                  {errors.message && <span className="text-xs text-rose-500 font-medium">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-80 pointer-events-none' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin h-4 w-4" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>

              {/* Success Overlay Panel */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-6 text-center z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="text-cyan-400 mb-4"
                    >
                      <FaCheckCircle className="h-16 w-16" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-sm text-gray-400 max-w-sm">
                      Thank you for reaching out. I'll get back to you shortly to discuss further!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
