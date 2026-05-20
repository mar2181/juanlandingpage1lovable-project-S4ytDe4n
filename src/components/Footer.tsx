export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0A1628' }} className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Juan Elizondo</h3>
            <p className="text-gray-400 text-sm">Agente de Bienes Raíces Comerciales</p>
            <p className="text-gray-400 text-sm">RE/MAX Elite | Mission, Texas</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition">Inicio</a></li>
              <li><a href="#mission" className="hover:text-white transition">Por qué Mission</a></li>
              <li><a href="#parks" className="hover:text-white transition">Parques Industriales</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">Venta de Terrenos</li>
              <li className="hover:text-white transition cursor-pointer">Renta de Bodegas</li>
              <li className="hover:text-white transition cursor-pointer">Asesoría Inmobiliaria</li>
              <li className="hover:text-white transition cursor-pointer">Gestión Integral</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} RE/MAX Elite | Mission, TX. Todos los derechos reservados. Juan Elizondo.
          </p>
        </div>
      </div>
    </footer>
  );
}