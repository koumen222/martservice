import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const PromoHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  // Messages promotionnels
  const promos = [
    {
      id: 1,
      message: "🎉 Offre spéciale : -20% sur votre première demande de service",
      cta: "Profiter maintenant",
      link: "/services",
      color: "bg-gradient-to-r from-primary-500 to-primary-600",
      textColor: "text-white"
    },
    {
      id: 2,
      message: "🚀 Devenez prestataire : Inscription gratuite ce mois-ci",
      cta: "S'inscrire",
      link: "/become-provider",
      color: "bg-gradient-to-r from-primary-500 to-primary-600",
      textColor: "text-white"
    },
    {
      id: 3,
      message: "💼 Nouveau : Accès premium aux meilleurs prestataires",
      cta: "Découvrir",
      link: "/services",
      color: "bg-gradient-to-r from-primary-500 to-primary-600",
      textColor: "text-white"
    }
  ];

  // Rotation automatique des promos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 8000); // Change toutes les 8 secondes

    return () => clearInterval(interval);
  }, [promos.length]);

  // Fermer l'en-tête promo
  const handleClose = () => {
    setIsVisible(false);
    // Sauvegarder en localStorage pour ne pas afficher pendant 24h
    localStorage.setItem('promoClosed', Date.now().toString());
  };

  // Vérifier si l'utilisateur a récemment fermé la promo
  useEffect(() => {
    const promoClosed = localStorage.getItem('promoClosed');
    if (promoClosed) {
      const closedTime = parseInt(promoClosed);
      const twentyFourHours = 24 * 60 * 60 * 1000;
      if (Date.now() - closedTime < twentyFourHours) {
        setIsVisible(false);
      }
    }
  }, []);

  if (!isVisible) return null;

  const promo = promos[currentPromo];

  return (
    <div className={`relative ${promo.color} ${promo.textColor} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          
          {/* Message promotionnel */}
          <div className="flex-1 flex items-center justify-center min-w-0">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Icon name="tag" className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium truncate">
                {promo.message}
              </p>
            </div>
          </div>

          {/* CTA et fermeture */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Link
              to={promo.link}
              className={`text-sm font-semibold ${promo.textColor} hover:underline transition-colors`}
            >
              {promo.cta}
            </Link>
            
            {/* Indicateurs de progression */}
            <div className="hidden sm:flex items-center space-x-1">
              {promos.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentPromo
                      ? promo.textColor === 'text-white' ? 'bg-white' : 'bg-gray-900'
                      : promo.textColor === 'text-white' ? 'bg-white/30' : 'bg-gray-900/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleClose}
              className={`p-1 rounded-full ${promo.textColor === 'text-white' ? 'hover:bg-white/20' : 'hover:bg-gray-900/20'} transition-colors`}
              aria-label="Fermer la promotion"
            >
              <Icon name="x" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Animation de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
        <div 
          className="h-full bg-white/60 transition-all duration-1000"
          style={{
            animation: 'slideProgress 8s linear infinite'
          }}
        />
      </div>
    </div>
  );
};

export default PromoHeader;
