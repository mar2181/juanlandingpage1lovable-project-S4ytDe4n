import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Por qué Mission', href: '#mission' },
  { label: 'Parques Industriales', href: '#parks' },
  { label: 'Industrias', href: '#industries' },
  { label: 'Bodega en Renta', href: '#warehouse' },
  { label: 'Contacto', href: '#contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: '#0A1628' }}>
              Juan Elizondo
            </h1>
            <p className="text-xs" style={{ color: '#C9A84C' }}>RE/MAX Elite | Mission, TX</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/19565221481" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm font-medium hover:text-gray-900">
              +1 (956) 522-1481
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-200">
            <div className="pt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://wa.me/19565221481" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-gray-900 font-medium">
                +1 (956) 522-1481
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}