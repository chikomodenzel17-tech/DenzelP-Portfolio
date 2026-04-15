import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  ChevronRight,
  Download,
  GraduationCap,
  Briefcase,
  User,
  Sparkles
} from "lucide-react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
}

// --- Data ---
const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
    color: "bg-beige/30 text-charcoal border-beige"
  },
  {
    title: "Backend",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    color: "bg-charcoal/5 text-charcoal border-charcoal/10"
  },
  {
    title: "Tools & Others",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Git", "Docker", "AWS", "Firebase", "Vite"],
    color: "bg-beige/10 text-charcoal border-beige/20"
  }
];

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A smart task management system that uses LLMs to categorize and prioritize tasks based on natural language input.",
    tags: ["React", "Node.js", "Gemini API", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/task/800/600"
  },
  {
    id: 2,
    title: "Real-time Collaborative Editor",
    description: "A Google Docs clone supporting multiple users editing the same document simultaneously with live cursor tracking.",
    tags: ["TypeScript", "Socket.io", "Express", "Redis"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/editor/800/600"
  },
  {
    id: 3,
    title: "Crypto Portfolio Tracker",
    description: "A dashboard for tracking cryptocurrency investments with real-time price updates and historical data visualization.",
    tags: ["Next.js", "D3.js", "CoinGecko API", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/crypto/800/600"
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between glass rounded-full px-6 py-3 shadow-sm ${scrolled ? "border-charcoal/10 shadow-lg shadow-charcoal/5" : "border-transparent"}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-charcoal rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-whitesmoke" />
            </div>
            <span className="font-bold text-xl tracking-tight">Chikomo Denzel P</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="bg-charcoal text-whitesmoke px-5 py-2 rounded-full text-sm font-medium hover:bg-charcoal/90 transition-all active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige/30 border border-beige text-charcoal text-xs font-semibold mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>Open for Industrial Internship 2026</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Hi, I'm <span className="text-charcoal underline decoration-beige underline-offset-8">Chikomo Denzel P</span>. Building the future of the web.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-charcoal/70 mb-10 max-w-2xl leading-relaxed"
          >
            Aspiring Software Engineer passionate about creating scalable applications and solving complex problems. Currently seeking an internship to apply my skills in a professional environment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="bg-charcoal text-whitesmoke px-8 py-4 rounded-2xl font-semibold hover:bg-charcoal/90 transition-all shadow-lg shadow-charcoal/10 flex items-center gap-2 group"
            >
              View My Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" 
              className="bg-white border border-charcoal/10 text-charcoal px-8 py-4 rounded-2xl font-semibold hover:bg-whitesmoke transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex items-center gap-6"
          >
            <a href="#" className="p-3 rounded-full border border-charcoal/10 text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 hover:bg-beige/10 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full border border-charcoal/10 text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 hover:bg-beige/10 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full border border-charcoal/10 text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 hover:bg-beige/10 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-beige/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-charcoal/70 max-w-md">
              A comprehensive toolkit of modern technologies I've mastered through projects and self-learning.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-charcoal bg-beige px-4 py-2 rounded-full border border-charcoal/10">
            <Layers className="w-4 h-4" />
            <span>Full-Stack Ready</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-whitesmoke text-charcoal/70 text-sm font-medium group-hover:bg-beige group-hover:text-charcoal transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Real-world applications I've built to solve problems and explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-charcoal/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-whitesmoke rounded-full text-charcoal hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="p-3 bg-whitesmoke rounded-full text-charcoal hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-charcoal transition-colors">{project.title}</h3>
              <p className="text-charcoal/70 text-sm mb-4 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-charcoal/40 border border-charcoal/10 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="about" className="py-24 bg-charcoal text-whitesmoke overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-beige rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-beige rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me & Education</h2>
            <p className="text-whitesmoke/70 text-lg mb-8 leading-relaxed">
              I'm a final-year Computer Science student with a deep interest in software architecture and user experience. I love turning complex ideas into simple, beautiful, and functional code.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-charcoal/50 border border-whitesmoke/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-beige" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">B.Sc. in Computer Science</h3>
                  <p className="text-whitesmoke/50 text-sm mb-2">University of Technology • 2021 — 2025</p>
                  <p className="text-whitesmoke/40 text-sm">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-charcoal/50 border border-whitesmoke/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-beige" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Seeking Internship</h3>
                  <p className="text-whitesmoke/50 text-sm mb-2">Industrial Placement • 2026</p>
                  <p className="text-whitesmoke/40 text-sm">Looking for opportunities to contribute to real-world projects and learn from experienced engineers.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-whitesmoke/10 bg-charcoal/50">
              <img 
                src="https://picsum.photos/seed/profile/800/800" 
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-beige p-8 rounded-3xl hidden md:block">
              <div className="text-4xl font-bold mb-1 text-charcoal">3.8</div>
              <div className="text-charcoal/60 text-sm font-medium uppercase tracking-widest">GPA Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[2.5rem] p-8 md:p-16 border-zinc-200 shadow-2xl shadow-zinc-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
              <p className="text-zinc-600 text-lg mb-10">
                I'm currently available for internships and freelance projects. If you're interested in my work, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-zinc-600" />
                  </div>
                  <span className="text-zinc-900 font-medium">chikomodenzel17@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-zinc-600" />
                  </div>
                  <span className="text-zinc-900 font-medium">linkedin.com/in/devintern</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              <textarea 
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
              />
              <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">Chikomo Denzel P</span>
          </div>
          
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Chikomo Denzel P. Built with React & Tailwind.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
