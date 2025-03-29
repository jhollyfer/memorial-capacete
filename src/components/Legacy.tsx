
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const legacyItems = [
  {
    title: "Direitos Territoriais",
    description: "A luta pelo reconhecimento territorial dos povos indígenas ganhou visibilidade após o massacre, contribuindo para o avanço nos processos de demarcação de terras.",
    icon: "🏞️"
  },
  {
    title: "Museu Magüta",
    description: "O primeiro museu indígena do Brasil, criado em 1991 como resultado da resistência Ticuna, tornou-se símbolo da reafirmação cultural e identitária.",
    icon: "🏛️"
  },
  {
    title: "Organização Política",
    description: "O fortalecimento das organizações indígenas e a articulação com movimentos sociais e entidades de apoio foi uma resposta à violência sofrida.",
    icon: "✊"
  },
  {
    title: "Educação e Memória",
    description: "A história do massacre é transmitida às novas gerações como parte da memória coletiva, alimentando a luta contínua por justiça e direitos.",
    icon: "📚"
  },
  {
    title: "Visibilidade Internacional",
    description: "O caso ganhou repercussão mundial, chamando atenção para a situação dos povos indígenas no Brasil e pressionando por medidas de proteção.",
    icon: "🌎"
  },
  {
    title: "Debate sobre Justiça",
    description: "O desfecho judicial do caso evidenciou as falhas do sistema de justiça brasileiro ao lidar com crimes contra povos indígenas, gerando discussões sobre reforma.",
    icon: "⚖️"
  }
];

const Legacy = () => {
  return (
    <section id="legado" className="py-20 bg-memorial-green text-white">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Legado e Impacto</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Como o Massacre do Capacete influenciou a luta dos povos indígenas e a sociedade brasileira
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legacyItems.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-white/90 italic">
            "O sangue derramado no massacre irrigou as sementes da resistência que hoje florescem na luta dos povos originários por reconhecimento e dignidade."
          </p>
          <p className="mt-4 text-white/70 text-sm">
            — Reflexão sobre o legado do Massacre do Capacete
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
