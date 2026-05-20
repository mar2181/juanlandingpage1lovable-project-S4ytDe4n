import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Ruler, DollarSign } from 'lucide-react';

const properties = [
  {
    title: "Oficinas Empresariales Sector Centro",
    location: "Mission, Texas",
    price: "$450,000",
    size: "2,500 m²",
    type: "Oficinas",
    image: "https://v3b.fal.media/files/b/0a9ae88b/npteP80LGEyiBopPaC4bf_442a5d4019d84c378d0efc2780093710.jpg"
  },
  {
    title: "Plaza Comercial Multiservicios",
    location: "Área de negocios fronteriza",
    price: "$1,200,000",
    size: "4,800 m²",
    type: "Comercial",
    image: "https://v3b.fal.media/files/b/0a9ae88b/2Q2zQCyuyegwXJiWMtc6f_2c00dda8e5394456b76f8690c76691bc.jpg"
  },
  {
    title: "Centro de Distribución Logístico",
    location: "Corredor industrial",
    price: "$890,000",
    size: "6,000 m²",
    type: "Industrial",
    image: "https://v3b.fal.media/files/b/0a9ae88b/NX75UWSPYOaR43GxIGfEY_858bb80065b04153abf1aebc170004ad.jpg"
  }
];

export default function Properties() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Propiedades Destacadas
          </h2>
          <p className="text-xl text-gray-600">
            Oportunidades de inversión premium en el norte de México y Texas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}
                  >
                    {property.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{property.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin size={16} style={{ color: '#C9A84C' }} />
                  {property.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Precio</p>
                    <p className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                      {property.price}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Superficie</p>
                    <p className="text-lg font-bold text-gray-800 flex items-center gap-1">
                      <Ruler size={16} />
                      {property.size}
                    </p>
                  </div>
                </div>
                <Button className="w-full font-bold" style={{ backgroundColor: '#0A1628' }}>
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}