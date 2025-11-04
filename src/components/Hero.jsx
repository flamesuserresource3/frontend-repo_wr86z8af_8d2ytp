import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[radial-gradient(1200px_600px_at_80%_-10%,#7c3aed20,transparent),radial-gradient(1000px_400px_at_10%_0%,#22d3ee10,transparent)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/nnNYb3ZFbRxKghMM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-white/80 text-xs mb-6">
              <Sparkles size={14} />
              Interactive 3D Gameplay
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Dive into a new dimension of play
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Explore a next‑gen, browser‑based 3D experience. Spin, tap, and interact with the controller while you discover the core mechanics of our upcoming game world.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#play" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition-shadow">
                Play Now
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-5 py-3 text-white font-medium transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay to boost contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
    </section>
  );
}
