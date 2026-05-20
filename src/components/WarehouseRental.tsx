import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, Zap } from 'lucide-react';

const features = [
  "Nave industrial de 100,000 pies cuadrados en construcción",
  "Espacios desde 8,500 pies cuadrados",
  "Renta varios espacios juntos si necesitas más",
  "Perfecta para empresas que entran al mercado americano sin comprar de entrada",
  "Servicios incluidos: agua, gas, electricidad",
  "Seguridad 24/7 y control de acceso"
];

export default function WarehouseRental() {
  return (
    <section id="warehouse" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: '#C9A84C' }}>
            <Zap size={20} style={{ color: '#0A1628' }} />
            <span className="font-bold" style={{ color: '#0A1628' }}>Próximamente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Bodega en Renta — Disponible Muy Pronto
          </h2>
          <p className="text-xl" style={{ color: '#FFFFFF' }} className="max-w-3xl mx-auto">
            Solución flexible para empresas que quieren entrar al mercado americano sin grandes inversiones iniciales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/warehouse-aerial-hero-DgpEI1wO.png"
              alt="Bodega en Renta - Vista Aérea"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6 bg-gray-800 p-8 rounded-lg">
            <div>
              <p className="font-semibold mb-2" style={{ color: '#FFFFFF' }}>Espacios disponibles:</p>
              <p className="text-4xl font-bold" style={{ color: '#C9A84C' }}>Desde 8,500 pies²</p>
            </div>

            <div>
              <p className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>¿Qué incluye la renta?</p>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-1" />
                    <span style={{ color: '#FFFFFF' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="w-full font-bold text-lg" style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}>
              Apartar tu Espacio Ahorita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}