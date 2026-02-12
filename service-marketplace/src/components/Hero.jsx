import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState("pour transformer vos idées");
  const [textIndex, setTextIndex] = useState(0);
  const [isHighlighting, setIsHighlighting] = useState(false);

  const textVariations = [
    "pour transformer vos idées",
    "pour faire grandir vos projets",
    "pour concrétiser vos ambitions",
    "pour atteindre vos objectifs",
    "pour réaliser vos rêves"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHighlighting(false);
      
      setTimeout(() => {
        setTextIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % textVariations.length;
          setCurrentText(textVariations[nextIndex]);
          setIsHighlighting(true);
          return nextIndex;
        });
      }, 200); // Small delay before highlighting
    }, 3000); // Change every 3 seconds

    // Initial highlight
    setTimeout(() => setIsHighlighting(true), 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background with image and overlay */}
      <div className="absolute inset-0">
        <img 
          src="/ChatGPT Image 12 févr. 2026, 01_54_02.png" 
          alt="Mart Business Background"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Enhanced gradient overlay with very dark contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-primary-900/98 to-primary-800/95"></div>
        
        {/* Multiple animated fluid shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-4000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary-300/20 rounded-full mix-blend-screen filter blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-200/20 rounded-full mix-blend-screen filter blur-2xl animate-float-reverse"></div>
      </div>

      {/* Scrolling Service Images - Behind content */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="flex space-x-8 animate-scroll-x">
          {/* First row */}
          <div className="flex space-x-8 py-8">
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Design</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Développement</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Marketing</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Conseil</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Formation</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Droit</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Coiffure</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Plomberie</div>
            </div>
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex space-x-8 py-8">
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Design</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Développement</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Marketing</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Conseil</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Formation</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Droit</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Coiffure</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Plomberie</div>
            </div>
          </div>
        </div>

        {/* Second row scrolling in opposite direction - Behind content */}
        <div className="flex space-x-8 animate-scroll-x-reverse absolute bottom-0 z-0">
          <div className="flex space-x-8 py-8">
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Maintenance</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Notariat</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Photo</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Vidéo</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">App Mobile</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">SEO</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Social Media</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Finance</div>
            </div>
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex space-x-8 py-8">
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Maintenance</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Notariat</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Photo</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Vidéo</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">App Mobile</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">SEO</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Social Media</div>
            </div>
            <div className="p-4">
              <div className="text-white/60 text-sm font-medium">Finance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Enhanced Main headline with better contrast */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white leading-tight mb-0 animate-fade-in-up animation-delay-200 drop-shadow-2xl tracking-tight">
            Des experts à portée de main
            <span className="block text-white animate-fade-in-up animation-delay-400 drop-shadow-lg font-bold transition-all duration-1000 ease-in-out relative">
              <span className="relative z-10">{currentText}</span>
              <span className={`absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full transition-all duration-500 ease-in-out ${isHighlighting ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></span>
            </span>
          </h1>

          {/* Enhanced Subheadline with better contrast */}
          <p className="text-sm sm:text-base lg:text-lg text-white mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 drop-shadow-lg font-medium tracking-wide">
            Connectez-vous avec les meilleurs professionnels et donnez vie à vos projets. 
            Du design au développement, de la stratégie à l'exécution.
          </p>

          {/* Enhanced Stats with cards */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mb-8 animate-fade-in-up animation-delay-800">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-1.5 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <div className="text-base sm:text-2xl lg:text-3xl font-black text-white mb-1 sm:mb-2 drop-shadow-lg tracking-tight">500+</div>
              <div className="text-white text-xs sm:text-xs sm:text-sm font-bold tracking-wide">Services experts</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-1.5 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <div className="text-base sm:text-2xl lg:text-3xl font-black text-white mb-1 sm:mb-2 drop-shadow-lg tracking-tight">98%</div>
              <div className="text-white text-xs sm:text-xs sm:text-sm font-bold tracking-wide">Clients satisfaits</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-1.5 sm:p-4 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <div className="text-base sm:text-2xl lg:text-3xl font-black text-white mb-1 sm:mb-2 drop-shadow-lg tracking-tight">24/7</div>
              <div className="text-white text-xs sm:text-xs sm:text-sm font-bold tracking-wide">Support disponible</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with better contrast */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-1000">
            <Link
              to="/services"
              className="bg-white text-primary-900 px-8 sm:px-16 py-3 sm:py-5 text-base sm:text-xl font-black hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 w-full sm:w-auto relative overflow-hidden group tracking-wide cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/50"
              role="button"
              aria-label="Explorer les services disponibles"
            >
              <span className="relative z-10">Explorer les services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/become-provider"
              className="border-2 border-white text-white px-8 sm:px-16 py-3 sm:py-5 text-base sm:text-xl font-black hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 w-full sm:w-auto tracking-wide cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/50"
              role="button"
              aria-label="Devenir prestataire de services"
            >
              Devenir prestataire
            </Link>
          </div>
        </div>
      </div>

      </div>
  );
};

export default Hero;
