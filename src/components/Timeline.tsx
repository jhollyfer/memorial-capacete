
import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const timelineEvents = [
  {
    year: "Décadas de 1970-80",
    title: "Intensificação dos Conflitos",
    description: "Aumento dos conflitos entre os Ticuna e madeireiros, grileiros e posseiros na região do Alto Solimões devido à exploração ilegal de recursos naturais e invasão de terras tradicionalmente ocupadas.",
    detail: "A expansão da fronteira agrícola e madeireira no Alto Solimões gerou pressão crescente sobre os territórios Ticuna. Comunidades inteiras foram ameaçadas por grupos armados a serviço de latifundiários e madeireiros."
  },
  {
    year: "Início dos anos 1980",
    title: "Mobilização dos Ticuna",
    description: "Os Ticuna se organizam em assembleias e publicam o jornal Magüta para reivindicar territórios e direitos. Fundação do Conselho Geral da Tribo Ticuna (CGTT) em 1982.",
    detail: "O CGTT foi a primeira organização indígena formal na região, representando um marco no protagonismo político dos Ticuna. O jornal Magüta tornou-se um importante veículo de comunicação e resistência cultural."
  },
  {
    year: "1987",
    title: "Anúncio da Demarcação",
    description: "A Funai anuncia oficialmente a demarcação das terras Ticuna, provocando forte reação de madeireiros e posseiros que exploravam recursos na área.",
    detail: "O anúncio da demarcação foi visto como uma vitória pelos Ticuna, mas desencadeou uma onda de ameaças e intimidações por parte dos ocupantes não-indígenas, que se recusavam a deixar as terras."
  },
  {
    year: "Início de 1988",
    title: "Crescentes Ameaças",
    description: "Oscar Castelo Branco intensifica ameaças contra líderes Ticuna que reivindicavam a demarcação, prometendo \"dar um fim\" na questão.",
    detail: "Funcionários locais da Funai reportaram as ameaças à sede em Brasília, solicitando proteção para as comunidades Ticuna, mas as medidas adotadas foram insuficientes."
  },
  {
    year: "28 de março de 1988",
    title: "O Massacre",
    description: "Grupo armado liderado por Oscar Castelo Branco ataca indígenas reunidos na Boca do Capacete, resultando em 4 mortos confirmados, 23 feridos e 10 desaparecidos.",
    detail: "O ataque ocorreu por volta das 9h da manhã, quando aproximadamente 90 Ticuna estavam reunidos em assembleia. Os atacantes chegaram em duas lanchas, usando roupas camufladas e com rostos cobertos. O tiroteio durou cerca de 30 minutos."
  },
  {
    year: "29-30 de março de 1988",
    title: "Repercussão Imediata",
    description: "O ataque ganha destaque na mídia nacional e internacional, sendo chamado de 'Massacre na Boca do Capacete'. Primeiras investigações são iniciadas.",
    detail: "Equipes de reportagem chegaram ao local no dia seguinte, documentando os corpos e entrevistando sobreviventes. As imagens chocantes foram transmitidas em telejornais de todo o país, gerando forte comoção pública."
  },
  {
    year: "Abril de 1988",
    title: "Negação do Mandante",
    description: "Em entrevista, Oscar Castelo Branco nega envolvimento, afirmando estar em Manaus no dia do ataque e sugerindo ser uma \"armação da Funai\".",
    detail: "A fala de Castelo Branco revelou desprezo pelos indígenas, referindo-se a eles como \"preguiçosos\" e \"manipulados\". Sua tentativa de se distanciar do crime contrastava com diversos depoimentos que o apontavam como mandante."
  },
  {
    year: "1991",
    title: "Fundação do Museu Magüta",
    description: "É criado em Benjamin Constant (AM) o primeiro museu indígena do Brasil como parte da reafirmação cultural e política dos Ticuna após o massacre.",
    detail: "O museu reuniu peças relacionadas à cosmologia, rituais e história Ticuna. Em 1995, recebeu o prêmio de \"Melhor Museu do Ano\" concedido pelo International Council of Museums, sendo reconhecido internacionalmente por seu pioneirismo."
  },
  {
    year: "1994",
    title: "Reclassificação do Crime",
    description: "O caso é reclassificado de homicídio para genocídio após pressão do Ministério Público Federal, reconhecendo o contexto étnico da violência.",
    detail: "A reclassificação foi um marco jurídico importante, pois reconheceu que o ataque visava eliminar parcialmente um grupo étnico específico. Foi um dos poucos casos no Brasil enquadrados na lei de genocídio (Lei 2.889/1956)."
  },
  {
    year: "18 de maio de 2001",
    title: "Condenação",
    description: "Treze anos após o massacre, Oscar Castelo Branco e outros 13 acusados são condenados pela juíza Jaíza Maria Pinto Fraxe a penas entre 15 e 25 anos.",
    detail: "A sentença foi considerada histórica por grupos de direitos humanos e organizações indígenas, representando uma rara condenação por crimes contra povos indígenas no Brasil."
  },
  {
    year: "4 de novembro de 2004",
    title: "Absolvição e Redução de Penas",
    description: "O Tribunal Regional Federal absolve Oscar Castelo Branco e reduz as penas dos demais condenados de 15-25 anos para 12 anos, levando à soltura de réus.",
    detail: "A decisão da 3ª Turma do TRF-1, em 27 de outubro de 2004, foi vista como um retrocesso pela comunidade Ticuna e organizações de direitos humanos, reforçando o padrão de impunidade em casos de violência contra indígenas."
  },
  {
    year: "2018",
    title: "30 Anos do Massacre",
    description: "Comunidades Ticuna realizam evento memorial marcando três décadas do massacre, reafirmando a luta por justiça e memória.",
    detail: "O evento incluiu depoimentos de sobreviventes, exposição fotográfica e debates sobre a situação atual dos Ticuna. Lideranças destacaram que, apesar das terras demarcadas, as ameaças continuam em novas formas."
  },
  {
    year: "Até hoje",
    title: "Memória e Resistência",
    description: "O massacre segue como símbolo da luta dos povos indígenas por justiça, território e reconhecimento. A memória é mantida viva através de relatos orais, documentários e publicações.",
    detail: "As novas gerações Ticuna aprendem sobre o massacre como parte crucial de sua história coletiva. Organizações como o CGTT continuam ativas na defesa dos direitos Ticuna e na preservação da memória do massacre."
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-memorial-beige">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cronologia dos Fatos</h2>
          <p className="text-memorial-dark/80 max-w-3xl mx-auto">
            Os principais eventos relacionados ao Massacre do Capacete e seus desdobramentos,
            compondo a linha do tempo deste importante capítulo da história indígena brasileira
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
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {event.title}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info size={18} className="text-memorial-accent/70" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs bg-memorial-dark text-white p-3">
                          <p>{event.detail}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </h3>
                  <p className="text-memorial-dark/80">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-memorial-brown">Fontes e Documentação</h3>
          <p className="mb-4 text-memorial-dark/80">
            Esta linha do tempo foi compilada com base em documentos oficiais, reportagens e depoimentos. Para aprofundar-se neste período histórico, consulte:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-memorial-dark/80">
            <li>
              <strong>Relatórios da FUNAI e do Ministério Público Federal</strong> sobre os conflitos na região do Alto Solimões
            </li>
            <li>
              <strong>Processo Judicial nº 89.1541-5</strong> - Ação penal contra os acusados do massacre
            </li>
            <li>
              <strong>Arquivo do CIMI (Conselho Indigenista Missionário)</strong> que mantém documentação sobre o caso
            </li>
            <li>
              <strong>Documentário "Índios no Brasil - Quem São Eles?"</strong> (1994) que aborda o massacre
            </li>
            <li>
              <strong>Acervo do Museu Magüta</strong> em Benjamin Constant (AM)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
