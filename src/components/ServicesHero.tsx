import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative bg-slate-900 py-20 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Traducimos situaciones concretas<br />
              en <span className="text-blue-400">soluciones claras</span>.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Explora nuestros servicios y encuentra exactamente lo que necesitas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
