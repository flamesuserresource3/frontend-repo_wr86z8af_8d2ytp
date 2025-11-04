import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Play section anchor for buttons */}
        <section id="play" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to play?</h3>
            <p className="mt-3 text-white/70">Interact with the 3D controller above, then jump into our first demo levels soon. This prototype showcases the feel and responsiveness you can expect.</p>
            <div className="mt-6 inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">More gameplay coming soon ✨</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
