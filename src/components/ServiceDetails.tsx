import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, RefreshCw, Layers, ArrowRight } from 'lucide-react';

export default function ServiceDetails() {
  const services = [
    {
      title: 'Sesión de Diagnóstico',
      description: 'Reunión en la que analizamos a fondo tu situación: estado financiero, necesidades, importe solicitado, historial y garantías, entre otros. Y te indicamos exactamente qué instrumento de financiación se ajusta mejor a tu situación.',
      icon: ClipboardCheck,
      price: '70 €',
      duration: '90 minutos',
      color: 'blue'
    },
    {
      title: 'Informe de Financiación',
      description: 'Informe con comparativa de opciones, condiciones, pros y contras, es decir, el fundamento de nuestra recomendación, y dictamen preciso sobre la compañía con la que contratar el instrumento de financiación. Además de una guía para conseguirlo.',
      icon: FileText,
      price: '130 €',
      duration: 'Entrega en 48h',
      color: 'indigo'
    },
    {
      title: 'Sesión de Seguimiento',
      description: 'Revisión del progreso tras la sesión inicial. Resolución de dudas y ajuste de la estrategia si es necesario.',
      icon: RefreshCw,
      price: '90 €',
      duration: '60 minutos',
      color: 'emerald'
    },
    {
      title: 'Pack Completo',
      description: 'Diagnóstico + Informe + Seguimiento. Acompañamiento completo. La solución de mayor valor.',
      icon: Layers,
      price: '220 €',
      duration: 'Proceso completo',
      color: 'orange',
      featured: true
    }
  ];

  return (
    <section className="pt-12 pb-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                service.featured 
                  ? 'border-blue-500 bg-blue-50/30' 
                  : 'border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300'
              }`}
            >
              {service.featured && (
                <span className="absolute -top-4 left-8 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Mejor Valor
                </span>
              )}
              
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl ${
                  service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  service.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                  service.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                  <p className="text-sm text-gray-500 font-medium">{service.duration}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <Link 
                to="/contacto" 
                className={`flex items-center justify-center space-x-2 w-full py-4 rounded-xl font-bold transition-all ${
                  service.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <span>Reservar este servicio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
