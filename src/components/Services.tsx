import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: "Propiedades Comerciales",
    description: "Acceso a las mejores propiedades comerciales en Mission, Texas y la región fronteriza. Espacios diseñados para el éxito empresarial."
  },
  {
    icon: TrendingUp,
    title: "Asesoría de Inversión",
    description: "Análisis detallado de rentabilidad, tendencias del mercado y proyecciones de retorno de inversión para tu negocio."
  },
  {
    icon: Users,
    title: "Apoyo Integral",
    description: "Desde negociación hasta cierre, acompañamos cada paso de tu transacción inmobiliaria comercial."
  },
  {
    icon: ShieldCheck,
    title: "Garantía RE/MAX",
    description: "Respaldado por la red inmobiliaria más grande del mundo con estándares de excelencia y profesionalismo."
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas para empresarios y dueños de negocios que buscan expandir sus operaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition">
                <CardHeader>
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#C9A84C' }}
                  >
                    <Icon size={28} style={{ color: '#0A1628' }} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}