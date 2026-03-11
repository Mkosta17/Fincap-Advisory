import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

// REEMPLAZA ESTO con tu ID de Formspree en el panel de control o .env
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "xpqjeydj";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-xl text-center border border-emerald-100"
      >
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Mensaje enviado!</h3>
        <p className="text-gray-600 mb-8">
          Gracias por contactar con Fincap Advisory. Te responderemos en menos de 24 horas laborables.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-bold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
            <input 
              required
              name="name"
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email corporativo</label>
            <input 
              required
              name="email"
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
              placeholder="nombre@empresa.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
          <select 
            name="subject"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all bg-white"
          >
            <option>Sesión de Diagnóstico</option>
            <option>Informe de Financiación</option>
            <option>Subvenciones / Kit Digital</option>
            <option>Otro motivo</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
          <textarea 
            required
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all resize-none"
            placeholder="Cuéntanos brevemente sobre tu negocio y qué necesitas..."
          ></textarea>
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm">
            <AlertCircle className="w-5 h-5" />
            <span>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o escríbenos directamente por email.</span>
          </div>
        )}

        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              Enviar mensaje <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
