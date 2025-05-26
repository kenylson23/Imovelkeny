import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria e João Silva",
    content: "Excepcional! Carlos nos ajudou a encontrar nossa casa dos sonhos em Alto de Pinheiros. Profissionalismo e dedicação incomparáveis. Recomendamos de olhos fechados!",
    property: "Comprou: Casa em Alto de Pinheiros - R$ 2.8M",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    name: "Roberto Mendes",
    content: "Vendi meu apartamento em tempo recorde e pelo melhor preço do mercado. A estratégia de marketing foi brilhante. Parceria que deu muito certo!",
    property: "Vendeu: Apartamento Vila Olimpia - R$ 1.2M",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    name: "Ana Carolina Torres",
    content: "Primeiro apartamento e Carlos tornou tudo muito fácil. Explicou cada detalhe, negociou um ótimo preço e me deu total segurança na compra.",
    property: "Comprou: Apartamento Jardins - R$ 950K",
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de famílias que encontraram seu lar dos sonhos conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                
                <div className="text-sm text-gray-500">
                  {testimonial.property}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
