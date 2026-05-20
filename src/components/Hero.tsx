import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#0A1628' }}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116853-786c6d896d4d?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.75)' }} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Expande tu Negocio al Mercado de los Estados Unidos
            </h1>
            <p className="text-xl text-gray-300">
              Parques Industriales Estratégicos en Mission, Texas — A unos pasos del Puente Internacional Pharr
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-bold text-lg px-8" style={{ backgroundColor: '#C9A84C', color: '#0A1628' }}>
              Comprar un Terreno
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="font-bold text-lg px-8 border-2" style={{ borderColor: '#C9A84C', color: '#C9A84C' }}>
              Rentar una Bodega
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-gray-300 mb-2">Agente de Bienes Raíces | RE/MAX Ali</p>
            <p className="text-2xl font-bold" style={{ color: '#C9A84C' }}>Juan Elisondo</p>
          </div>
        </div>

        <div className="hidden md:block relative h-96">
          <video
            src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/sanjuan%20video%20final%20(1).mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}