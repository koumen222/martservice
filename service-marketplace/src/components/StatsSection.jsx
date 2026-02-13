import { useState, useEffect } from 'react';
import Icon from './Icon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    experts: 0,
    projects: 0,
    satisfaction: 0,
    countries: 0
  });

  const targetStats = {
    experts: 524,
    projects: 2156,
    satisfaction: 98,
    countries: 12
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      experts: targetStats.experts / steps,
      projects: targetStats.projects / steps,
      satisfaction: targetStats.satisfaction / steps,
      countries: targetStats.countries / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        experts: Math.min(Math.floor(increment.experts * currentStep), targetStats.experts),
        projects: Math.min(Math.floor(increment.projects * currentStep), targetStats.projects),
        satisfaction: Math.min(Math.floor(increment.satisfaction * currentStep), targetStats.satisfaction),
        countries: Math.min(Math.floor(increment.countries * currentStep), targetStats.countries)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      icon: "trophy",
      title: "Meilleure Plateforme 2024",
      description: "Récompensée pour l'excellence de service",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "shield",
      title: "Certification ISO 9001",
      description: "Qualité et sécurité garanties",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: "users",
      title: "50,000+ Utilisateurs",
      description: "Communauté en pleine croissance",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "globe",
      title: "Présence Internationale",
      description: "Opération dans 12 pays africains",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const monthlyGrowth = [
    { month: "Jan", users: 1200, projects: 450 },
    { month: "Fev", users: 1450, projects: 520 },
    { month: "Mar", users: 1680, projects: 590 },
    { month: "Avr", users: 1920, projects: 680 },
    { month: "Mai", users: 2150, projects: 750 },
    { month: "Jun", users: 2400, projects: 840 }
  ];

  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-semibold">Nos réalisations</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Des chiffres qui
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-300">
              parlent d'eux-mêmes
            </span>
          </h2>
          
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Plus de 2 ans d'excellence au service de l'économie digitale africaine. 
            Découvrez notre impact réel.
          </p>
        </div>

        {/* Main Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              {counters.experts}+
            </div>
            <div className="text-primary-100 font-medium">Experts vérifiés</div>
            <div className="text-xs text-primary-200 mt-2">Dans toutes les catégories</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              {counters.projects}+
            </div>
            <div className="text-primary-100 font-medium">Projets livrés</div>
            <div className="text-xs text-primary-200 mt-2">Avec succès</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              {counters.satisfaction}%
            </div>
            <div className="text-primary-100 font-medium">Satisfaction</div>
            <div className="text-xs text-primary-200 mt-2">Clients satisfaits</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
              {counters.countries}
            </div>
            <div className="text-primary-100 font-medium">Pays couverts</div>
            <div className="text-xs text-primary-200 mt-2">En Afrique</div>
          </div>
        </div>

        {/* Growth Chart */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-20 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Croissance mensuelle 2024</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-100 mb-4">Nouveaux utilisateurs</h4>
              <div className="space-y-3">
                {monthlyGrowth.map((data, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 text-sm text-primary-200 font-medium">{data.month}</div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/20 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full transition-all duration-1000"
                          style={{ width: `${(data.users / 2400) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right text-sm text-white font-medium">{data.users}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-primary-100 mb-4">Projets complétés</h4>
              <div className="space-y-3">
                {monthlyGrowth.map((data, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 text-sm text-primary-200 font-medium">{data.month}</div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/20 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full transition-all duration-1000"
                          style={{ width: `${(data.projects / 840) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right text-sm text-white font-medium">{data.projects}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <Icon name={achievement.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 text-center">{achievement.title}</h3>
              <p className="text-sm text-primary-200 text-center leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-white font-semibold mb-1">Paiements sécurisés</div>
              <div className="text-xs text-primary-200">Systeme escrow</div>
            </div>
            
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="text-white font-semibold mb-1">Support 24/7</div>
              <div className="text-xs text-primary-200">Assistance continue</div>
            </div>
            
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-white font-semibold mb-1">Experts vérifiés</div>
              <div className="text-xs text-primary-200">Qualité garantie</div>
            </div>
            
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-white font-semibold mb-1">Excellence</div>
              <div className="text-xs text-primary-200">Service premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
