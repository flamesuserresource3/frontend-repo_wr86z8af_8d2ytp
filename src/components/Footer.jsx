import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <p className="text-white font-semibold">VibePlay</p>
            <p className="text-white/60 text-sm mt-1">A playful 3D web experience. Built for exploration.</p>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a className="hover:text-white transition-colors" href="#" aria-label="GitHub"><Github size={20} /></a>
            <a className="hover:text-white transition-colors" href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a className="hover:text-white transition-colors" href="#" aria-label="YouTube"><Youtube size={20} /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} VibePlay. All rights reserved.</p>
      </div>
    </footer>
  );
}
