import assets from './assets/NoBg4.png'
import projects from './data/projects'
import socials from './data/socials'
import techStack from './data/techStack'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-black">
      <img
        src={assets}
        className="logo rounded-full overflow-hidden w-60 h-80 object-cover mb-4"
        alt="Profile"
      />
      <h2 className="text-3xl font-bold text-white mb-2">Arcee Luceno</h2>
      <p className="text-gray-300 mb-4 text-center max-w-md">
        Aspiring Front-End Developer passionate about building beautiful and functional web experiences.
      </p>
      <div className="flex gap-4 mb-10">
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

      <div className="mt-10 w-full max-w-4xl px-4">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-white text-xl">
                {proj.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-4 text-center">{proj.desc}</p>
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

      <div className="mb-10 mt-10 w-full max-w-3xl px-4 bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <span className="text-gray-300 text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App