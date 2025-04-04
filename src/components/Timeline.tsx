import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import React from "react";

const timelineEvents = [
  {
    year: "Décadas de 1970-80",
    title: "Intensificação dos Conflitos",
    description:
      "Aumento dos conflitos entre os Ticuna e madeireiros, grileiros e posseiros na região do Alto Solimões devido à exploração ilegal de recursos naturais e invasão de terras tradicionalmente ocupadas.",
    detail:
      "A expansão da fronteira agrícola e madeireira no Alto Solimões gerou pressão crescente sobre os territórios Ticuna. Comunidades inteiras foram ameaçadas por grupos armados a serviço de latifundiários e madeireiros.",
    image: "placeholder-conflicts-70s.jpg",
  },
  {
    year: "Início dos anos 1980",
    title: "Mobilização dos Ticuna",
    description:
      "Os Ticuna se organizam em assembleias e publicam o jornal Magüta para reivindicar territórios e direitos. Fundação do Conselho Geral da Tribo Ticuna (CGTT) em 1982.",
    detail:
      "O CGTT foi a primeira organização indígena formal na região, representando um marco no protagonismo político dos Ticuna. O jornal Magüta tornou-se um importante veículo de comunicação e resistência cultural.",
    image: "placeholder-ticuna-organization.jpg",
  },
  {
    year: "1987",
    title: "Anúncio da Demarcação",
    description:
      "A Funai anuncia oficialmente a demarcação das terras Ticuna, provocando forte reação de madeireiros e posseiros que exploravam recursos na área.",
    detail:
      "O anúncio da demarcação foi visto como uma vitória pelos Ticuna, mas desencadeou uma onda de ameaças e intimidações por parte dos ocupantes não-indígenas, que se recusavam a deixar as terras.",
    image: "https://images.unsplash.com/photo-1504199367656-ed345f277353",
  },
  {
    year: "Início de 1988",
    title: "Crescentes Ameaças",
    description:
      'Oscar Castelo Branco intensifica ameaças contra líderes Ticuna que reivindicavam a demarcação, prometendo "dar um fim" na questão.',
    detail:
      "Funcionários locais da Funai reportaram as ameaças à sede em Brasília, solicitando proteção para as comunidades Ticuna, mas as medidas adotadas foram insuficientes.",
    image: "https://images.unsplash.com/photo-1553255998-b66d706a6262",
  },
  {
    year: "28 de março de 1988",
    title: "O Massacre",
    description:
      "Grupo armado liderado por Oscar Castelo Branco ataca indígenas reunidos na Boca do Capacete, resultando em 4 mortos confirmados, 23 feridos e 10 desaparecidos.",
    detail:
      "O ataque ocorreu por volta das 9h da manhã, quando aproximadamente 90 Ticuna estavam reunidos em assembleia. Os atacantes chegaram em duas lanchas, usando roupas camufladas e com rostos cobertos. O tiroteio durou cerca de 30 minutos.",
    image: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5",
  },
  {
    year: "29-30 de março de 1988",
    title: "Repercussão Imediata",
    description:
      "O ataque ganha destaque na mídia nacional e internacional, sendo chamado de 'Massacre na Boca do Capacete'. Primeiras investigações são iniciadas.",
    detail:
      "Equipes de reportagem chegaram ao local no dia seguinte, documentando os corpos e entrevistando sobreviventes. As imagens chocantes foram transmitidas em telejornais de todo o país, gerando forte comoção pública.",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1",
  },
  {
    year: "Abril de 1988",
    title: "Negação do Mandante",
    description:
      'Em entrevista, Oscar Castelo Branco nega envolvimento, afirmando estar em Manaus no dia do ataque e sugerindo ser uma "armação da Funai".',
    detail:
      'A fala de Castelo Branco revelou desprezo pelos ind��genas, referindo-se a eles como "preguiçosos" e "manipulados". Sua tentativa de se distanciar do crime contrastava com diversos depoimentos que o apontavam como mandante.',
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    year: "1991",
    title: "Fundação do Museu Magüta",
    description:
      "É criado em Benjamin Constant (AM) o primeiro museu indígena do Brasil como parte da reafirmação cultural e política dos Ticuna após o massacre.",
    detail:
      'O museu reuniu peças relacionadas à cosmologia, rituais e história Ticuna. Em 1995, recebeu o prêmio de "Melhor Museu do Ano" concedido pelo International Council of Museums, sendo reconhecido internacionalmente por seu pioneirismo.',
    image: "https://images.unsplash.com/photo-1566152449065-05a2ad4c3585",
  },
  {
    year: "1994",
    title: "Reclassificação do Crime",
    description:
      "O caso é reclassificado de homicídio para genocídio após pressão do Ministério Público Federal, reconhecendo o contexto étnico da violência.",
    detail:
      "A reclassificação foi um marco jurídico importante, pois reconheceu que o ataque visava eliminar parcialmente um grupo étnico específico. Foi um dos poucos casos no Brasil enquadrados na lei de genocídio (Lei 2.889/1956).",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc",
  },
  {
    year: "18 de maio de 2001",
    title: "Condenação",
    description:
      "Treze anos após o massacre, Oscar Castelo Branco e outros 13 acusados são condenados pela juíza Jaíza Maria Pinto Fraxe a penas entre 15 e 25 anos.",
    detail:
      "A sentença foi considerada histórica por grupos de direitos humanos e organizações indígenas, representando uma rara condenação por crimes contra povos indígenas no Brasil.",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb",
  },
  {
    year: "4 de novembro de 2004",
    title: "Absolvição e Redução de Penas",
    description:
      "O Tribunal Regional Federal absolve Oscar Castelo Branco e reduz as penas dos demais condenados de 15-25 anos para 12 anos, levando à soltura de réus.",
    detail:
      "A decisão da 3ª Turma do TRF-1, em 27 de outubro de 2004, foi vista como um retrocesso pela comunidade Ticuna e organizações de direitos humanos, reforçando o padrão de impunidade em casos de violência contra indígenas.",
    image: "https://images.unsplash.com/photo-1560264641-1b5841a9c4b2",
  },
  {
    year: "2018",
    title: "30 Anos do Massacre",
    description:
      "Comunidades Ticuna realizam evento memorial marcando três décadas do massacre, reafirmando a luta por justiça e memória.",
    detail:
      "O evento incluiu depoimentos de sobreviventes, exposição fotográfica e debates sobre a situação atual dos Ticuna. Lideranças destacaram que, apesar das terras demarcadas, as ameaças continuam em novas formas.",
    image: "https://images.unsplash.com/photo-1523982440192-dff0f1a9941a",
  },
  {
    year: "Até hoje",
    title: "Memória e Resistência",
    description:
      "O massacre segue como símbolo da luta dos povos indígenas por justiça, território e reconhecimento. A memória é mantida viva através de relatos orais, documentários e publicações.",
    detail:
      "As novas gerações Ticuna aprendem sobre o massacre como parte crucial de sua história coletiva. Organizações como o CGTT continuam ativas na defesa dos direitos Ticuna e na preservação da memória do massacre.",
    image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d",
  },
];

const Timeline = () => {
  const [expandedEvents, setExpandedEvents] = React.useState<number[]>([]);

  const toggleEvent = (index: number) => {
    setExpandedEvents((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="timeline" className="py-20 bg-memorial-beige">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cronologia dos Fatos
          </h2>
          <p className="text-memorial-dark/80 max-w-3xl mx-auto">
            Os principais eventos relacionados ao Massacre do Capacete e seus
            desdobramentos, compondo a linha do tempo deste importante capítulo
            da história indígena brasileira
          </p>
          <div className="w-20 h-1 bg-memorial-accent mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute h-full w-0.5 bg-memorial-accent/30 left-1/2 top-0 -translate-x-1/2"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedEvents.includes(index);

              return (
                <div
                  key={index}
                  className={`relative md:flex ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-5 h-5 rounded-full bg-memorial-accent border-4 border-memorial-beige z-10"></div>

                  {/* Content */}
                  <div className="md:w-1/2 md:px-6">
                    <Collapsible
                      open={isExpanded}
                      onOpenChange={() => toggleEvent(index)}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-5">
                        <span className="inline-block px-3 py-1 bg-memorial-accent/10 text-memorial-accent rounded-full text-sm font-medium mb-2">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                          {event.title}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info
                                  size={18}
                                  className="text-memorial-accent/70"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs bg-memorial-dark text-white p-3">
                                <p>{event.detail}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </h3>
                        <p className="text-memorial-dark/80">
                          {event.description}
                        </p>

                        {/* <CollapsibleTrigger className="mt-3 flex items-center text-sm text-memorial-accent font-medium hover:text-memorial-accent/80 transition-colors">
                          {isExpanded ? (
                            <>
                              <ChevronUp size={16} className="mr-1" />
                              Mostrar menos
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} className="mr-1" />
                              Mostrar mais
                            </>
                          )}
                        </CollapsibleTrigger> */}
                      </div>

                      <CollapsibleContent>
                        <div className="p-5 pt-0 border-t border-memorial-accent/10 mt-3">
                          <div className="aspect-video overflow-hidden rounded-md mb-4 bg-memorial-beige/60 flex items-center justify-center">
                            <p className="text-memorial-dark/50 text-sm px-3 py-1 text-center">
                              Imagem: {getPlaceholderDescription(index)}
                            </p>
                          </div>
                          <p className="text-memorial-dark/80">
                            {event.detail}
                          </p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Visual representation for mobile */}
                  <div className="md:hidden mt-4 mb-8">
                    {isExpanded && (
                      <div className="aspect-video overflow-hidden rounded-md bg-memorial-beige/60 flex items-center justify-center">
                        <p className="text-memorial-dark/50 text-sm px-3 py-1 text-center">
                          Imagem: {getPlaceholderDescription(index)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-memorial-brown">
            Fontes e Documentação
          </h3>
          <p className="mb-4 text-memorial-dark/80">
            Esta linha do tempo foi compilada com base em documentos oficiais,
            reportagens e depoimentos. Para aprofundar-se neste período
            histórico, consulte:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-memorial-dark/80">
            <li>
              <strong>
                Relatórios da FUNAI e do Ministério Público Federal
              </strong>{" "}
              sobre os conflitos na região do Alto Solimões
            </li>
            <li>
              <strong>Processo Judicial nº 89.1541-5</strong> - Ação penal
              contra os acusados do massacre
            </li>
            <li>
              <strong>
                Arquivo do CIMI (Conselho Indigenista Missionário)
              </strong>{" "}
              que mantém documentação sobre o caso
            </li>
            <li>
              <strong>Documentário "Índios no Brasil - Quem São Eles?"</strong>{" "}
              (1994) que aborda o massacre
            </li>
            <li>
              <strong>Acervo do Museu Magüta</strong> em Benjamin Constant (AM)
            </li>
          </ul>

          {/* <div className="mt-6 p-4 bg-memorial-accent/10 rounded-md">
            <p className="text-memorial-dark/80 text-sm italic">
              "As imagens utilizadas nesta linha do tempo representarão aspectos
              históricos e culturais do povo Ticuna e dos eventos relacionados
              ao Massacre do Capacete. As ilustrações serão atualizadas com
              fotografias autênticas que documentam a história, cultura e
              resistência do povo Ticuna."
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

function getPlaceholderDescription(index: number): string {
  const descriptions = [
    "Conflitos territoriais anos 70-80",
    "Organização política Ticuna anos 80",
    "Anúncio de demarcação de terras",
    "Ameaças contra líderes Ticuna",
    "O dia do massacre em Boca do Capacete",
    "Repercussão do massacre na mídia",
    "Oscar Castelo Branco, acusado como mandante",
    "Museu Magüta, símbolo da resistência",
    "Reclassificação do crime para genocídio",
    "Condenação dos responsáveis",
    "Absolvição do mandante em 2004",
    "Evento memorial de 30 anos do massacre",
    "Cerimônias de memória e resistência",
  ];

  return descriptions[index] || `Evento histórico relacionado ao massacre`;
}

export default Timeline;
