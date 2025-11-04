import { Cpu, Zap, Shield, Joystick } from 'lucide-react';

const features = [
  {
    title: 'Real‑time Interactions',
    description: 'Smooth, GPU‑accelerated 3D that responds instantly to your cursor and touch gestures.',
    icon: Zap,
    accent: 'from-amber-400 to-pink-500',
  },
  {
    title: 'Optimized Performance',
    description: 'Efficient rendering keeps frame rates high on both desktop and mobile devices.',
    icon: Cpu,
    accent: 'from-cyan-400 to-violet-500',
  },
  {
    title: 'Secure Profiles',
    description: 'Account‑ready foundation with best‑practice patterns for future progression systems.',
    icon: Shield,
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Controller‑First Design',
    description: 'Gameplay designed around tactile feedback and familiar control schemes.',
    icon: Joystick,
    accent: 'from-fuchsia-400 to-indigo-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Engineered for fun</h2>
          <p className="mt-3 text-white/70">Built with modern web tech so your adventures run fast, feel responsive, and look stunning right in the browser.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, description, icon: Icon, accent }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${accent} text-black grid place-items-center mb-4`}>
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(200px_200px_at_20%_0%,#ffffff20,transparent)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
