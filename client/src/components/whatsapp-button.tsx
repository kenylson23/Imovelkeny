import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os imóveis disponíveis.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
