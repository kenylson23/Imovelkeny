import { Search, Handshake, Shield, Calculator, Home, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Consultoria Personalizada",
    description: "Análise completa do seu perfil para encontrar o imóvel ideal que atenda todas as suas necessidades e expectativas."
  },
  {
    icon: Handshake,
    title: "Negociação Especializada", 
    description: "Experiência em negociações complexas garantindo as melhores condições de compra ou venda para você."
  },
  {
    icon: Shield,
    title: "Assessoria Jurídica",
    description: "Acompanhamento completo de toda documentação e processos legais para uma transação segura."
  },
  {
    icon: Calculator,
    title: "Análise de Investimento",
    description: "Avaliação detalhada do potencial de valorização e retorno do investimento imobiliário."
  },
  {
    icon: Home,
    title: "Imóveis Exclusivos",
    description: "Acesso a um portfólio exclusivo de propriedades de alto padrão não disponíveis no mercado geral."
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Disponibilidade total para atender suas necessidades a qualquer hora, incluindo finais de semana."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-4">Serviços Especializados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um atendimento personalizado e completo para todas as suas necessidades imobiliárias
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-light-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="text-gold w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
