import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email",
      value: "fincapadvisory@outlook.com",
      link: "mailto:fincapadvisory@outlook.com",
      description: "Te responderemos en menos de 24 horas laborables."
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: "Ubicación",
      value: "Barcelona, España"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Horario",
      value: "Lunes a Viernes",
      description: "9:00 - 18:00 (CET)"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-600/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Estamos aquí para <span className="text-blue-400">impulsar</span> tu negocio.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              ¿Tienes dudas sobre financiación? ¿Quieres saber si tu negocio aplica a una subvención? 
              Hablemos. Escríbenos y te respondemos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side: Info */}
            <motion.div
              className="flex flex-col h-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de contacto</h2>
              <div className="flex flex-col justify-between flex-grow">
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-blue-600 font-medium hover:underline block mb-1">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                        )}
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-900 relative z-10">Compromiso Fincap</h3>
                  </div>
                  <p className="text-gray-600 relative z-10 leading-relaxed">
                    Nuestra prioridad es que entiendas tus opciones. Sin tecnicismos innecesarios, solo soluciones reales y transparencia total.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              className="lg:mt-[68px] lg:h-[calc(100%-68px)]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
