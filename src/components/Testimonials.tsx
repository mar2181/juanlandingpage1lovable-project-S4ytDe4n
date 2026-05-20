import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Director Ejecutivo, Grupo Mendoza",
    company: "Tamaulipas",
    text: "Juan nos ayudó a encontrar la ubicación perfecta para nuestra nueva sede. Su conocimiento del mercado fronterizo es incomparable.",
    image: "https://v3b.fal.media/files/b/0a9ae88b/IsUVf32AFrdEZ-unygAwU_505a11ca38fa488f989c18e62eaf3117.jpg",
    rating: 5
  },
  {
    name: "María González",
    role: "Propietaria, Cadena Comercial",
    company: "Nuevo León",
    text: "Excelente profesionalismo y dedicación. Cerró nuestro mejor negocio en tiempo récord. Lo recomiendo ampliamente.",
    image: "https://v3b.fal.media/files/b/0a9ae88b/W0Bi0b43PJOthuEl6ocQt_cb38b3a788a2495cb66edc30fc4c5db0.jpg",
    rating: 5
  },
  {
    name: "Roberto Sánchez",
    role: "Empresario Independiente",
    company: "Coahuila",
    text: "Juan es más que un agente, es un verdadero asesor de negocios. Me ayudó a tomar la decisión correcta para mi expansión.",
    image: "https://v3b.fal.media/files/b/0a9ae88b/nHDVkNBM3sJ62FktHfMuu_ac646d00211e4aa89154cd7f9b63bd4a.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1628' }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            Empresarios y dueños de negocios satisfechos de todo el norte de México
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="#C9A84C" style={{ color: '#C9A84C' }} />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs" style={{ color: '#C9A84C' }}>{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}