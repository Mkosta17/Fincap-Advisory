export default function HowItWorks() {
  return (
    <section className="pt-20 pb-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Así de sencillo.</h2>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center max-w-xs">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Reserva tu sesión de diagnóstico</h3>
            <p className="text-gray-600">Precio fijo de 70 €, sin sorpresas. Respuesta en menos de 24 horas.</p>
          </div>
          <div className="hidden md:block mt-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
          <div className="text-center max-w-xs">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Análisis</h3>
            <p className="text-gray-600">Durante una hora y media estudiamos tu situación real: facturación, historial, garantías y necesidad, entre otros. Te escuchamos y conversamos contigo.</p>
          </div>
          <div className="hidden md:block mt-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
          <div className="text-center max-w-xs">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Resultado a medida</h3>
            <p className="text-gray-600">Te decimos exactamente qué instrumento se ajusta mejor a tu situación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
