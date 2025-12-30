"use client"

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code2, Database, Wrench, Terminal } from 'lucide-react';

export default function DarkPortfolio() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express', 'PHP', 'Laravel'],
    database: ['MySQL', 'MongoDB', 'Supabase', 'phpMyAdmin'],
    tools: ['Git', 'VS Code', 'Figma', 'Responsive Design', 'REST APIs']
  };

  const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with user authentication...',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    liveUrl: '#',    // ← ADD THIS
    githubUrl: '#'  // ← ADD THIS
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Collaborative project management tool...',
    technologies: ['Next.js', 'Express', 'MySQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
   liveUrl: '#',    // ← ADD THIS
    githubUrl: '#'  // ← ADD THIS
  },
  {
    id: 3,
    title: 'Restaurant Booking App',
    description: 'Modern reservation system...',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    liveUrl: '#',    // ← ADD THIS
    githubUrl: '#'  // ← ADD THIS
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Custom content management system for creative professionals to showcase their work.',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: '#',    // ← ADD THIS
    githubUrl: '#'  // ← ADD THIS
  },
  {
    id: 5,
    title: 'Real Estate Listing Platform',
    description: 'Property search and listing platform with advanced filtering and map integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    liveUrl: '#',    // ← ADD THIS
    githubUrl: '#'  // ← ADD THIS
  },
  {
    id: 6,
    title: 'Job-Tracker Dashboard',
    description: 'A dynamc dashboard for tracking your every interview and engagement with different firm.',
    technologies: ['Next.js', 'Express', 'MySQL', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    liveUrl: 'https://myjobtracker-ten.vercel.app',
    githubUrl: 'https://github.com/crestedweb/jobtracker'
  }
  // ... add URLs for all other projects
];

  const categoryIcons = {
    frontend: <Code2 className="w-5 h-5" />,
    backend: <Terminal className="w-5 h-5" />,
    database: <Database className="w-5 h-5" />,
    tools: <Wrench className="w-5 h-5" />
  };

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Databases',
    tools: 'UI/UX & Tools'
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
               
              </div>
              <span className="text-gray-100 font-semibold tracking-tight">Be Inspired</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide">Skills</a>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide">About</a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-medium tracking-wide">Available for Opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gray-100">MICHAEL OPOTO</span>
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <p className="text-xl text-gray-400 font-light">Full-Stack Web Developer</p>
              </div>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Building scalable web applications with modern technologies. 
                Specializing in end-to-end development, from concept to production deployment.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-all font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  View Projects
                </a>
                <a 
  href="/MichaelCV.pdf" 
  download="John_Developer_CV.pdf"
  className="px-6 py-3 bg-transparent text-gray-100 rounded-lg hover:bg-gray-800/50 transition-all font-semibold border border-gray-700 hover:border-gray-600 flex items-center gap-2"
>
  <Download className="w-4 h-4" />
  Download CV
</a>
                <a 
                  href="https://github.com/crestedweb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent text-gray-100 rounded-lg hover:bg-gray-800/50 transition-all font-semibold border border-gray-700 hover:border-gray-600 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="relative z-10 flex justify-center">
  <div className="relative">
    {/* Glow effect behind */}
    <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-3xl"></div>
    
    {/* Profile picture - Round */}
    <div className="relative w-72 h-72 rounded-full border-4 border-cyan-500/50 overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-300 bg-gray-900">
      <img 
        src="/profile.jpg" 
        alt="Michael Opoto - Full Stack Developer"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Expertise in modern web development technologies and frameworks
            </p>
          </div>

          {/* Skill Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border ${
                  activeSkillCategory === category
                    ? 'bg-cyan-500 text-black border-cyan-500'
                    : 'bg-gray-950 text-gray-400 border-gray-900 hover:border-gray-800 hover:bg-gray-900'
                }`}
              >
                {categoryIcons[category]}
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills[activeSkillCategory].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-gray-950 rounded-xl border border-gray-900 hover:border-cyan-500/50 transition-all hover:bg-gray-900 hover:-translate-y-1"
              >
                <p className="text-gray-100 font-semibold text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Production-ready applications demonstrating full-stack capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-950 rounded-2xl overflow-hidden border border-gray-900 hover:border-cyan-500/50 transition-all hover:-translate-y-2"
              >
                <div className="aspect-video bg-gray-900 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900 text-cyan-400 border border-gray-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
  <a 
    href={project.liveUrl}     
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 px-4 py-2 bg-gray-900 text-gray-100 rounded-lg hover:bg-gray-800 transition-all font-medium text-sm flex items-center justify-center gap-2 border border-gray-800 hover:border-gray-700"
  >
    <ExternalLink className="w-4 h-4" />
    Live View
  </a>
  <a 
    href={project.githubUrl}  
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-black text-gray-100 rounded-lg hover:bg-gray-900 transition-all font-medium text-sm flex items-center gap-2 border border-gray-900 hover:border-gray-800"
  >
    <Github className="w-4 h-4" />
    Code
  </a>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
              About <span className="text-cyan-400">Me</span>
            </h2>
          </div>
          <div className="bg-gray-950 rounded-2xl p-8 lg:p-12 border border-gray-900">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a Full-Stack Web Developer focused on building efficient, scalable applications 
              that solve real business problems. My approach combines technical precision with 
              practical problem solving to deliver solutions that work.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With expertise spanning both frontend and backend development, I handle the complete 
              development lifecycle. I work with modern frameworks and follow industry best practices 
              to ensure maintainable, high quality code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond coding, I contribute to open source projects and stay current with emerging 
              technologies. I believe in writing clean, well-documented code and building systems 
              designed for longevity and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-lg text-gray-400">
              Open to new opportunities and collaborations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:john.developer@example.com"
              className="group p-8 bg-gray-950 rounded-2xl border border-gray-900 hover:border-cyan-500/50 transition-all hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-all">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">Email</h3>
              <p className="text-gray-400 text-sm break-all">crestedweb@gmail.com</p>
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-950 rounded-2xl border border-gray-900 hover:border-cyan-500/50 transition-all hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-all">
                <Github className="w-8 h-8 text-gray-100" />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">github.com/crestedweb</p>
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-950 rounded-2xl border border-gray-900 hover:border-cyan-500/50 transition-all hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-all">
                <Linkedin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">@Michaelopoto</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 lg:px-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2023 Michael Opoto. Built with Next.js & Tailwind CSS
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Privacy</a>
              <span className="text-gray-800">•</span>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
