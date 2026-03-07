import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function Founders() {
  const founders = [
    {
      name: "Alejandro Balañá",
      role: "Análisis y Operaciones",
      image: "https://i.imgur.com/p8uSCAo.png",
      linkedin: "https://www.linkedin.com/in/alejandro-balana/"
    },
    {
      name: "Marc Costa",
      role: "Dirección Comercial",
      image: "https://i.imgur.com/8Rc7N2q.png",
      linkedin: "https://www.linkedin.com/in/marccostasole"
    },
    {
      name: "Jan Moles",
      role: "Tecnología",
      image: "https://i.imgur.com/YH0NB3c.png",
      linkedin: "https://www.linkedin.com/in/janmoles/"
    },
    {
      name: "Álvaro Ordás",
      role: "Investigación",
      image: "https://i.imgur.com/f36jDAP.png",
      linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-ord%C3%A1s-doliwa-a15395237/"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fundadores</h2>
          <p className="text-gray-600">Un equipo multidisciplinar unido por una visión común.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-500 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 -z-10 opacity-10"></div>
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-white shadow-md group-hover:border-blue-50 transition-colors duration-300" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{founder.role}</p>
              <a 
                href={founder.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
