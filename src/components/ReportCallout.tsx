import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';

export default function ReportCallout() {
  return (
    <section className="pb-12 pt-0">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="mt-1 text-blue-500 shrink-0">
            <Info size={20} />
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Si quieres un análisis detallado de las opciones disponibles, con una recomendación precisa sobre la compañía con la que contratar el instrumento de financiación y una hoja de ruta para conseguirlo <span className="text-slate-900 font-semibold">→ El Informe de Financiación es para ti.</span>
            </p>
            <div className="mt-3">
              <Link 
                to="/contacto" 
                className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                Saber más sobre el informe
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
