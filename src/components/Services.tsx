import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, FileText, RefreshCw, Crown, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'diagnostico',
    title: 'Sesión de Diagnóstico',
    price: '70 €',
    duration: '90 minutos',
    description: 'Análisis completo de tu situación actual y recomendaciones principales.',
    icon: Search,
    highlight: false,
  },
  {
    id: 'informe',
    title: 'Informe de Financiación',
    price: '130 €',
    duration: 'Documento detallado',
    description: 'Informe con análisis detallado, propuesta de financiación y hoja de ruta.',
    icon: FileText,
    highlight: false,
  },
  {
    id: 'seguimiento',
    title: 'Sesión de Seguimiento',
    price: '90 €',
    duration: '60 minutos',
    description: 'Revisión del progreso tras la sesión inicial. Resolución de dudas y ajuste de la estrategia si es necesario.',
    icon: RefreshCw,
    highlight: false,
  },
  {
    id: 'pack-completo',
    title: 'Pack Completo',
    price: '220 €',
    duration: 'Acompañamiento total',
    description: 'Diagnóstico + Informe + Seguimiento. La solución de mayor valor.',
    icon: Crown,
    highlight: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ofrecemos <span className="text-blue-400">4 servicios</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Soluciones adaptadas a la etapa y necesidad de tu negocio.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${
                service.highlight 
                  ? 'bg-gradient-to-b from-blue-900/40 to-slate-800/80 border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
                  : 'bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" />
                  RECOMENDADO
                </div>
              )}

              <div className="mb-8 flex-grow">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  service.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/50 text-slate-300'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                </div>
                <p className="text-sm text-blue-400 font-medium mb-4">{service.duration}</p>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>

              <Link 
                to="/contacto" 
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                  service.highlight 
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20' 
                    : 'bg-slate-700/50 text-white hover:bg-slate-700'
                }`}
              >
                Reservar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link 
            to="/servicios" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors group"
          >
            Ver todos los detalles en la sección de Servicios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
