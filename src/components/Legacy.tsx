
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const legacyItems = [
  {
    title: "Direitos Territoriais",
    description: "A luta pelo reconhecimento territorial dos povos indígenas ganhou visibilidade após o massacre, contribuindo para o avanço nos processos de demarcação de terras. Em 1993, cinco anos após o massacre, foram finalmente demarcadas e homologadas seis Terras Indígenas Ticuna, totalizando aproximadamente 1,2 milhão de hectares no Alto Solimões.",
    icon: "🏞️",
    link: "https://pib.socioambiental.org/pt/Povo:Ticuna"
  },
  {
    title: "Museu Magüta",
    description: "O primeiro museu indígena do Brasil, criado em 1991 como resultado da resistência Ticuna, tornou-se símbolo da reafirmação cultural e identitária. Com acervo de mais de 500 peças, representa a cosmovisão e história dos Ticuna. Em 1995, foi reconhecido pelo Conselho Internacional de Museus como o melhor museu do ano.",
    icon: "🏛️",
    link: "https://www.museumaguta.com.br"
  },
  {
    title: "Organização Política",
    description: "O fortalecimento das organizações indígenas e a articulação com movimentos sociais e entidades de apoio foi uma resposta à violência sofrida. O Conselho Geral da Tribo Ticuna (CGTT), fundado em 1982, ganhou força após o massacre e inspirou a criação de outras organizações indígenas na região amazônica.",
    icon: "✊",
    link: ""
  },
  {
    title: "Educação e Memória",
    description: "A história do massacre é transmitida às novas gerações como parte da memória coletiva, alimentando a luta contínua por justiça e direitos. Projetos educacionais como o 'Programa de Educação Ticuna' integram esse episódio ao currículo escolar indígena, preservando a memória histórica através de relatos orais e materiais didáticos específicos.",
    icon: "📚",
    link: ""
  },
  {
    title: "Visibilidade Internacional",
    description: "O caso ganhou repercussão mundial, chamando atenção para a situação dos povos indígenas no Brasil e pressionando por medidas de proteção. Organizações como Survival International e Amnesty International incluíram o massacre em seus relatórios, contribuindo para pressionar o governo brasileiro a investigar o caso e proteger os povos indígenas.",
    icon: "🌎",
    link: "https://www.survivalinternational.org/tribes/ticuna"
  },
  {
    title: "Debate sobre Justiça",
    description: "O desfecho judicial do caso evidenciou as falhas do sistema de justiça brasileiro ao lidar com crimes contra povos indígenas, gerando discussões sobre reforma. A absolvição do mandante e a redução das penas dos executores, em 2004, reforçaram a percepção de que o racismo estrutural influencia decisões judiciais envolvendo povos indígenas.",
    icon: "⚖️",
    link: ""
  }
];

const impactItems = [
  {
    title: "Cultura e Arte",
    description: "O massacre inspirou produções artísticas e culturais, como poemas, músicas e pinturas que retratam a resistência e a memória Ticuna.",
    image: "placeholder-ticuna-art.jpg"
  },
  {
    title: "Legislação Indígena",
    description: "O caso contribuiu para o debate sobre a necessidade de legislação específica para a proteção dos direitos e territórios indígenas no Brasil.",
    image: "placeholder-indigenous-legislation.jpg"
  },
  {
    title: "Fortalecimento Identitário",
    description: "Após o massacre, o povo Ticuna intensificou processos de autoafirmação cultural e valorização de suas tradições como forma de resistência.",
    image: "placeholder-ticuna-identity.jpg"
  }
];

const ticunaHistory = [
  {
    title: "Origens Ancestrais",
    description: "O povo Ticuna (também grafado como Tikuna, Tukuna ou Magüta) habita tradicionalmente a região amazônica da tríplice fronteira entre Brasil, Peru e Colômbia há milênios. Segundo sua cosmologia, são descendentes de Yo'i, herói mítico que os pescou com iscas de macaxeira no igarapé sagrado Eware.",
    image: "placeholder-ticuna-origins.jpg"
  },
  {
    title: "Organização Social",
    description: "A sociedade Ticuna é tradicionalmente organizada em clãs patrilineares divididos em duas metades: com penas (aves) e sem penas (animais terrestres e plantas). Essa organização regula os casamentos, que devem ocorrer entre pessoas de clãs opostos, evitando o que consideram incesto.",
    image: "placeholder-ticuna-social.jpg"
  },
  {
    title: "Contato e Resistência",
    description: "O contato com os colonizadores europeus data do século XVII. Os Ticuna sofreram com a escravidão durante o ciclo da borracha e foram forçados a trabalhar nos seringais. Ao longo dos séculos, desenvolveram estratégias de resistência cultural e territorial que permitiram sua sobrevivência como povo.",
    image: "placeholder-ticuna-resistance.jpg"
  }
];

const Legacy = () => {
  return (
    <section id="legado" className="py-20 bg-memorial-green text-white">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Legado e Impacto</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Como o Massacre do Capacete influenciou a luta dos povos indígenas e a sociedade brasileira,
            transformando a tragédia em força para resistência e mudança
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-white text-center">O Povo Ticuna: Origens e História</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ticunaHistory.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors overflow-hidden">
                <div className="h-48 overflow-hidden bg-memorial-dark/50 flex items-center justify-center">
                  <p className="text-white/50 text-sm px-4 py-2 border border-white/20 rounded">
                    {index === 0 ? "Imagem: Origens e cosmologia Ticuna" : 
                     index === 1 ? "Imagem: Organização social Ticuna" : 
                     "Imagem: Resistência histórica Ticuna"}
                  </p>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 bg-white/10 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3 text-white">Dados Demográficos e Linguísticos</h4>
            <p className="text-white/80 mb-4">
              Os Ticuna constituem o povo indígena mais numeroso da Amazônia brasileira, com uma população estimada em mais de 36.000 pessoas no Brasil, 
              principalmente no estado do Amazonas, além de cerca de 7.000 no Peru e 8.000 na Colômbia. A língua Ticuna é considerada isolada, 
              sem parentesco comprovado com outras línguas indígenas, o que evidencia sua singularidade cultural e histórica na região amazônica.
            </p>
            <div className="flex justify-center mt-4">
              <a 
                href="https://pib.socioambiental.org/pt/Povo:Ticuna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white/70 hover:text-white transition-colors"
              >
                Saiba mais sobre os Ticuna <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legacyItems.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Saiba mais <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Impacto Cultural e Social</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {impactItems.map((item, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-memorial-dark flex items-center justify-center"
                >
                  <p className="text-white/50 text-sm px-4 py-2 border border-white/20 rounded">
                    {index === 0 ? "Imagem: Arte e cultura Ticuna pós-massacre" : 
                     index === 1 ? "Imagem: Documentos de legislação indígena" : 
                     "Imagem: Cerimônias e rituais Ticuna"}
                  </p>
                </div>
                <div className="absolute inset-0 bg-memorial-dark/70"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl text-white/90 italic">
            "O sangue derramado no massacre irrigou as sementes da resistência que hoje florescem na luta dos povos originários por reconhecimento e dignidade. O massacre não foi o fim, mas o início de uma nova fase da luta Ticuna."
          </blockquote>
          <p className="mt-4 text-white/70 text-sm">
            — Manoel Moura, Líder do Conselho Geral da Tribo Ticuna, 2018
          </p>

          <div className="mt-12 p-6 border border-white/20 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Documentário: "Memória Ticuna - O Massacre do Capacete"</h4>
            <div className="aspect-video bg-black/40 rounded mb-4 flex items-center justify-center">
              <div className="text-white/60 text-center p-8">
                <p className="mb-3">Visualização do documentário indisponível</p>
                <p className="text-sm">Clique abaixo para acessar o conteúdo completo</p>
              </div>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Assistir Documentário Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
