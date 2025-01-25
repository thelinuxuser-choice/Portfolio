import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Mail, Youtube, Code2, Brain, Globe, ExternalLink, Terminal, Play, RefreshCw } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "ATM System",
      description: "Clean UI - Fully Scripted",
      videoId: "CxyBALEVA5I", // Replace with your actual YouTube video ID
      tags: ["Roblox", "Luau", "Scripting"]
    },
    {
      title: "Advanced Advertisement Board",
      description: "Clear Animations - User friendly fully customizable through settings",
      videoId: "DW05MofC1Q0", // Replace with your actual YouTube video ID
      tags: ["Roblox", "Luau", "Scripting"]
    }
  ];

  // Terminal Game State
  const [gameStarted, setGameStarted] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>(['Welcome to the Terminal Game!', 'Type "help" to see available commands.']);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const commands = {
    help: 'Shows available commands',
    move: 'Move in a direction (north, south, east, west)',
    clear: 'Clears the terminal',
    about: 'Shows information about me',
    skills: 'Lists my technical skills',
  };

  const handleCommand = useCallback((cmd: string) => {
    const parts = cmd.toLowerCase().trim().split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case 'help':
        setOutput(prev => [...prev, '', '🚀 Available Commands:', ...Object.entries(commands).map(([cmd, desc]) => `  ${cmd}: ${desc}`)]);
        break;
      case 'move':
        const direction = args[0];
        if (!direction) {
          setOutput(prev => [...prev, 'Please specify a direction (north, south, east, west)']);
          break;
        }
        let newPos = { ...position };
        switch (direction) {
          case 'north': newPos.y -= 1; break;
          case 'south': newPos.y += 1; break;
          case 'east': newPos.x += 1; break;
          case 'west': newPos.x -= 1; break;
          default:
            setOutput(prev => [...prev, 'Invalid direction. Use: north, south, east, west']);
            return;
        }
        setPosition(newPos);
        setOutput(prev => [...prev, `Moved ${direction}! Current position: (${newPos.x}, ${newPos.y})`]);
        break;
      case 'clear':
        setOutput([]);
        break;
      case 'about':
        setOutput(prev => [...prev, '', '👋 About Me:', ' Roblox Scripter, 3D Modeler, Builder', '  Specializing in AI']);
        break;
      case 'skills':
        setOutput(prev => [...prev, '', '🛠️ Skills:', '  • Luau Scripting', '  • Python Scripting', '  • Blender 3d Modeling', '  • AI/ML']);
        break;
      default:
        setOutput(prev => [...prev, `Command not found: ${command}. Type "help" for available commands or PwnTime will find you.`]);
    }
  }, [position]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setOutput(prev => [...prev, '', `> ${input}`]);
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    if (gameStarted) {
      const terminal = document.getElementById('terminal-output');
      if (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
      }
    }
  }, [output, gameStarted]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Hero Section with animated gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/30 via-[#06B6D4]/30 to-[#3B82F6]/30 animate-gradient-x"></div>
        <header className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#4F46E5]/10 to-[#06B6D4]/10 border border-[#4F46E5]/20 text-[#A5B4FC] mb-6 inline-block">
                Available for hire contact me through discord
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#3B82F6] text-transparent bg-clip-text">
              PwnTime
            </h1>
            <p className="text-xl text-[#94A3B8] mb-8">Roblox Scripter & 3D Modeler</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="p-3 hover:text-[#4F46E5] transition-colors bg-white/5 rounded-xl hover:bg-white/10">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 hover:text-[#06B6D4] transition-colors bg-white/5 rounded-xl hover:bg-white/10">
                <Discord size={24} />
              </a>
              <a href="#" className="p-3 hover:text-[#EC4899] transition-colors bg-white/5 rounded-xl hover:bg-white/10">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* Skills Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1E1B4B_0%,_#0A0F1E_100%)]"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-transparent bg-clip-text">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] backdrop-blur-xl hover:translate-y-[-4px] transition-transform">
              <Code2 className="text-[#4F46E5] mb-6" size={40} />
              <h3 className="text-xl font-semibold mb-3">Luau/Lua Scripter</h3>
              <p className="text-[#94A3B8]">Scripting your needs</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] backdrop-blur-xl hover:translate-y-[-4px] transition-transform">
              <Brain className="text-[#06B6D4] mb-6" size={40} />
              <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
              <p className="text-[#94A3B8]">Implementing smart solutions with AI/ML</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] backdrop-blur-xl hover:translate-y-[-4px] transition-transform">
              <Globe className="text-[#3B82F6] mb-6" size={40} />
              <h3 className="text-xl font-semibold mb-3">3D Modeling</h3>
              <p className="text-[#94A3B8]">Designing 3D game assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] overflow-hidden hover:border-[#4F46E5]/50 transition-colors">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-[#4F46E5] transition-colors">{project.title}</h3>
                    <ExternalLink className="text-[#94A3B8] group-hover:text-[#4F46E5] transition-colors" size={20} />
                  </div>
                  <p className="text-[#94A3B8] mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1 bg-[#4F46E5]/10 text-[#A5B4FC] rounded-full text-sm border border-[#4F46E5]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Game Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1E1B4B_0%,_#0A0F1E_100%)]"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-transparent bg-clip-text">
            Interactive Terminal
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden bg-[#1A1B26] border border-white/10">
              {/* Terminal Header */}
              <div className="bg-[#24283B] p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={20} className="text-[#4F46E5]" />
                  <span className="text-sm font-mono">PwnTime@portfolio:~$</span>
                </div>
                <div className="flex gap-2">
                  {!gameStarted ? (
                    <button
                      onClick={() => setGameStarted(true)}
                      className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#4F46E5]/20 text-[#A5B4FC] hover:bg-[#4F46E5]/30 transition-colors"
                    >
                      <Play size={16} />
                      Start
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setGameStarted(false);
                        setOutput(['Welcome to the Terminal Game!', 'Type "help" to see available commands.']);
                        setPosition({ x: 0, y: 0 });
                      }}
                      className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#4F46E5]/20 text-[#A5B4FC] hover:bg-[#4F46E5]/30 transition-colors"
                    >
                      <RefreshCw size={16} />
                      Reset
                    </button>
                  )}
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-4">
                {gameStarted ? (
                  <>
                    <div
                      id="terminal-output"
                      className="font-mono text-sm text-[#94A3B8] mb-4 h-[300px] overflow-y-auto"
                    >
                      {output.map((line, i) => (
                        <div key={i} className="whitespace-pre-wrap">
                          {line}
                        </div>
                      ))}
                    </div>
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                      <span className="text-[#4F46E5]">❯</span>
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-[#94A3B8] font-mono"
                        autoFocus
                      />
                    </form>
                  </>
                ) : (
                  <div className="text-center py-20">
                    <Terminal size={48} className="text-[#4F46E5] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Terminal Adventure</h3>
                    <p className="text-[#94A3B8] mb-4">Explore my portfolio through an interactive terminal experience</p>
                    <button
                      onClick={() => setGameStarted(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4F46E5]/20 text-[#A5B4FC] hover:bg-[#4F46E5]/30 transition-colors"
                    >
                      <Play size={20} />
                      Start Adventure
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[#94A3B8] border-t border-white/[0.08]">
        <p>© {new Date().getFullYear()} PwnTime. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
