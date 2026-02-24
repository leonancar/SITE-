import { ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onDiagnosticoClick: () => void;
}

export default function Hero({ onDiagnosticoClick }: HeroProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/driver_.jpeg"
              alt="Drive Consultoria Empresarial"
              className="h-32 w-auto"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme sua empresa em uma operação organizada, lucrativa e estratégica.
          </h1>

          <p className="text-xl sm:text-2xl mb-12 text-gray-300 leading-relaxed">
            A Drive Consultoria Empresarial ajuda pequenas e médias empresas a estruturarem suas finanças,
            fortalecerem vendas e criarem processos eficientes para crescer com segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onDiagnosticoClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Quero meu Diagnóstico Gratuito
              <ArrowRight size={20} />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Falar com um Consultor
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}