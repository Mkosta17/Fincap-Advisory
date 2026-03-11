import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              ¿Sabes qué <span className="text-blue-400">financiación disponible</span> tiene tu negocio?
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Fincap Advisory analiza tu situación concreta y te dice exactamente qué instrumento de financiación externa se adapta mejor a ti: préstamos bancarios, productos ICO, subvenciones o factoring, entre otros. Sin bancos. Sin conflictos. Solo claridad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/contacto" 
                className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                Reserva tu diagnóstico por 70 €
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/servicios" 
                className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all text-center"
              >
                Descubrir opciones
              </Link>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <TrustBadges />
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" 
                alt="Financial Advisory" 
                className="w-full h-auto" 
                referrerPolicy='no-referrer'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
