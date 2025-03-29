
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    quote: "O massacre fortaleceu nossa resistência. Continuamos a lutar não apenas pela demarcação de terras, mas pela afirmação de nossa identidade e cultura.",
    author: "Constantino Füpeatücü",
    role: "Museólogo Ticuna, sobrevivente do massacre"
  },
  {
    quote: "Enquanto houver um Ticuna vivo, a memória daquele dia permanecerá viva, assim como nossa luta por justiça e reconhecimento.",
    author: "Líder Ticuna",
    role: "Representante do povo Ticuna"
  },
  {
    quote: "O Massacre do Capacete é um símbolo da violência sistemática contra os povos indígenas e da impunidade que ainda persiste no Brasil.",
    author: "Antropólogo",
    role: "Pesquisador da questão indígena no Brasil"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vozes da Memória</h2>
          <p className="text-memorial-dark/80 max-w-3xl mx-auto">
            Depoimentos que mantêm viva a memória e a luta do povo Ticuna
          </p>
          <div className="w-20 h-1 bg-memorial-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-memorial-beige border-none shadow-md">
              <CardContent className="p-6 relative">
                <QuoteIcon className="text-memorial-accent/30 absolute top-4 right-4" size={32} />
                <p className="mb-6 text-memorial-dark/90 italic">"{testimonial.quote}"</p>
                <div className="border-t border-memorial-brown/20 pt-4">
                  <p className="font-bold text-memorial-brown">{testimonial.author}</p>
                  <p className="text-sm text-memorial-dark/70">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
