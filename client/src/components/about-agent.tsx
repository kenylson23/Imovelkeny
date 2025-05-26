import { Button } from "@/components/ui/button";
import { GraduationCap, IdCard, Award, Users } from "lucide-react";

export default function AboutAgent() {
  const contactAgent = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Agente imobiliário profissional"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Conheça Seu Especialista</h2>
            <h3 className="text-2xl text-gold font-semibold mb-4">Carlos Eduardo Silva</h3>
            <p className="text-xl mb-6 opacity-90">
              Especialista em imóveis de alto padrão com mais de 10 anos de experiência no mercado imobiliário de São Paulo.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-gold w-6 h-6" />
                <span>MBA em Negócios Imobiliários - FGV</span>
              </div>
              <div className="flex items-center space-x-3">
                <IdCard className="text-gold w-6 h-6" />
                <span>Certificação CRECI Ativo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-gold w-6 h-6" />
                <span>Top Broker Award 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-gold w-6 h-6" />
                <span>500+ Famílias Atendidas</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">10+</div>
                <div className="text-sm opacity-80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">500+</div>
                <div className="text-sm opacity-80">Imóveis Vendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">95%</div>
                <div className="text-sm opacity-80">Satisfação</div>
              </div>
            </div>
            
            <Button 
              onClick={contactAgent}
              className="bg-gold hover:bg-yellow-600 text-navy px-8 py-4 font-bold text-lg transform hover:scale-105 transition-all"
              size="lg"
            >
              Falar com o Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
