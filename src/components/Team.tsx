import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">El equipo</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <img src="https://i.imgur.com/p8uSCAo.png" alt="Alejandro Balañá" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-gray-800">Alejandro Balañá</h3>
            <p className="text-gray-600">Análisis y Operaciones</p>
          </div>
          <div className="text-center">
            <img src="https://i.imgur.com/8Rc7N2q.png" alt="Marc Costa" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-gray-800">Marc Costa</h3>
            <p className="text-gray-600">Dirección Comercial</p>
          </div>
          <div className="text-center">
            <img src="https://i.imgur.com/YH0NB3c.png" alt="Jan Moles" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-gray-800">Jan Moles</h3>
            <p className="text-gray-600">Tecnología</p>
          </div>
          <div className="text-center">
            <img src="https://i.imgur.com/f36jDAP.png" alt="Álvaro Ordás" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white" />
            <h3 className="text-xl font-bold text-gray-800">Álvaro Ordás</h3>
            <p className="text-gray-600">Investigación</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/nosotros" className="text-blue-500 hover:underline">Conoce al equipo →</Link>
        </div>
      </div>
    </section>
  );
}
