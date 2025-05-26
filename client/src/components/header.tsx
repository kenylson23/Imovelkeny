import { Phone, Mail, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const openWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os imóveis disponíveis.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header className="bg-navy text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
              <span className="text-navy font-bold text-xl">🏠</span>
            </div>
            <span className="text-xl font-bold">Premium Imóveis</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="text-gold w-4 h-4" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-gold w-4 h-4" />
              <span>contato@premiumimoveis.com</span>
            </div>
            <Button 
              onClick={openWhatsApp}
              className="bg-gold hover:bg-yellow-600 text-navy font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
          
          <Button variant="ghost" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
