import assets from './assets/NoBg4.png'

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-black'>
        <img
          src={assets}
          className="logo rounded-full overflow-hidden w-60 h-80 object-cover mb-4"
          alt="Profile"
        />
      <h2 className="text-3xl font-bold text-white mb-2">Arcee Luceno</h2>
      <p className="text-gray-300 mb-4 text-center max-w-md">
        Aspiring Front-End Developer passionate about building beautiful and functional web experiences.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/arceeluceno13" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <svg width="24" height="24" fill="currentColor" className="inline-block"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/arcee-luceno-9710a0296/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <svg width="24" height="24" fill="currentColor" className="inline-block"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
        </a>
        <a href="mailto:lucenoarcee0@gmail.com" className="text-gray-400 hover:text-white transition">
          <svg width="24" height="24" fill="currentColor" className="inline-block"><path d="M12 13.065l-11.99-8.065h23.98l-11.99 8.065zm0 2.935l-12-8v14h24v-14l-12 8z"/></svg>
        </a>
      </div>

   
      <div className="mt-10 w-full max-w-4xl px-4">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/*Card 1 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-white text-xl">🌐</div>
            <h3 className="text-lg font-bold text-white mb-2">Portfolio Website</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">A personal portfolio built with React and Tailwind CSS to showcase my projects and skills.</p>
            <a href="https://github.com/arceeluceno13/my-portfolio" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">View Code</a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-white text-xl">📝</div>
            <h3 className="text-lg font-bold text-white mb-2">Python App</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">This project is a Multiple Choice Questions (MCQ) randomizer tool built with Python and Tkinter. It allows teachers to create a quiz from an Excel file where questions, choices, and the correct answer (in bold) are defined.</p>
            <a href="https://github.com/jhenesiscornito/FINALS-MCQ" className="text-indigo-400 hover:underline">View Code</a>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-white text-xl">📱</div>
            <h3 className="text-lg font-bold text-white mb-2">Web App</h3>
            <p className="text-gray-400 text-sm mb-4 text-center">KwartaKwenta is a money savings tracker that helps you manage finances, set goals, and monitor your progress. Built as a CAPSTONE project for effective personal finance management.</p>
            <a href="https://github.com/arceeluceno13/KwartaKwenta" className="text-indigo-400 hover:underline">Coming Soon</a>
          </div>

        </div>

      </div>


    </div>
  )
}

export default App