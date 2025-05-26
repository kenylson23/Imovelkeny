import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Car } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Cobertura Vila Olimpia",
    description: "Cobertura duplex com vista panorâmica, 4 suítes, piscina privativa e acabamento de alto padrão.",
    price: "R$ 2.850.000",
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Casa Alto de Pinheiros",
    description: "Casa térrea moderna com jardim amplo, piscina, churrasqueira e área de lazer completa.",
    price: "R$ 4.200.000",
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    badge: "Exclusivo",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Penthouse Itaim Bibi",
    description: "Penthouse exclusivo com terraço gourmet, vista 360° da cidade e acabamentos importados.",
    price: "R$ 3.500.000",
    bedrooms: 3,
    bathrooms: 4,
    parking: 3,
    badge: "Lançamento",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export default function FeaturedProperties() {
  const viewProperty = (propertyId: number) => {
    alert(`Visualização da propriedade ${propertyId} seria implementada aqui.`);
  };

  const viewAllProperties = () => {
    alert("Redirecionamento para página completa de propriedades seria implementado aqui.");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-4">Imóveis em Destaque</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das propriedades exclusivas do nosso portfólio premium
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-navy">{property.title}</h3>
                  <Badge className="bg-gold text-navy font-bold">{property.badge}</Badge>
                </div>
                
                <p className="text-gray-600 mb-4">{property.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.bedrooms} quartos
                    </span>
                    <span className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms} banheiros
                    </span>
                    <span className="flex items-center">
                      <Car className="w-4 h-4 mr-1" />
                      {property.parking} vagas
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-navy">{property.price}</span>
                  <Button 
                    onClick={() => viewProperty(property.id)}
                    className="bg-navy hover:bg-blue-900 text-white"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={viewAllProperties}
            className="bg-gold hover:bg-yellow-600 text-navy px-8 py-4 font-bold text-lg transform hover:scale-105 transition-all"
            size="lg"
          >
            Ver Todos os Imóveis
          </Button>
        </div>
      </div>
    </section>
  );
}
