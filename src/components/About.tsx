import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

const highlights = [
  "Especialista en bienes raíces comerciales fronterizos",
  "Certificado por RE/MAX con 15+ años de experiencia",
  "Red de contactos en el norte de México y Texas",
  "Análisis de mercado y asesoría estratégica",
  "Negociación profesional y servicio personalizado",
  "Éxito comprobado en operaciones multimillonarias"
];

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/71a8d870-61a4-4d1f-931e-96ec2c40ad62%20(1).png"
            alt="Juan Elizondo, RE/MAX Elite"
            className="w-full rounded-lg shadow-2xl object-cover"
            style={{ maxWidth: 390 }}
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Juan Elizondo</h2>
            <p style={{ color: '#C9A84C' }} className="text-2xl font-semibold">
              Agente de Bienes Raíces Comerciales
            </p>
            <p className="text-lg text-gray-300 mt-4">RE/MAX Elite | Mission, Texas</p>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Con más de una década y media en la industria inmobiliaria, Juan Elizondo se ha consolidado como el socio de confianza para empresarios y dueños de negocios en el norte de México que buscan expandir sus operaciones en Texas.
          </p>

          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={24} style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-1" />
                <span className="text-gray-200">{highlight}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="font-bold text-lg px-8" style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}>
            Conectar con Juan
          </Button>
        </div>
      </div>
    </section>
  );
}