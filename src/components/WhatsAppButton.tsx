import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/19565221481"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-2xl transition transform hover:scale-110"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}