import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Milestones() {
  const milestones = [
    {
      name: "Alejandro Balañá",
      items: [
        "Experiencia real en análisis de inversiones y forecasting",
        "Modelización financiera, análisis estadístico y evaluación de riesgos"
      ]
    },
    {
      name: "Marc Costa",
      items: [
        "Top 1% en Bankinter Game of Traders (8,09% P/L sobre 100.000 € en 1 mes) | 1ª posición académica",
        "Formación en Bloomberg Terminal, Portfolio Analysis y Equity Trading"
      ]
    },
    {
      name: "Jan Moles",
      items: [
        "Co-fundador de Simplit: herramienta de IA para automatizar procesos notariales en México",
        "Desarrollo de herramientas en Python, n8n, C++, MATLAB"
      ]
    },
    {
      name: "Álvaro Ordás",
      items: [
        "Manejo avanzado de Python, MATLAB, Minitab, Ansys, Microsoft Office 365",
        "Experiencia en planificación y ejecución de proyectos complejos"
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hitos Destacados</h2>
          <p className="text-gray-400">Experiencia y logros que respaldan nuestro trabajo.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {milestones.map((person, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">{person.name}</h3>
              <ul className="space-y-4">
                {person.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
