import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Check, ExternalLink } from 'lucide-react';

const parks = [
  {
    name: "MCC Industrial Park",
    location: "McAllen, Texas",
    status: "Disponible Ahora",
    description: "Centro industrial estratégico en McAllen - Acceso directo a la frontera México-EE.UU. y rutas comerciales principales.",
    lotsAvailable: "Desde 1 acre - Múltiples opciones disponibles",
    features: [
      "Ubicación premium en McAllen, corazón del Valle del Río Grande",
      "Infraestructura de primer nivel: agua, gas, electricidad",
      "Acceso directo a carreteras principales y puentes internacionales",
      "Seguridad 24/7 con control de acceso",
      "Perfecto para manufactura, logística e importación/exportación",
      "Disponibilidad inmediata para construcción"
    ],
    image: "https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/mc%202026-05-19%20213726.png",
    website: "https://border-trade-logistics.lovable.app"
  },
  {
    name: "San Juan Military & Industrial Park",
    location: "San Juan, Texas",
    status: "Disponible Ahora",
    description: "Ubicado en San Juan, Texas - Acceso estratégico a la frontera México-EE.UU.",
    lotsAvailable: "Desde 1 acre - Múltiples opciones disponibles",
    features: [
      "Ubicación premium cerca de McAllen y la frontera",
      "Infraestructura de primer nivel: agua, gas, electricidad",
      "Acceso directo a carreteras principales",
      "Seguridad 24/7 con control de acceso",
      "Perfecto para manufactura, logística e importación/exportación",
      "Disponibilidad inmediata para construcción"
    ],
    image: "https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/Screenshot%202026-05-19%20213050.png",
    website: "https://juanelizondoremax-sanjuanmilataryindustrialpark.com"
  }
];

export default function IndustrialParks() {
  return (
    <section id="parks" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Nuestros Parques Industriales
          </h2>
          <p className="text-xl text-gray-600">
            Proyectos activos con terrenos disponibles listos para tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {parks.map((park, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={park.image}
                  alt={park.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-2xl">{park.name}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{park.location}</p>
                  </div>
                  <Badge style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}>
                    {park.status}
                  </Badge>
                </div>
                <p className="text-gray-600">{park.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Terrenos Disponibles</p>
                  <p className="text-lg font-bold" style={{ color: '#C9A84C' }}>{park.lotsAvailable}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-3">Características</p>
                  <ul className="space-y-2">
                    {park.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={18} style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {park.website ? (
                  <Button className="w-full font-bold" style={{ backgroundColor: '#C9A84C', color: '#0A1628' }} asChild>
                    <a href={park.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Ver Terrenos Disponibles
                      <ExternalLink size={18} />
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full font-bold" style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}>
                    Ver Terrenos Disponibles
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}