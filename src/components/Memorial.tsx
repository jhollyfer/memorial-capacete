
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scroll, Heart, AlertCircle, BookOpen } from 'lucide-react';

const victimProfiles = [
  {
    name: "Clarindo Maurício Macário",
    age: "16 anos",
    story: "Jovem estudante e filho de um líder local, participava de sua primeira assembleia quando foi morto. Sonhava em ser professor na aldeia.",
  },
  {
    name: "Pedro Pereira Inácio",
    age: "15 anos",
    story: "Ajudava sua família na pesca e acompanhava seu pai na reunião. Era conhecido por seu talento musical, tocando flauta tradicional Ticuna.",
  },
  {
    name: "José Pereira Monteiro",
    age: "Adulto",
    story: "Artesão e pai de quatro filhos, era respeitado por seu conhecimento da medicina tradicional Ticuna. Participava ativamente das assembleias comunitárias.",
  },
  {
    name: "Armando Andrade Vieira",
    age: "15 meses",
    story: "A vítima mais jovem do massacre estava nos braços de sua mãe, que foi ferida, mas sobreviveu. Seu nome se tornou símbolo da brutalidade do ataque.",
  }
];

const Memorial = () => {
  return (
    <section id="memorial" className="py-20 bg-memorial-dark text-white">
      <div className="memorial-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Memorial Virtual</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Um espaço para honrar as vítimas e manter viva a memória do Massacre do Capacete,
            preservando a história e contribuindo para a não-repetição de tais violações
          </p>
          <div className="w-20 h-1 bg-memorial-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-memorial-accent">Honrando as Vítimas</h3>
            <p className="mb-6 text-white/90">
              Este espaço virtual é dedicado à memória das vítimas do Massacre do Capacete: 
              homens, mulheres e crianças Ticuna que perderam suas vidas em 28 de março de 1988,
              na luta pela defesa de seus territórios ancestrais.
            </p>
            <p className="mb-6 text-white/90">
              Mais do que números ou estatísticas, cada vítima era uma pessoa com sonhos, 
              família e um papel importante em sua comunidade. Através deste memorial, buscamos 
              honrar suas vidas e assegurar que seu sacrifício não seja esquecido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Card className="bg-memorial-brown/20 border-memorial-accent/30 flex-1">
                <CardContent className="p-4 flex flex-col items-center">
                  <AlertCircle size={32} className="text-memorial-accent mb-2" />
                  <h4 className="font-bold">4+ Mortos</h4>
                  <p className="text-sm text-center">Vítimas fatais confirmadas</p>
                </CardContent>
              </Card>
              <Card className="bg-memorial-brown/20 border-memorial-accent/30 flex-1">
                <CardContent className="p-4 flex flex-col items-center">
                  <AlertCircle size={32} className="text-memorial-accent mb-2" />
                  <h4 className="font-bold">23 Feridos</h4>
                  <p className="text-sm text-center">Muitos com sequelas permanentes</p>
                </CardContent>
              </Card>
              <Card className="bg-memorial-brown/20 border-memorial-accent/30 flex-1">
                <CardContent className="p-4 flex flex-col items-center">
                  <AlertCircle size={32} className="text-memorial-accent mb-2" />
                  <h4 className="font-bold">10 Desaparecidos</h4>
                  <p className="text-sm text-center">Nunca encontrados</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-white/90">
              A memória é uma forma de resistência. Ao lembrarmos o que aconteceu, 
              contribuímos para que tais atrocidades não se repitam e apoiamos a 
              contínua luta por justiça e direitos dos povos indígenas.
            </p>
          </div>
          <div className="bg-memorial-brown/20 p-8 rounded-lg border border-memorial-accent/30">
            <h4 className="text-xl font-bold mb-6 text-center">Perfis das Vítimas Confirmadas</h4>
            <div className="space-y-6">
              {victimProfiles.map((victim, index) => (
                <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                  <h5 className="font-medium text-lg text-memorial-accent">{victim.name}</h5>
                  <p className="text-sm text-white/70 mb-2">{victim.age}</p>
                  <p className="text-white/90">
                    {victim.story}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-16 h-0.5 bg-memorial-accent/50 mx-auto my-6"></div>
            <p className="text-center italic text-white/80">
              "Que sua memória seja uma benção e inspire a contínua luta por justiça."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-memorial-brown/10 border-memorial-accent/30">
            <CardContent className="p-6">
              <Scroll className="text-memorial-accent mb-4" size={28} />
              <h4 className="font-bold text-xl mb-3">Documentos Históricos</h4>
              <p className="text-white/80 mb-4">
                Acesse documentos, fotografias e relatos sobre o massacre e seus desdobramentos judiciais e políticos.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Processo judicial completo</li>
                <li>• Reportagens da época</li>
                <li>• Depoimentos de sobreviventes</li>
                <li>• Documentos da FUNAI</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent border-white/30 text-white hover:bg-white/10">
                Acessar Arquivo
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-memorial-brown/10 border-memorial-accent/30">
            <CardContent className="p-6">
              <BookOpen className="text-memorial-accent mb-4" size={28} />
              <h4 className="font-bold text-xl mb-3">Centro de Aprendizagem</h4>
              <p className="text-white/80 mb-4">
                Materiais educativos sobre o massacre, a história Ticuna e a luta dos povos indígenas por seus direitos no Brasil.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Planos de aula</li>
                <li>• Recursos audiovisuais</li>
                <li>• Bibliografia recomendada</li>
                <li>• Linha do tempo interativa</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent border-white/30 text-white hover:bg-white/10">
                Explorar Recursos
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-memorial-brown/10 border-memorial-accent/30">
            <CardContent className="p-6">
              <Heart className="text-memorial-accent mb-4" size={28} />
              <h4 className="font-bold text-xl mb-3">Como Contribuir</h4>
              <p className="text-white/80 mb-4">
                Apoie iniciativas de preservação da memória do massacre e projetos das comunidades Ticuna atuais.
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Doações para o Museu Magüta</li>
                <li>• Apoio a projetos educacionais</li>
                <li>• Voluntariado</li>
                <li>• Divulgação e conscientização</li>
              </ul>
              <Button variant="default" className="mt-4 bg-memorial-accent hover:bg-memorial-accent/90">
                Quero Contribuir
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-memorial-accent/20 p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-6">Contribua para a Preservação da Memória</h3>
          <p className="max-w-3xl mx-auto mb-8 text-white/90">
            Você pode contribuir para manter viva a memória do Massacre do Capacete e apoiar 
            projetos educativos e culturais do povo Ticuna. Seu apoio é fundamental para 
            assegurar que a história seja preservada e as novas gerações conheçam este importante capítulo.
          </p>
          <p className="max-w-3xl mx-auto mb-8 text-white/90 italic">
            "Enquanto houver um Ticuna vivo, a memória daquele dia permanecerá viva, assim como 
            nossa luta por justiça e reconhecimento. O sangue derramado no capacete irrigou as sementes 
            da nossa resistência que hoje florescem."
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
