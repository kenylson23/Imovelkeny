import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Lock } from "lucide-react";
import { storage } from "@/lib/storage";
import type { InsertLead } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

const insertLeadSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  propertyType: z.string().min(1, "Tipo de imóvel é obrigatório"),
});

export default function HeroSection() {
  const { toast } = useToast();
  const [propertyType, setPropertyType] = useState<string>("Apartamento");

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "Apartamento",
    },
  });

  const leadMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      return await storage.createLead(data);
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Você receberá nossas ofertas exclusivas em breve.",
      });
      form.reset();
      setPropertyType("Apartamento");
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertLead) => {
    leadMutation.mutate({ ...data, propertyType });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-r from-navy to-blue-800 text-white py-20 lg:py-32">
      <div 
        className="absolute inset-0 bg-black bg-opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Encontre o <span className="text-gold">Imóvel Perfeito</span> para Você
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Especialista em imóveis de alto padrão com mais de 10 anos de experiência. 
              Transformo sonhos em endereços.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gold w-5 h-5" />
                <span>500+ Imóveis Vendidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gold w-5 h-5" />
                <span>10+ Anos de Experiência</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gold w-5 h-5" />
                <span>95% Clientes Satisfeitos</span>
              </div>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-gold hover:bg-yellow-600 text-navy px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all"
              size="lg"
            >
              Encontrar Meu Imóvel Agora
            </Button>
          </div>
          
          <Card className="bg-white text-gray-800 shadow-2xl animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-navy">
                Receba Imóveis Exclusivos no Seu Email
              </h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label className="text-sm font-semibold">Nome Completo</Label>
                  <Input
                    {...form.register("name")}
                    placeholder="Seu nome completo"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-semibold">Email</Label>
                  <Input
                    {...form.register("email")}
                    type="email"
                    placeholder="seu@email.com"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-semibold">Telefone</Label>
                  <Input
                    {...form.register("phone")}
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-semibold">Tipo de Imóvel</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Apartamento">Apartamento</SelectItem>
                      <SelectItem value="Casa">Casa</SelectItem>
                      <SelectItem value="Cobertura">Cobertura</SelectItem>
                      <SelectItem value="Terreno">Terreno</SelectItem>
                      <SelectItem value="Comercial">Comercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-navy hover:bg-blue-900 text-white py-4 font-bold text-lg"
                  disabled={leadMutation.isPending}
                >
                  {leadMutation.isPending ? "Enviando..." : "Quero Receber Ofertas Exclusivas"}
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 text-center mt-4 flex items-center justify-center">
                <Lock className="w-4 h-4 mr-1" />
                Seus dados estão 100% seguros conosco
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
