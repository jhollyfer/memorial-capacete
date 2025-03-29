
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const History = () => {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="memorial-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A História do Massacre</h2>
          <p className="text-memorial-dark/80 max-w-3xl mx-auto">
            O que aconteceu em 28 de março de 1988 na região do Alto Solimões, Amazonas
          </p>
          <div className="w-20 h-1 bg-memorial-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-memorial-brown">O Povo Ticuna</h3>
            <p className="mb-4 text-memorial-dark/90">
              Os Ticuna, também conhecidos como "povo Magüta" (que significa "povo pescado com vara", segundo sua mitologia de origem), 
              constituem o povo indígena mais numeroso da Amazônia brasileira, com uma população de aproximadamente 36.000 pessoas no Brasil.
            </p>
            <p className="mb-4 text-memorial-dark/90">
              Tradicionalmente, habitam a região do Alto Solimões, distribuídos em terras que abrangem o Brasil, Peru e Colômbia, 
              ocupando a área muito antes do estabelecimento das fronteiras nacionais. A língua Ticuna é considerada isolada, 
              sem parentesco comprovado com outras famílias linguísticas, evidenciando sua singularidade na região.
            </p>
            <div className="bg-memorial-beige p-4 rounded-md my-4">
              <h4 className="font-bold text-memorial-brown">Cosmologia e Organização Social:</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>Segundo sua mitologia, os Ticuna foram pescados por Yo'i, herói criador, no igarapé Eware.</li>
                <li>A sociedade é dividida em clãs patrilineares agrupados em duas metades: "com penas" (aves) e "sem penas" (animais terrestres).</li>
                <li>O ritual de iniciação feminina "A Festa da Moça Nova" (Worecü) é uma das mais importantes expressões culturais Ticuna.</li>
                <li>A arte Ticuna se destaca pela confecção de máscaras rituais, cestarias e esculturas em madeira.</li>
              </ul>
            </div>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div 
                className="w-full aspect-video bg-memorial-beige/60 flex items-center justify-center"
                style={{ backgroundColor: '#F1F0FB' }}
              >
                <p className="text-memorial-dark/50 text-sm px-4 py-2 border border-memorial-dark/20 rounded">
                  Imagem: Território tradicional Ticuna com floresta amazônica e rios
                </p>
              </div>
              <div className="p-3 bg-memorial-beige/60">
                <p className="text-sm text-memorial-dark/80">Território tradicional dos Ticuna na região do Alto Solimões, fronteira entre Brasil, Colômbia e Peru, caracterizado pela densa floresta amazônica.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-memorial-brown">Contexto Histórico</h3>
            <p className="mb-4 text-memorial-dark/90">
              Desde o século XVII, os Ticuna enfrentaram diferentes formas de violência e exploração: inicialmente missões jesuítas, 
              depois o regime dos seringais durante o ciclo da borracha (1870-1920), quando muitos foram escravizados para extração de látex.
            </p>
            <p className="mb-4 text-memorial-dark/90">
              A partir da década de 1970, os conflitos entre indígenas e madeireiros, grileiros e posseiros 
              se intensificaram devido à disputa por terras e exploração de recursos naturais. A pressão sobre os territórios Ticuna 
              cresceu com a expansão das atividades de extração de madeira e agricultura comercial.
            </p>
            <blockquote className="border-l-4 border-memorial-accent pl-4 italic text-memorial-dark/80 my-6">
              "A demarcação da terra indígena representava uma ameaça aos interesses econômicos de madeireiros, comerciantes e políticos locais, 
              que exploravam os recursos da área há décadas sem reconhecer os direitos territoriais dos povos originários."
              <footer className="text-sm mt-2 not-italic">— Relatório da Comissão Especial de Investigação, 1988</footer>
            </blockquote>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div 
                className="w-full aspect-video bg-memorial-beige/60 flex items-center justify-center"
                style={{ backgroundColor: '#F1F0FB' }}
              >
                <p className="text-memorial-dark/50 text-sm px-4 py-2 border border-memorial-dark/20 rounded">
                  Imagem: Pinturas corporais e adornos tradicionais Ticuna
                </p>
              </div>
              <div className="p-3 bg-memorial-beige/60">
                <p className="text-sm text-memorial-dark/80">Elementos da cultura Ticuna como pinturas corporais e adornos, característicos da identidade visual dos povos da Amazônia.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 md:grid-flow-dense">
          <div className="md:order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-memorial-brown">O Dia do Massacre</h3>
            <p className="mb-4 text-memorial-dark/90">
              Em 28 de março de 1988, na localidade conhecida como Boca do Capacete, próxima ao município de 
              Benjamin Constant (AM), aproximadamente 90 indígenas Ticuna estavam reunidos em assembleia, desarmados, 
              para discutir questões relacionadas à demarcação de suas terras e as crescentes ameaças que vinham recebendo.
            </p>
            <p className="mb-4 text-memorial-dark/90">
              Por volta das 09h00, um grupo de 14 homens armados, liderados pelo madeireiro Oscar de Almeida Castelo Branco, 
              invadiu o local em duas lanchas. Com os rostos cobertos e usando roupas camufladas, abriram fogo contra os indígenas.
              O ataque durou aproximadamente 30 minutos, resultando em pelo menos 4 mortos confirmados, incluindo uma criança de 
              apenas 15 meses, 23 feridos e 10 desaparecidos.
            </p>
            <div className="bg-memorial-beige p-4 rounded-md my-4">
              <h4 className="font-bold text-memorial-brown">Vítimas fatais confirmadas:</h4>
              <ul className="list-disc pl-5 mt-2">
                <li>Clarindo Maurício Macário (16 anos)</li>
                <li>Pedro Pereira Inácio (15 anos)</li>
                <li>José Pereira Monteiro (idade não confirmada)</li>
                <li>Armando Andrade Vieira (15 meses)</li>
              </ul>
            </div>
          </div>
          <Card className="overflow-hidden shadow-lg md:order-1">
            <CardContent className="p-0">
              <div 
                className="w-full aspect-video bg-memorial-beige/60 flex items-center justify-center"
                style={{ backgroundColor: '#F1F0FB' }}
              >
                <p className="text-memorial-dark/50 text-sm px-4 py-2 border border-memorial-dark/20 rounded">
                  Imagem: Rio Solimões e localidade Boca do Capacete
                </p>
              </div>
              <div className="p-3 bg-memorial-beige/60">
                <p className="text-sm text-memorial-dark/80">O local do massacre, Boca do Capacete, era um ponto estratégico para reuniões dos Ticuna e acesso ao Rio Solimões, onde muitos corpos foram jogados para ocultar evidências.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-memorial-brown">Repercussão e Justiça</h3>
            <p className="mb-4 text-memorial-dark/90">
              O massacre ganhou repercussão nacional e internacional, sendo noticiado inicialmente como 
              "Massacre na Boca do Capacete" ou "Massacre dos Ticuna". Organizações como Survival International 
              e Amnesty International denunciaram o caso, pressionando as autoridades brasileiras.
            </p>
            <p className="mb-4 text-memorial-dark/90">
              As investigações iniciais apontaram Oscar Castelo Branco como mandante, mas ele negou envolvimento. 
              O caso foi inicialmente classificado como homicídio, dificultando a punição adequada dos responsáveis.
            </p>
            <div className="bg-memorial-beige p-4 rounded-md my-4">
              <h4 className="font-bold text-memorial-brown">Cronologia judicial:</h4>
              <ul className="list-none pl-1 mt-2 space-y-2">
                <li className="flex gap-3">
                  <span className="text-memorial-accent font-bold">1994:</span> 
                  <span>Caso reclassificado como genocídio após pressão do Ministério Público Federal.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-memorial-accent font-bold">2001:</span> 
                  <span>Treze anos após o massacre, Oscar Castelo Branco e 13 executores são condenados a penas entre 15 e 25 anos.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-memorial-accent font-bold">2004:</span> 
                  <span>O Tribunal Regional Federal absolve Oscar Castelo Branco e reduz as penas dos demais condenados para 12 anos.</span>
                </li>
              </ul>
            </div>
            <p className="text-memorial-dark/90">
              O desfecho judicial do caso exemplifica a impunidade que frequentemente marca crimes contra povos indígenas no Brasil. 
              A absolvição do mandante e a redução das penas dos executores reforçaram a percepção de que o sistema de justiça falha 
              na proteção dos direitos dos povos originários.
            </p>
            <div className="mt-4">
              <a 
                href="https://cimi.org.br/2018/03/ha-30-anos-o-massacre-dos-tikuna-deixava-cicatrizes-profundas-e-permanentes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-memorial-accent hover:text-memorial-brown transition-colors"
              >
                Documentação do CIMI sobre o massacre <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div 
                className="w-full aspect-video bg-memorial-beige/60 flex items-center justify-center"
                style={{ backgroundColor: '#F1F0FB' }}
              >
                <p className="text-memorial-dark/50 text-sm px-4 py-2 border border-memorial-dark/20 rounded">
                  Imagem: Documentação do julgamento e busca por justiça
                </p>
              </div>
              <div className="p-3 bg-memorial-beige/60">
                <p className="text-sm text-memorial-dark/80">A luta por justiça se estendeu por 16 anos nos tribunais brasileiros, terminando com a absolvição do mandante e redução das penas dos executores.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default History;
