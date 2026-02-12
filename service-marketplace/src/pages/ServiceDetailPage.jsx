import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetailPage = () => {
  const { id } = useParams();

  // Données du service (simulées - en production viendraient d'une API)
  const services = {
    1: {
      id: 1,
      title: "Design Graphique",
      category: "Création",
      description: "Logo, identité visuelle et supports de communication professionnels.",
      fullDescription: "Notre service de design graphique vous accompagne dans la création de votre identité visuelle. De la conception de logo à la création de supports de communication complets, nous transformons vos idées en visuels percutants qui reflètent votre marque et séduisent votre audience.",
      price: "À partir de 50 000 FCFA",
      rating: 4.9,
      reviews: 127,
      provider: {
        name: "Studio Design",
        description: "Agence de design spécialisée dans l'identité visuelle et la communication digitale",
        rating: 4.8,
        projects: 156
      },
      image: "🎨",
      features: [
        "Conception de logo professionnel",
        "Charte graphique complète",
        "Supports de communication (cartes de visite, flyers, brochures)",
        "Identité visuelle pour réseaux sociaux",
        "3 révisions incluses",
        "Formats sources fournis"
      ],
      deliveryTime: "5-7 jours ouvrés",
      revisions: "3 révisions incluses"
    },
    2: {
      id: 2,
      title: "Développement Web",
      category: "Technologie",
      description: "Sites sur mesure, applications et solutions digitales personnalisées.",
      fullDescription: "Nous développons des sites web modernes et performants adaptés à vos besoins spécifiques. Du site vitrine à l'application web complexe, nous utilisons les dernières technologies pour créer des expériences utilisateur exceptionnelles qui convertissent vos visiteurs en clients.",
      price: "À partir de 150 000 FCFA",
      rating: 4.8,
      reviews: 89,
      provider: {
        name: "Tech Solutions",
        description: "Équipe de développeurs experts en technologies web modernes",
        rating: 4.9,
        projects: 203
      },
      image: "💻",
      features: [
        "Site web responsive design",
        "Optimisation SEO",
        "Interface d'administration",
        "Formation utilisateur incluse",
        "Maintenance 3 mois",
        "Hébergement conseillé"
      ],
      deliveryTime: "2-4 semaines",
      revisions: "2 révisions incluses"
    }
  };

  const service = services[id];

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-primary-900 mb-4">Service non trouvé</h1>
            <p className="text-gray-600 mb-8">Le service que vous recherchez n'existe pas.</p>
            <Link 
              to="/services" 
              className="bg-secondary-500 text-white px-6 py-3 text-sm font-medium hover:bg-secondary-600 transition-colors"
            >
              Retour aux services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4 text-sm">
            <Link to="/services" className="text-gray-300 hover:text-white mr-2">
              ← Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300 ml-2">{service.title}</span>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">{service.title}</h1>
              <p className="text-base sm:text-lg text-gray-200 mb-4">{service.description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center">
                  <div className="flex text-secondary-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white ml-2">{service.rating}</span>
                  <span className="text-gray-400 ml-1">({service.reviews} avis)</span>
                </div>
                <span className="text-gray-300">{service.category}</span>
              </div>
            </div>
            <div className="text-6xl sm:text-8xl">{service.image}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Service Details */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-900 mb-4">Description complète</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.fullDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-900 mb-4">Ce qui est inclus</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-900 mb-4">Informations de livraison</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Temps de livraison</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{service.deliveryTime}</p>
                </div>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Révisions</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{service.revisions}</p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary-900 mb-4">Avis clients</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-secondary-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 ml-2">Il y a 2 jours</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1 text-sm sm:text-base">Marie K.</p>
                  <p className="text-gray-600 text-sm sm:text-base">Excellent travail! Le designer a parfaitement compris mes besoins et livré un logo magnifique.</p>
                </div>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-secondary-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 ml-2">Il y a 1 semaine</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1 text-sm sm:text-base">Jean P.</p>
                  <p className="text-gray-600 text-sm sm:text-base">Service très professionnel, livraison rapide et résultat au-delà de mes attentes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Provider & CTA */}
          <div className="lg:col-span-1">
            {/* Provider Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Prestataire</h3>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-900 font-bold mr-3 text-sm sm:text-base">
                  {service.provider.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{service.provider.name}</h4>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="flex text-secondary-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-2 h-2 sm:w-3 sm:h-3 ${i < Math.floor(service.provider.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1">{service.provider.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">{service.provider.description}</p>
              <div className="text-xs sm:text-sm text-gray-600">
                <span className="font-medium">{service.provider.projects}</span> projets réalisés
              </div>
            </div>

            {/* Price & CTA */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 sm:p-6 lg:sticky lg:top-24">
              <div className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">{service.price}</div>
              <button className="w-full bg-secondary-500 text-white py-3 text-sm font-medium hover:bg-secondary-600 transition-colors mb-3">
                Contacter le prestataire
              </button>
              <button className="w-full bg-primary-900 text-white py-3 text-sm font-medium hover:bg-primary-800 transition-colors">
                Réserver ce service
              </button>
              <div className="mt-4 text-xs text-gray-600 text-center">
                Paiement sécurisé • Satisfait ou remboursé
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
