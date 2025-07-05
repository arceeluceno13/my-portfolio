import assets from './assets/NoBg4.png'
import projects from './data/projects'
import socials from './data/socials'
import techStack from './data/techStack'
// import ParticlesComponent from './components/Particles'

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-black px-2">
      {/* <ParticlesComponent id="particles" /> */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={assets}
          className="logo rounded-full overflow-hidden w-40 h-40 sm:w-60 sm:h-80 object-cover mb-4"
          alt="Profile"
        />
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">Arcee Luceno</h2>
        <p className="text-gray-300 mb-4 text-center max-w-xs sm:max-w-md">
          Aspiring Front-End Developer passionate about building beautiful and functional web experiences.
        </p>
        <div className="flex gap-4 mb-10 flex-wrap justify-center">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-10 w-full max-w-4xl px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-white text-xl">
                {proj.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 text-center">{proj.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 text-center">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                {proj.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mb-10 mt-10 w-full max-w-3xl px-2 sm:px-4 bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
              <span className="text-gray-300 text-xs sm:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App