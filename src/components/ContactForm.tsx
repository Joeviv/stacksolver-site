// ARCHIVO: src/components/ContactForm.tsx
import React, { useState } from 'react';
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqaqgdoy", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setErrorMessage("Hubo un problema al enviar el formulario.");
        }
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
      setErrorMessage("Error de conexión. Verifica tu internet.");
    }
  };

  if (status === 'SUCCESS') {
    return (
      <div className="bg-green-900/20 border border-green-800 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-900/50 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
        <p className="text-zinc-400">Gracias por contactarnos. Nuestro equipo revisará tu solicitud y te responderá en breve.</p>
        <button 
          onClick={() => setStatus('IDLE')}
          className="mt-8 text-green-400 hover:text-green-300 text-sm font-medium underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <label htmlFor="nombre" className="text-sm font-medium text-zinc-400 ml-1">Nombre Completo</label>
            <input 
                required 
                type="text" 
                name="nombre" 
                id="nombre"
                placeholder="Juan Pérez" 
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700" 
            />
        </div>
        <div className="space-y-2">
            <label htmlFor="empresa" className="text-sm font-medium text-zinc-400 ml-1">Empresa</label>
            <input 
                type="text" 
                name="empresa" 
                id="empresa"
                placeholder="Tu Empresa S.A.S" 
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700" 
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Correo Electrónico</label>
            <input 
                required 
                type="email" 
                name="email" 
                id="email"
                placeholder="juan@empresa.com" 
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700" 
            />
        </div>
        <div className="space-y-2">
            <label htmlFor="telefono" className="text-sm font-medium text-zinc-400 ml-1">Teléfono (Opcional)</label>
            <input 
                type="tel" 
                name="telefono" 
                id="telefono"
                placeholder="+57 300 123 4567" 
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700" 
            />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-zinc-400 ml-1">¿Cómo podemos ayudarte?</label>
        <textarea 
            required
            name="mensaje" 
            id="mensaje"
            rows={5} 
            placeholder="Cuéntanos sobre tu proyecto..." 
            className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 outline-none resize-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
        ></textarea>
      </div>

      {/* Campos Ocultos de Formspree */}
      <input type="hidden" name="_subject" value="Nuevo Mensaje de Contacto desde Stacksolver.tech" />
      <input type="text" name="_gotcha" style={{display: 'none'}} />

      {status === 'ERROR' && (
        <div className="flex items-center gap-2 text-red-400 bg-red-900/20 p-4 rounded-lg border border-red-900/50">
            <ExclamationCircleIcon className="w-5 h-5" />
            <span className="text-sm">{errorMessage || "Hubo un error al enviar el mensaje."}</span>
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === 'SUBMITTING'}
        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'SUBMITTING' ? (
            'Enviando...'
        ) : (
            <>
                Enviar Mensaje
                <PaperAirplaneIcon className="w-5 h-5" />
            </>
        )}
      </button>
    </form>
  );
}