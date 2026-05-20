import Header from './components/Header';
import Hero from './components/Hero';
import WhyMission from './components/WhyMission';
import IndustrialParks from './components/IndustrialParks';
import Industries from './components/Industries';
import WarehouseRental from './components/WarehouseRental';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyMission />
      <IndustrialParks />
      <Industries />
      <WarehouseRental />
      <HowItWorks />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}