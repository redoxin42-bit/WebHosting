const MainInterface = () => (
  <div className="h-screen bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
    <div className="absolute top-10 left-10 text-2xl text-white">⚙️</div>
    
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 animate-pulse">
      start deploying your project!
    </h1>
    
    <div className="fixed bottom-0 w-full p-6 bg-white/5 backdrop-blur-lg border-t border-white/10">
      <input className="w-full bg-transparent border border-white/30 rounded-2xl p-4 text-white" placeholder="Gemini 3.5 Flash chat..." />
    </div>
  </div>
);
