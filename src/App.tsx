import './App.css'

function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden selection:bg-green-900 selection:text-green-100">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>
      </div>
      <div className="scanline"></div>

      <main className="z-10 max-w-2xl w-full px-6 text-center space-y-12">
        {/* Header / Identity */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            TheDevelopers<span className="text-green-500">.dev</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
            <span className="text-green-500">&gt;</span> System Status: <span className="text-white font-semibold">INTERNAL</span>
          </p>
        </div>

        {/* The Narrative */}
        <div className="border-l-2 border-green-900/50 pl-6 text-left mx-auto max-w-md bg-white/5 p-6 rounded-r-lg backdrop-blur-sm">
          <p className="text-gray-400 text-sm md:text-base mb-4">
            We are no longer accepting general development inquiries.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            TheDevelopers.dev now serves exclusively as the <span className="text-white font-semibold">Rapid Engineering & Venture Production</span> unit for Nomic Ventures.
          </p>
        </div>

        {/* Navigation / CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mx-auto">
          {/* Link 1: The Studio */}
          <a
            href="https://nomic.ventures"
            className="group relative block p-px rounded-lg overflow-hidden bg-gradient-to-b from-green-500/20 to-transparent hover:from-green-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-black/90 m-[1px] rounded-lg group-hover:bg-black/80 transition-colors"></div>
            <div className="relative p-6 flex flex-col items-center justify-center h-full space-y-2 text-center">
              <i className="fa-solid fa-rocket text-green-500 text-2xl mb-1 group-hover:scale-110 transition-transform"></i>
              <span className="text-white font-bold tracking-wide group-hover:text-green-400 transition-colors">Nomic Ventures</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">The Studio</span>
            </div>
          </a>

          {/* Link 2: Consulting */}
          <a
            href="https://nomic.ventures/consult"
            className="group relative block p-px rounded-lg overflow-hidden bg-gradient-to-b from-gray-700/50 to-transparent hover:from-gray-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-black/90 m-[1px] rounded-lg group-hover:bg-black/80 transition-colors"></div>
            <div className="relative p-6 flex flex-col items-center justify-center h-full space-y-2 text-center">
              <i className="fa-solid fa-chess text-gray-400 text-2xl mb-1 group-hover:scale-110 transition-transform"></i>
              <span className="text-gray-200 font-bold tracking-wide group-hover:text-white transition-colors">Strategic Consulting</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Enterprise & M&A</span>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-12 text-xs text-gray-600 font-mono">
          <p>ID: 600M_EXIT_NODE // <span className="cursor-blink">_</span></p>
        </div>
      </main>
    </div>
  )
}

export default App
