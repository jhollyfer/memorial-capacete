
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "O massacre fortaleceu nossa resistência. Continuamos a lutar não apenas pela demarcação de terras, mas pela afirmação de nossa identidade e cultura. O Museu Magüta é um símbolo dessa resistência, um lugar onde preservamos nossa memória e mostramos ao mundo que continuamos vivos.",
    author: "Constantino Ramos Füpeatücü",
    role: "Museólogo Ticuna, sobrevivente do massacre",
    image: "placeholder-ticuna-elder.jpg"
  },
  {
    quote: "Eu tinha apenas 12 anos quando ouvi os tiros. Meu pai me puxou para correr em direção ao mato. Muitos não conseguiram escapar. Vimos pessoas caindo enquanto corriam. Aquele dia mudou nossas vidas para sempre, mas reafirmou nossa determinação em defender nosso povo e nossa terra.",
    author: "Pedro Inácio Pinheiro",
    role: "Líder Ticuna, testemunha do massacre",
    image: "placeholder-ticuna-leader.jpg"
  },
  {
    quote: "O Massacre do Capacete é um símbolo da violência sistemática contra os povos indígenas e da impunidade que ainda persiste no Brasil. O caso revela o padrão histórico de desrespeito aos direitos territoriais indígenas e as falhas do sistema de justiça em proteger essas populações.",
    author: "Dra. Maria Helena Rodrigues",
    role: "Antropóloga, pesquisadora da questão indígena no Brasil",
    image: "placeholder-anthropologist.jpg"
  },
  {
    quote: "Na época do julgamento, ficou evidente como o preconceito estrutural contra os povos indígenas influenciou o processo. Apesar das provas contundentes, a absolvição do mandante e a redução das penas demonstram que a justiça no Brasil tem um viés que favorece os poderosos em detrimento dos povos originários.",
    author: "Dr. Paulo Santilli",
    role: "Procurador Federal, atuou no caso do Massacre do Capacete",
    image: "placeholder-federal-attorney.jpg"
  }
];

const archivalQuotes = [
  {
    text: "Houve muitos feridos, muita gente morreu. Jogaram os corpos no rio Solimões. Até hoje não podemos dormir tranquilos.",
    source: "Testemunho de um sobrevivente ao Jornal do Brasil, abril de 1988"
  },
  {
    text: "Os pistoleiros vinham atirando. As pessoas tentavam fugir para o mato, mas muitos não conseguiram. Vi crianças sendo baleadas.",
    source: "Depoimento registrado no processo judicial, 1989"
  },
  {
    text: "Esse crime demonstra o quanto nossa história é marcada por violência contra os povos originários. Continua sendo um símbolo da luta indígena por justiça e reconhecimento.",
    source: "Documentário 'Memória Ticuna', 2018"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vozes da Memória</h2>
          <p className="text-memorial-dark/80 max-w-3xl mx-auto">
            Depoimentos que mantêm viva a memória e a luta do povo Ticuna,
            registrando as perspectivas de sobreviventes, líderes e especialistas
          </p>
          <div className="w-20 h-1 bg-memorial-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <Card key={index} className="bg-memorial-beige border-none shadow-md overflow-hidden flex flex-col md:flex-row">
              <div 
                className="w-full md:w-1/3 h-40 md:h-auto bg-memorial-brown/20 flex items-center justify-center"
              >
                <p className="text-memorial-dark/50 text-sm px-3 py-1 text-center">
                  {index === 0 ? "Imagem: Ancião Ticuna" : "Imagem: Líder Ticuna"}
                </p>
              </div>
              <CardContent className="p-6 relative flex-1">
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
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(2, 4).map((testimonial, index) => (
            <Card key={index} className="bg-memorial-beige border-none shadow-md overflow-hidden flex flex-col md:flex-row">
              <div 
                className="w-full md:w-1/3 h-40 md:h-auto bg-memorial-brown/20 flex items-center justify-center"
              >
                <p className="text-memorial-dark/50 text-sm px-3 py-1 text-center">
                  {index === 0 ? "Imagem: Antropóloga" : "Imagem: Procurador Federal"}
                </p>
              </div>
              <CardContent className="p-6 relative flex-1">
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

        <div className="mt-16 bg-memorial-brown/5 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-memorial-brown text-center">Dos Arquivos Históricos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {archivalQuotes.map((quote, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-memorial-dark/90 italic mb-4">"{quote.text}"</p>
                <p className="text-sm text-memorial-dark/70 font-medium">{quote.source}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Contribua com seu Testemunho</h3>
          <p className="max-w-2xl mx-auto text-memorial-dark/80 mb-6">
            Se você é um sobrevivente, familiar de vítimas ou testemunhou o massacre e seus desdobramentos,
            considere compartilhar sua história para o nosso arquivo de memória oral.
          </p>
          <Button variant="outline" className="border-memorial-accent text-memorial-accent hover:bg-memorial-accent/10">
            Compartilhar Minha História
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
