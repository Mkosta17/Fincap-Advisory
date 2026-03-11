import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Fincap Advisory</h3>
            <p className="text-gray-400 mb-2">Asesoría de financiación para autónomos y pequeños negocios en Barcelona.</p>
            <p className="text-blue-400 text-sm italic font-medium">Donde la financiación se vuelve estrategia.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Sesión de Diagnóstico</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Informe de Financiación</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Sesión de Seguimiento</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Pack Completo</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/aviso-legal" className="text-gray-400 hover:text-white transition-colors">Aviso Legal</Link></li>
              <li><Link to="/privacidad" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/fincap-advisory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Fincap Advisory. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
