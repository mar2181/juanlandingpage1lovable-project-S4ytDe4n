import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Building2, MapPin, Zap, Globe } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: "Ubicación Inmejorable",
    description: "A unos pasos del Puente Internacional Pharr (Pharr-Reynosa), el principal cruce comercial de la zona"
  },
  {
    icon: Globe,
    title: "Acceso Directo al Mercado Americano",
    description: "Expande sin alejarte de México. Conecta con proveedores y clientes en EE.UU. desde Mission"
  },
  {
    icon: Building2,
    title: "Infraestructura de Primer Nivel",
    description: "Servicios, transportes y conectividad de clase mundial. Todo lo que tu negocio necesita para crecer"
  },
  {
    icon: Zap,
    title: "Ideal para Expansión",
    description: "Perfecto para empresas mexicanas que quieren presencia en EE.UU. sin complicaciones fronterizas"
  }
];

export default function WhyMission() {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Por qué Mission, Texas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La puerta estratégica para que tu negocio se expanda al mercado norteamericano
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition">
                <CardHeader>
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#C9A84C' }}
                  >
                    <Icon size={28} style={{ color: '#0A1628' }} />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}