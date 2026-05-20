import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MessageCircle, MapPin, Building2 } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: 1,
    title: "Contáctanos",
    description: "Platica con Juan sobre tu proyecto. Cuéntanos qué tipo de negocio tienes y qué necesitas."
  },
  {
    icon: MapPin,
    number: 2,
    title: "Visita los Terrenos",
    description: "Agendar una visita a los parques industriales. Verás en persona las oportunidades disponibles."
  },
  {
    icon: Building2,
    number: 3,
    title: "Construye o Renta",
    description: "Compra tu terreno y construye con tu contratista, o renta un espacio listo. Elige lo que mejor se adapte a ti."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Cómo Funciona
          </h2>
          <p className="text-xl text-gray-600">
            Tres pasos simples para comenzar tu expansión a Mission, Texas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1" style={{ backgroundColor: '#C9A84C' }} />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition h-full">
                  <CardHeader className="text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                      style={{ backgroundColor: '#C9A84C' }}
                    >
                      <Icon size={36} style={{ color: '#0A1628' }} />
                    </div>
                    <div
                      className="text-5xl font-bold mb-2"
                      style={{ color: '#C9A84C' }}
                    >
                      {step.number}
                    </div>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}