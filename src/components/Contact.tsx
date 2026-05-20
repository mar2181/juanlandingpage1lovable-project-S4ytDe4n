import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: 'comprar',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setFormData({ name: '', company: '', phone: '', email: '', interest: 'comprar', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Platica con Juan sobre tu Proyecto
          </h2>
          <p className="text-xl text-gray-300">
            Te responderemos ahorita mismo para ayudarte a crecer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg" style={{ backgroundColor: '#1a2a3a' }}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Phone size={24} style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">Teléfono</p>
                    <a href="tel:+19565221481" className="text-gray-300 hover:text-white transition">
                      +1 (956) 522-1481
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" style={{ backgroundColor: '#1a2a3a' }}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <MessageCircle size={24} style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">WhatsApp</p>
                    <a href="https://wa.me/19565221481" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                      +1 (956) 522-1481
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" style={{ backgroundColor: '#1a2a3a' }}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Mail size={24} style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <a href="mailto:juan.elizondo@remax.com" className="text-gray-300 hover:text-white transition">
                      juan.elizondo@remax.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="font-bold text-white mb-2">Juan Elizondo</p>
              <p className="text-sm text-gray-300">Agente de Bienes Raíces Comerciales</p>
              <p className="text-sm text-gray-300">RE/MAX Elite</p>
              <p className="text-sm text-gray-300">Mission, Texas</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border-0 shadow-2xl" style={{ backgroundColor: '#1a2a3a' }}>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Envía tu consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Nombre completo
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Tu teléfono"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      ¿Qué te interesa?
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      <option value="comprar">Comprar un Terreno</option>
                      <option value="rentar">Rentar una Bodega</option>
                      <option value="info">Solo quiero información</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-bold text-lg"
                    style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}
                  >
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}