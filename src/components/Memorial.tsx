
import React from 'react';
import { Button } from '@/components/ui/button';

const Memorial = () => {
  return (
    <section id="memorial" className="py-20 bg-memorial-dark text-white">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Memorial Virtual</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Um espaço para honrar as vítimas e manter viva a memória do Massacre do Capacete
          </p>
          <div className="w-20 h-1 bg-memorial-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-memorial-accent">Honrando as Vítimas</h3>
            <p className="mb-6 text-white/90">
              Este espaço virtual é dedicado à memória das vítimas do Massacre do Capacete: 
              homens, mulheres e crianças Ticuna que perderam suas vidas em 28 de março de 1988.
            </p>
            <p className="mb-6 text-white/90">
              Mais do que números ou estatísticas, cada vítima era uma pessoa com sonhos, 
              família e um papel importante em sua comunidade. Através deste memorial, buscamos 
              honrar suas vidas e assegurar que seu sacrifício não seja esquecido.
            </p>
            <p className="text-white/90">
              A memória é uma forma de resistência. Ao lembrarmos o que aconteceu, 
              contribuímos para que tais atrocidades não se repitam e apoiamos a 
              contínua luta por justiça e direitos dos povos indígenas.
            </p>
          </div>
          <div className="bg-memorial-brown/20 p-8 rounded-lg border border-memorial-accent/30">
            <h4 className="text-xl font-bold mb-4 text-center">Em memória</h4>
            <div className="space-y-3">
              <p className="text-center text-white/90">
                <span className="font-medium block">Vítimas fatais confirmadas:</span> 
                Quatro indígenas Ticuna perderam suas vidas no ataque, incluindo crianças.
              </p>
              <p className="text-center text-white/90">
                <span className="font-medium block">Feridos:</span> 
                Vinte e três pessoas ficaram feridas, muitas com sequelas permanentes.
              </p>
              <p className="text-center text-white/90">
                <span className="font-medium block">Desaparecidos:</span> 
                Dez indígenas foram dados como desaparecidos após o massacre.
              </p>
              <div className="w-16 h-0.5 bg-memorial-accent/50 mx-auto my-6"></div>
              <p className="text-center italic text-white/80">
                "Que sua memória seja uma benção e inspire a contínua luta por justiça."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-memorial-accent/20 p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-6">Contribua para a Preservação da Memória</h3>
          <p className="max-w-3xl mx-auto mb-8 text-white/90">
            Você pode contribuir para manter viva a memória do Massacre do Capacete e apoiar 
            projetos educativos e culturais do povo Ticuna. Seu apoio é fundamental para 
            assegurar que a história seja preservada e as novas gerações conheçam este importante capítulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-memorial-accent hover:bg-memorial-accent/90">
              Doar para Projetos Ticuna
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Conhecer Iniciativas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memorial;
