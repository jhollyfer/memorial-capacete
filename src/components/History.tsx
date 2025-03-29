
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-memorial-brown">Contexto Histórico</h3>
            <p className="mb-4 text-memorial-dark/90">
              Os Ticuna, o povo indígena mais numeroso da Amazônia brasileira, habitam tradicionalmente a região do Alto Solimões, 
              que abrange partes do Brasil, Peru e Colômbia. Desde a década de 1970, os conflitos entre indígenas e madeireiros, grileiros e posseiros 
              se intensificaram devido à disputa por terras e exploração de recursos naturais.
            </p>
            <p className="text-memorial-dark/90">
              No início dos anos 1980, os Ticuna se mobilizaram na luta pela demarcação de suas terras tradicionais. 
              Essa organização política, que incluía assembleias e a publicação do jornal Magüta, provocou hostilidade 
              de grupos interessados na exploração econômica da região.
            </p>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <img 
                src="https://source.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Região amazônica" 
                className="w-full h-auto object-cover aspect-video"
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 md:grid-flow-dense">
          <div className="md:order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-memorial-brown">O Dia do Massacre</h3>
            <p className="mb-4 text-memorial-dark/90">
              Em 28 de março de 1988, na localidade conhecida como Boca do Capacete, próxima ao município de 
              Benjamin Constant (AM), um grupo de indígenas Ticuna estava reunido em assembleia, desarmados, 
              para discutir questões relacionadas à demarcação de suas terras.
            </p>
            <p className="mb-4 text-memorial-dark/90">
              Durante a reunião, um grupo de 14 homens armados, liderados pelo madeireiro Oscar de Almeida Castelo Branco, 
              invadiu o local e abriu fogo contra os indígenas. O ataque resultou em pelo menos 4 mortos confirmados, 
              23 feridos e 10 desaparecidos, incluindo crianças.
            </p>
            <p className="text-memorial-dark/90">
              Para tentar ocultar evidências, corpos de algumas vítimas foram lançados no Rio Solimões, enquanto os 
              sobreviventes feridos buscaram socorro em hospitais da região.
            </p>
          </div>
          <Card className="overflow-hidden shadow-lg md:order-1">
            <CardContent className="p-0">
              <img 
                src="https://source.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                alt="Floresta amazônica" 
                className="w-full h-auto object-cover aspect-video"
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-memorial-brown">Repercussão e Justiça</h3>
            <p className="mb-4 text-memorial-dark/90">
              O massacre ganhou repercussão nacional e internacional, sendo noticiado inicialmente como 
              "Massacre na Boca do Capacete". As investigações apontaram Oscar Castelo Branco como mandante 
              do crime, que inicialmente foi classificado como homicídio.
            </p>
            <p className="mb-4 text-memorial-dark/90">
              Somente em 1994, após pressão do Ministério Público Federal, o caso foi reclassificado como genocídio, 
              reconhecendo a intenção de eliminar parcialmente o grupo Ticuna por motivos étnicos.
            </p>
            <p className="text-memorial-dark/90">
              Em 2001, treze anos após o massacre, Oscar Castelo Branco e 13 executores foram condenados. 
              Entretanto, em 2004, o Tribunal Regional Federal absolveu o mandante e reduziu as penas dos demais, 
              consolidando a percepção de impunidade que frequentemente marca crimes contra povos indígenas no Brasil.
            </p>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <img 
                src="https://source.unsplash.com/photo-1426604966848-d7adac402bff" 
                alt="Região do Alto Solimões" 
                className="w-full h-auto object-cover aspect-video"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default History;
