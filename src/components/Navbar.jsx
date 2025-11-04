import { Rocket, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center text-white">
              <Gamepad2 size={20} />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">VibePlay</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#play" className="text-white/70 hover:text-white transition-colors">Play</a>
            <a href="#community" className="text-white/70 hover:text-white transition-colors">Community</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors">
            <Rocket size={16} />
            Launch
          </button>
        </div>
      </div>
    </header>
  );
}
