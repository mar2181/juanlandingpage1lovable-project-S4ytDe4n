import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Boxes, Truck, Hammer, Globe, Building2, Snowflake } from 'lucide-react';

const industries = [
  {
    icon: Boxes,
    title: "Industria del Produce",
    subtitle: "Horticultura",
    description: "Bodegas refrigeradas para frutas y verduras. Mission TX es la puerta de entrada del produce mexicano a EE.UU."
  },
  {
    icon: Truck,
    title: "Logística y Transporte",
    subtitle: "Distribución",
    description: "Centros de distribución estratégicos en la frontera. Optimiza tus rutas y expande tu cobertura."
  },
  {
    icon: Hammer,
    title: "Manufactura",
    subtitle: "Producción",
    description: "Plantas de producción cerca de la línea fronteriza. Acceso a mercados mexicano y estadounidense."
  },
  {
    icon: Globe,
    title: "Importación / Exportación",
    subtitle: "Comercio Exterior",
    description: "Almacenaje y gestión aduanal. Facilita tus operaciones comerciales internacionales."
  },
  {
    icon: Building2,
    title: "Construcción e Industria Pesada",
    subtitle: "Almacenamiento",
    description: "Espacios amplios para maquinaria y equipo. Naves con capacidad para carga pesada."
  },
  {
    icon: Snowflake,
    title: "Cadena de Frío",
    subtitle: "Refrigeración Premium",
    description: "Bodegas refrigeradas a tu medida. Mantén tus productos en condiciones óptimas."
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Industrias que Servimos
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones industriales para todo tipo de operaciones comerciales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition h-full">
                <CardHeader>
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#C9A84C' }}
                  >
                    <Icon size={32} style={{ color: '#0A1628' }} />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <p className="text-sm" style={{ color: '#C9A84C' }} className="text-sm font-semibold">
                    {industry.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}