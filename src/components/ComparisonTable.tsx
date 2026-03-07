import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

export default function ComparisonTable() {
  const services = [
    {
      name: "Sesión de Diagnóstico",
      price: "70 €",
      ideal: "Primera exploración",
      features: ["Análisis 90 minutos", "Recomendaciones clave"]
    },
    {
      name: "Informe de Financiación",
      price: "130 €",
      ideal: "Análisis detallado",
      features: ["Informe con comparativa", "Propuesta detallada", "Hoja de ruta"]
    },
    {
      name: "Sesión de Seguimiento",
      price: "90 €",
      ideal: "Dudas y estrategia",
      features: ["Revisión de progreso", "Ajuste de estrategia", "Resolución de dudas"]
    },
    {
      name: "Pack Completo",
      price: "220 €",
      ideal: "Acompañamiento total",
      features: ["Todo lo anterior", "Ahorro garantizado"],
      highlight: true
    }
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compara nuestros servicios</h2>
          <p className="text-gray-600">Encuentra la opción que mejor se adapte a la etapa actual de tu negocio.</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 hover:shadow-xl ${
                service.highlight ? 'border-blue-500 ring-4 ring-blue-500/5' : 'border-gray-100'
              }`}
            >
              {service.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Mejor Valor
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
                  <Info className="w-4 h-4 text-blue-400" />
                  <span>{service.ideal}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-gray-600 text-sm">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {feature}
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
