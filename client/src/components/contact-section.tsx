import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { storage } from "@/lib/storage";
import type { InsertConsultation } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

const insertConsultationSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  objective: z.string().min(1, "Objetivo é obrigatório"),
  message: z.string().optional(),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [objective, setObjective] = useState<string>("Comprar Imóvel");

  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      objective: "Comprar Imóvel",
      message: "",
    },
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      return await storage.createConsultation({
        ...data,
        message: data.message || null
      });
    },
    onSuccess: () => {
      toast({
        title: "Consulta Agendada!",
        description: "Entraremos em contato em até 24 horas.",
      });
      form.reset();
      setObjective("Comprar Imóvel");
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao agendar sua consulta. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultation) => {
    consultationMutation.mutate({ ...data, objective });
  };

  const openWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta gratuita.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const callPhone = () => {
    window.location.href = "tel:+5511999999999";
  };

  return (
    <section id="contato" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Pronto para Encontrar Seu Imóvel Ideal?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Entre em contato agora e descubra como podemos transformar seu sonho imobiliário em realidade
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-gold">Entre em Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Phone className="text-navy w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Telefone / WhatsApp</div>
                  <div className="opacity-90">(11) 99999-9999</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Mail className="text-navy w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="opacity-90">contato@premiumimoveis.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <MapPin className="text-navy w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Endereço</div>
                  <div className="opacity-90">Av. Paulista, 1000 - São Paulo, SP</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Clock className="text-navy w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Horário de Atendimento</div>
                  <div className="opacity-90">Segunda a Sábado: 8h às 20h</div>
                  <div className="opacity-90">Domingo: 10h às 18h</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={callPhone}
                className="bg-gold hover:bg-yellow-600 text-navy px-6 py-3 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
          
          <Card className="bg-white text-gray-800 animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-navy">Solicite sua Consulta Gratuita</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-semibold">Nome</Label>
                    <Input
                      {...form.register("name")}
                      placeholder="Seu nome"
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
                  <Label className="text-sm font-semibold">Objetivo</Label>
                  <Select value={objective} onValueChange={setObjective}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Selecione seu objetivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Comprar Imóvel">Comprar Imóvel</SelectItem>
                      <SelectItem value="Vender Imóvel">Vender Imóvel</SelectItem>
                      <SelectItem value="Investir em Imóveis">Investir em Imóveis</SelectItem>
                      <SelectItem value="Consultoria Geral">Consultoria Geral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-sm font-semibold">Mensagem</Label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="Conte-nos mais sobre o que procura..."
                    rows={4}
                    className="form-input"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-navy hover:bg-blue-900 text-white py-4 font-bold text-lg"
                  disabled={consultationMutation.isPending}
                >
                  {consultationMutation.isPending ? "Enviando..." : "Solicitar Consulta Gratuita"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
