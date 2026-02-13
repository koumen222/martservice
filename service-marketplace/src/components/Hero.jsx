import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState("votre croissance digitale");
  const [textIndex, setTextIndex] = useState(0);
  const [isHighlighting, setIsHighlighting] = useState(false);

  const textVariations = [
    "votre croissance digitale",
    "votre transformation business",
    "votre réussite professionnelle",
    "vos projets ambitieux",
    "votre excellence opérationnelle"
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
      }, 200);
    }, 3000);

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
        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary-900/95 to-primary-800/90"></div>
        
        {/* Subtle animated shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Professional scrolling service tags */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="flex space-x-8 animate-scroll-x opacity-30">
          <div className="flex space-x-8 py-8">
            {["Design UX/UI", "Développement Web", "Marketing Digital", "Consulting", "Formation", "Photographie", "Vidéo", "Rédaction"].map((service, i) => (
              <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="text-white/80 text-sm font-semibold tracking-wide">{service}</div>
              </div>
            ))}
          </div>
          <div className="flex space-x-8 py-8">
            {["Design UX/UI", "Développement Web", "Marketing Digital", "Consulting", "Formation", "Photographie", "Vidéo", "Rédaction"].map((service, i) => (
              <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="text-white/80 text-sm font-semibold tracking-wide">{service}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-8 animate-scroll-x-reverse absolute bottom-0 z-0 opacity-30">
          <div className="flex space-x-8 py-8">
            {["Mobile Apps", "SEO/SEA", "Social Media", "Branding", "E-commerce", "Maintenance", "Traduction", "Montage"].map((service, i) => (
              <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="text-white/80 text-sm font-semibold tracking-wide">{service}</div>
              </div>
            ))}
          </div>
          <div className="flex space-x-8 py-8">
            {["Mobile Apps", "SEO/SEA", "Social Media", "Branding", "E-commerce", "Maintenance", "Traduction", "Montage"].map((service, i) => (
              <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="text-white/80 text-sm font-semibold tracking-wide">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Professional Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Professional Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/20 animate-fade-in-up">
            <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">Plateforme leader au Cameroun</span>
          </div>

          {/* Professional Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-black text-white leading-tight mb-6 animate-fade-in-up animation-delay-200 tracking-tight">
            L'excellence à votre 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-300 animate-fade-in-up animation-delay-400 font-bold">
              portée de main
            </span>
            <span className="block text-white/95 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-4 font-bold animate-fade-in-up animation-delay-600">
              pour accélérer 
              <span className="relative inline-block">
                <span className="relative z-10">{currentText}</span>
                <span className={`absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-secondary-500/50 to-secondary-400/50 rounded-full transition-all duration-700 ease-in-out ${isHighlighting ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></span>
              </span>
            </span>
          </h1>

          {/* Professional Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-800 font-light tracking-wide">
            Connectez-vous avec <span className="font-semibold text-white">500+ experts certifiés</span> et 
            transformez vos idées en réalisations concrètes. 
            <span className="block mt-2">De la stratégie à l'exécution, nous sommes votre partenaire de succès.</span>
          </p>

          {/* Professional Stats Cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 animate-fade-in-up animation-delay-1000">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">500+</div>
              <div className="text-white/90 text-sm font-semibold">Experts vérifiés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">98%</div>
              <div className="text-white/90 text-sm font-semibold">Satisfaction client</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">24/7</div>
              <div className="text-white/90 text-sm font-semibold">Support dédié</div>
            </div>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-1200">
            <Link
              to="/services"
              className="group relative bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 w-full sm:w-auto rounded-xl tracking-wide"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explorer les services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Link>
            <Link
              to="/become-provider"
              className="group border-2 border-white/60 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto rounded-xl tracking-wide backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                Devenir expert
                <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm animate-fade-in-up animation-delay-1400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Prestataires vérifiés</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Paiements sécurisés</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
