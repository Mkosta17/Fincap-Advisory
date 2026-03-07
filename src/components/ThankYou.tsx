export default function ThankYou() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Gracias!</h1>
        <p className="text-gray-600 mb-8">Hemos recibido tu mensaje. Nos pondremos en contacto contigo en 24h.</p>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué pasa ahora?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Revisamos tu caso</h3>
            </div>
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Te contactamos</h3>
            </div>
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 text-white rounded-full text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Agendamos una sesión</h3>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <a href="#" className="text-blue-500 hover:underline">Volver al inicio</a>
        </div>
      </div>
    </section>
  );
}
