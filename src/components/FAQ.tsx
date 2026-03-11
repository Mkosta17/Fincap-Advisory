import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué diferencia a Fincap de un banco o una gestoría?",
      answer: "No vendemos ningún producto financiero. Un banco te ofrece sus productos y una gestoría actúa como intermediario ante las administraciones públicas. Nosotros solo asesoramos sobre financiación externa: somos los únicos que trabajamos para ti y no para una entidad."
    },
    {
      question: "¿Necesito tener una empresa constituida para contratar?",
      answer: "No. Atendemos a autónomos individuales desde su primer día de actividad. El diagnóstico es igual de valioso para un freelancer recién dado de alta que para una microempresa de 5 años."
    },
    {
      question: "¿Es suficiente con una sesión de diagnóstico o necesito el pack?",
      answer: "La sesión de diagnóstico ya te da recomendaciones accionables. Sin embargo, el informe y el seguimiento añaden profundidad y acompañamiento."
    },
    {
      question: "¿Podéis garantizar que consiga la financiación?",
      answer: "La concesión final depende de bancos y administraciones, y no la controlamos. Lo que sí garantizamos es que saldrás de la sesión sabiendo qué opciones tienes y cuál encaja mejor con tu situación."
    },
    {
      question: "¿Operáis fuera de Barcelona?",
      answer: "Sí, operamos fuera de Barcelona con cualquier empresario o autónomo en España. Nuestra especialización en subvenciones es especialmente fuerte en Cataluña."
    },
    {
      question: "¿En qué idiomas prestáis el servicio?",
      answer: "Castellano, catalán e inglés con igual nivel de profundidad."
    }
  ];

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600">Resolvemos tus dudas sobre cómo podemos ayudarte a financiar tu negocio.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-6 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
