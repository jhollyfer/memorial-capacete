
import React from 'react';

const timelineEvents = [
  {
    year: "Décadas de 1970-80",
    title: "Intensificação dos Conflitos",
    description: "Aumento dos conflitos entre os Ticuna e madeireiros, grileiros e posseiros na região do Alto Solimões."
  },
  {
    year: "Início dos anos 1980",
    title: "Mobilização dos Ticuna",
    description: "Os Ticuna se organizam em assembleias e publicam o jornal Magüta para reivindicar territórios e direitos."
  },
  {
    year: "1987-1988",
    title: "Aumento das Tensões",
    description: "Ameaças aos Ticuna se intensificam com a notícia da demarcação de terras pela Funai."
  },
  {
    year: "28 de março de 1988",
    title: "O Massacre",
    description: "Grupo armado ataca indígenas reunidos na Boca do Capacete, resultando em mortos, feridos e desaparecidos."
  },
  {
    year: "29-30 de março de 1988",
    title: "Repercussão na Mídia",
    description: "O ataque ganha destaque na mídia nacional e internacional, sendo chamado de 'Massacre na Boca do Capacete'."
  },
  {
    year: "Abril de 1988",
    title: "Investigações Iniciais",
    description: "Oscar Castelo Branco é apontado como mandante, mas nega envolvimento."
  },
  {
    year: "1994",
    title: "Reclassificação do Crime",
    description: "O caso é reclassificado de homicídio para genocídio após pressão do Ministério Público Federal."
  },
  {
    year: "1991",
    title: "Fundação do Museu Magüta",
    description: "É criado o primeiro museu indígena do Brasil como parte da reafirmação cultural dos Ticuna."
  },
  {
    year: "18 de maio de 2001",
    title: "Condenação",
    description: "Oscar Castelo Branco e outros 13 acusados são condenados a penas entre 15 e 25 anos."
  },
  {
    year: "4 de novembro de 2004",
    title: "Absolvição e Redução de Penas",
    description: "O Tribunal Regional Federal absolve Oscar Castelo Branco e reduz as penas dos demais condenados."
  },
  {
    year: "Até hoje",
    title: "Memória e Resistência",
    description: "O massacre segue como símbolo da luta dos povos indígenas por justiça, território e reconhecimento."
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-memorial-beige">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cronologia dos Fatos</h2>
          <p className="text-memorial-dark/80 max-w-3xl mx-auto">
            Os principais eventos relacionados ao Massacre do Capacete e seus desdobramentos
          </p>
          <div className="w-20 h-1 bg-memorial-accent mx-auto mt-6"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div className="timeline-line"></div>
          
          {/* Timeline events */}
          <div className="space-y-10">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-12">
                <div className="timeline-circle"></div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <span className="inline-block px-3 py-1 bg-memorial-accent/10 text-memorial-accent rounded-full text-sm font-medium mb-2">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-memorial-dark/80">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
