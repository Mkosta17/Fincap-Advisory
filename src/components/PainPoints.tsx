import { EyeOff, TrendingDown, CalendarClock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PainPoints() {
  const points = [
    {
      icon: <EyeOff className="w-12 h-12 mx-auto text-blue-500" />,
      title: "Desconoces todas las opciones",
      description: "La mayoría de autónomos sólo conocen el préstamo bancario. Hay alternativas que nunca has considerado."
    },
    {
      icon: <TrendingDown className="w-12 h-12 mx-auto text-blue-500" />,
      title: "Pagas más de lo que deberías",
      description: "Financias caro lo que podrías financiar barato, o no financias lo que podrías financiar gratis."
    },
    {
      icon: <CalendarClock className="w-12 h-12 mx-auto text-blue-500" />,
      title: "Las subvenciones no esperan",
      description: "Una convocatoria del Kit Digital de hasta 12.000 € se cerró sin ti."
    }
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">El dinero que tu negocio podría tener y no tiene.</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

