import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';
import profilePhoto from './assets/SUR_5996.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
          <div className="absolute inset-0 bg-grid"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-indigo-600">Your Name</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-8">
                Full Stack Developer crafting beautiful and functional web experiences
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                  Get in touch
                </a>
                <a href="#projects" className="border border-gray-300 px-6 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition">
                  View my work
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:saisanjaybandarupalli.a@gmail.com" className="text-gray-600 hover:text-indigo-600 transition">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="profile-glow">
                <img
                  src={profilePhoto} alt="Profile"
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-white shadow-xl animate-float relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate developer with expertise in building modern web applications. 
            With a strong foundation in both frontend and backend technologies, I create 
            seamless digital experiences that solve real-world problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Frontend Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-600" />
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-600" />
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-600" />
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Backend Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-600" />
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-600" />
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-600" />
                  REST APIs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img 
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <div className="flex gap-2">
                    <a 
                      href="#" 
                      className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <Mail className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;