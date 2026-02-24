import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ServiceAreas from './components/ServiceAreas';
import HowItWorks from './components/HowItWorks';
import DiagnosticForm from './components/DiagnosticForm';
import Differentials from './components/Differentials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SuccessMessage from './components/SuccessMessage';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  const scrollToDiagnostico = () => {
    const element = document.getElementById('diagnostico');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero onDiagnosticoClick={scrollToDiagnostico} />
      <About />
      <ServiceAreas />
      <HowItWorks />
      <DiagnosticForm onSubmitSuccess={() => setShowSuccess(true)} />
      <Differentials />
      <FinalCTA onDiagnosticoClick={scrollToDiagnostico} />
      <Footer />

      {showSuccess && <SuccessMessage />}
    </div>
  );
}

export default App;
