import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Qual o valor da sua comissão?",
    answer: "Trabalhamos com comissões competitivas e transparentes. O valor varia conforme o tipo de transação e será sempre acordado previamente. Nossa prioridade é seu resultado, não apenas nossa comissão."
  },
  {
    question: "Quanto tempo demora para vender um imóvel?",
    answer: "Com nossa estratégia de marketing digital e rede de contatos, a média é de 60-90 dias para imóveis bem precificados. Imóveis premium podem levar mais tempo, mas garantimos exposição máxima."
  },
  {
    question: "Vocês auxiliam com financiamento?",
    answer: "Sim! Temos parcerias com os principais bancos e correspondentes bancários. Auxiliamos na análise de crédito, documentação e conseguimos as melhores condições de financiamento para você."
  },
  {
    question: "Como funciona a avaliação do meu imóvel?",
    answer: "Fazemos uma análise comparativa de mercado (CMA) gratuita, considerando localização, condições do imóvel, tendências de mercado e transações recentes na região para definir o preço ideal."
  },
  {
    question: "Atendem em outras cidades além de São Paulo?",
    answer: "Nosso foco principal é São Paulo e Grande São Paulo, onde temos maior expertise. Para outras regiões, podemos indicar parceiros de confiança da nossa rede."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos suas principais dúvidas sobre o processo de compra e venda
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 animate-fade-in-up">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-navy">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-gold w-5 h-5" />
                  ) : (
                    <ChevronDown className="text-gold w-5 h-5" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
