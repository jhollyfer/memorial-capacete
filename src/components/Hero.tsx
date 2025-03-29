
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center bg-memorial-beige pt-16 overflow-hidden"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/photo-1506744038136-46273834b3fb")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-memorial-dark/70"></div>

      <div className="memorial-container relative z-10 text-center px-4">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <p className="text-memorial-beige uppercase tracking-wider mb-4">28 de março de 1988</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-white leading-tight">
            Memorial do <span className="text-memorial-accent">Massacre do Capacete</span>
          </h1>
          <p className="text-xl md:text-2xl text-memorial-light max-w-3xl mx-auto mb-8">
            Para que nunca se esqueça: Memória, Justiça e Resistência do povo Ticuna
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link 
              to="#historia"
              className="px-6 py-3 bg-memorial-accent text-white rounded-md hover:bg-memorial-accent/90 transition-colors font-medium"
            >
              Conhecer a História
            </Link>
            <Link 
              to="#memorial"
              className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              Visitar o Memorial
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="#historia" className="text-white/80 hover:text-white">
          <ArrowDown size={28} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
