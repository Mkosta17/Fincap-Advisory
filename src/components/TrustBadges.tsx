export default function TrustBadges() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center text-base text-gray-400 gap-4 sm:gap-6">
      <div className="flex items-center">
        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span>Asesoría independiente sin comisiones</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span>Servicio en castellano, catalán e inglés</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span>Atención a autónomos y pequeños negocios</span>
      </div>
    </div>
  );
}
