
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-memorial-brown text-white py-12">
      <div className="memorial-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="#hero" className="flex items-center text-white mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-memorial-accent mr-2 flex items-center justify-center">
                <span className="font-bold text-lg">MC</span>
              </div>
              <div className="font-heading font-bold">
                Memorial do Capacete
              </div>
            </Link>
            <p className="text-white/80 mb-4">
              Preservando a memória do Massacre do Capacete e honrando a resistência do povo Ticuna.
            </p>
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Memorial do Massacre do Capacete.<br />
              Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="#hero" className="text-white/80 hover:text-white">Início</Link></li>
              <li><Link to="#historia" className="text-white/80 hover:text-white">História</Link></li>
              <li><Link to="#timeline" className="text-white/80 hover:text-white">Timeline</Link></li>
              <li><Link to="#depoimentos" className="text-white/80 hover:text-white">Depoimentos</Link></li>
              <li><Link to="#legado" className="text-white/80 hover:text-white">Legado</Link></li>
              <li><Link to="#memorial" className="text-white/80 hover:text-white">Memorial</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Museu Magüta</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Instituto Socioambiental</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">FUNAI</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Centro de Documentação Indígena</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-white/60 text-sm">
          <p>
            Este memorial virtual foi criado com o objetivo de preservar a memória histórica do Massacre do Capacete 
            e honrar as vítimas e a resistência do povo Ticuna. As imagens utilizadas são ilustrativas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
