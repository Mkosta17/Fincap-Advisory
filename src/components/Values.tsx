import { ShieldCheck, Target, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Values() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Independencia",
      description: "No cobramos comisiones de bancos ni plataformas. Nuestra única fuente de ingreso eres tú. Eso garantiza que nuestra recomendación sea la mejor para tu negocio, no la mejor para nuestra cuenta corriente."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Especialización",
      description: "No hacemos fiscal, laboral ni contabilidad. Solo financiación externa. Esa especialización total nos permite conocer cada instrumento con una profundidad que una gestoría generalista nunca podrá igualar."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Accesibilidad",
      description: "70 euros por una sesión de diagnóstico con la que puedes descubrir una subvención de 12.000 €. Diseñamos nuestras tarifas para que cualquier autónomo pueda acceder a asesoramiento de calidad."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Rigor",
      description: "Detrás de cada recomendación hay análisis real: historial crediticio, capacidad de endeudamiento, plazos de convocatoria, criterios bancarios actualizados. No damos respuestas genéricas."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
          <p className="text-gray-600">Los pilares que sostienen nuestro compromiso contigo.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="flex gap-6 p-8 rounded-2xl bg-white hover:bg-blue-50 transition-colors duration-300 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
