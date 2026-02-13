import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from './Icon';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('client');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  const ctaOptions = [
    {
      title: "Je cherche un service",
      description: "Trouvez l'expert parfait pour votre projet",
      icon: "search",
      color: "from-primary-500 to-primary-600",
      link: "/services",
      buttonText: "Explorer les services"
    },
    {
      title: "Je veux vendre mes services",
      description: "Rejoignez notre réseau de prestataires",
      icon: "briefcase",
      color: "from-secondary-500 to-secondary-600",
      link: "/become-provider",
      buttonText: "Devenir prestataire"
    },
    {
      title: "Je suis une entreprise",
      description: "Solutions adaptées aux professionnels",
      icon: "building",
      color: "from-purple-500 to-purple-600",
      link: "/enterprise",
      buttonText: "Solutions entreprises"
    }
  ];

  const benefits = [
    "Accès à 500+ experts vérifiés",
    "Paiements sécurisés avec escrow",
    "Support client 24/7",
    "Satisfaction garantie à 98%",
    "Projets livrés en temps réel",
    "Tarifs compétitifs et transparents"
  ];

  if (isSubscribed) {
    return (
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-green-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bienvenue dans la communauté Mart Business !
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vous recevrez bientôt nos dernières actualités et offres exclusives. 
              Préparez-vous à transformer vos projets en succès !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg"
              >
                Commencer maintenant
              </Link>
              <button
                onClick={() => setIsSubscribed(false)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                S'inscrire avec un autre email
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-semibold">Dernière étape</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Prêt à transformer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-300">
              vos idées en réalité ?
            </span>
          </h2>
          
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Rejoignez des milliers d'entrepreneurs et de professionnels qui 
            réussissent déjà avec Mart Business. Votre succès commence ici.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Inscription gratuite</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Aucune carte requise</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Annulation à tout moment</span>
            </div>
          </div>
        </div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={option.icon} className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 text-center">{option.title}</h3>
              <p className="text-primary-100 text-center mb-6 leading-relaxed">{option.description}</p>
              
              <Link
                to={option.link}
                className={`block w-full bg-gradient-to-r ${option.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center`}
              >
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 mb-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Restez informé des dernières opportunités
            </h3>
            <p className="text-primary-100 text-center mb-8">
              Recevez des conseils exclusifs, des offres spéciales et les dernières tendances du marché.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent backdrop-blur-sm"
                />
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="client" className="text-gray-900">Je cherche des services</option>
                  <option value="provider" className="text-gray-900">Je propose des services</option>
                  <option value="both" className="text-gray-900">Les deux</option>
                </select>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-4 px-8 rounded-xl font-bold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Inscription en cours...' : "S'inscrire gratuitement"}
              </button>
            </form>
            
            <p className="text-xs text-primary-200 text-center mt-4">
              Nous respectons votre vie privée. Désabonnez-vous à tout moment.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <svg className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Final Trust Section */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Rejoignez 50,000+ utilisateurs satisfaits</span>
          </div>
          
          <p className="text-primary-200 text-sm">
            Votre succès est notre priorité. Commencez votre voyage avec Mart Business aujourd'hui.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
