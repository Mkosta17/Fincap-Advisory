import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Una misión: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              democratizar el acceso
            </span> a la financiación empresarial.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            En España, la mayoría de autónomos y pequeños negocios no conocen todas las opciones de financiación disponibles para ellos ni saben cuál encaja mejor con su situación. Fincap Advisory nace para cambiar eso: convertir la desinformación en decisiones claras y fundamentadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
