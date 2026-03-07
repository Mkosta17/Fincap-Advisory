import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Un Equipo <span className="text-blue-600">Multidisciplinar</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Cuatro perfiles. Una obsesión: que la financiación deje de ser un mundo opaco para quien más la necesita.
              </p>
              <p>
                El equipo de Fincap Advisory combina formación en economía, estadística e ingeniería con experiencia directa en análisis financiero y gestión empresarial.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://i.imgur.com/FqnrkLH.png" 
              alt="Equipo Fincap Advisory" 
              className="w-full rounded-2xl shadow-lg object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
