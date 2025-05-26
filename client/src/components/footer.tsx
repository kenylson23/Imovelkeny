import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
                <span className="text-navy font-bold text-xl">🏠</span>
              </div>
              <span className="text-xl font-bold">Premium Imóveis</span>
            </div>
            <p className="text-gray-400 mb-4">
              Especialistas em imóveis de alto padrão, transformando sonhos em endereços há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gold hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gold hover:text-yellow-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gold hover:text-yellow-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Compra de Imóveis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Venda de Imóveis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoria Imobiliária</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Avaliação de Imóveis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Regiões</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Vila Olympia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Itaim Bibi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jardins</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alto de Pinheiros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Moema</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="text-gold w-4 h-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-gold w-4 h-4" />
                <span>contato@premiumimoveis.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="text-gold w-4 h-4" />
                <span>Av. Paulista, 1000 - SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Premium Imóveis. Todos os direitos reservados. CRECI/SP 123456</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white mr-4 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
