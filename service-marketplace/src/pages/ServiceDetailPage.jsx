import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/Icon';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceTitle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Données du service (simulées - en production viendraient d'une API)
  const services = {
    1: {
      id: 1,
      title: "Design Graphique",
      category: "Création",
      description: "Logo, identité visuelle et supports de communication professionnels.",
      fullDescription: "Notre service de design graphique vous accompagne dans la création de votre identité visuelle. De la conception de logo à la création de supports de communication complets, nous transformons vos idées en visuels percutants qui reflètent votre marque et séduisent votre audience.",
      price: "À partir de 30 000 XAF",
      rating: 4.9,
      reviews: 127,
      provider: {
        name: "Studio Design",
        description: "Agence de design spécialisée dans l'identité visuelle et la communication digitale",
        rating: 4.8,
        projects: 156
      },
      image: "design",
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
      price: "À partir de 100 000 XAF",
      rating: 4.8,
      reviews: 89,
      provider: {
        name: "Tech Solutions",
        description: "Équipe de développeurs experts en technologies web modernes",
        rating: 4.9,
        projects: 203
      },
      image: "code",
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
    },
    3: {
      id: 3,
      title: "Marketing Digital",
      category: "Communication",
      description: "Stratégie digitale, réseaux sociaux et campagnes publicitaires.",
      fullDescription: "Notre agence de marketing digital vous accompagne dans votre transformation digitale. De la stratégie de contenu à la gestion des réseaux sociaux, en passant par les campagnes publicitaires ciblées, nous vous aidons à atteindre vos objectifs commerciaux et à développer votre présence en ligne.",
      price: "À partir de 50 000 XAF/mois",
      rating: 4.7,
      reviews: 93,
      provider: {
        name: "Marketing Pro",
        description: "Agence spécialisée en marketing digital et communication",
        rating: 4.8,
        projects: 178
      },
      image: "mobile",
      features: [
        "Stratégie de contenu sur mesure",
        "Gestion réseaux sociaux (Facebook, Instagram, LinkedIn)",
        "Campagnes publicitaires ciblées",
        "Analyse et reporting mensuel",
        "Optimisation SEO",
        "Email marketing"
      ],
      deliveryTime: "Début immédiat",
      revisions: "Stratégie adaptable"
    },
    4: {
      id: 4,
      title: "Consulting Business",
      category: "Conseil",
      description: "Stratégie d'entreprise, optimisation des processus et accompagnement.",
      fullDescription: "Nos consultants expérimentés vous accompagnent dans la croissance de votre entreprise. De l'analyse stratégique à l'optimisation opérationnelle, nous vous apportons notre expertise pour développer votre activité et améliorer votre performance.",
      price: "À partir de 120 000 XAF",
      rating: 4.9,
      reviews: 67,
      provider: {
        name: "Business Experts",
        description: "Cabinet de conseil en stratégie et management",
        rating: 4.9,
        projects: 234
      },
      image: "chart",
      features: [
        "Audit stratégique complet",
        "Plan d'action personnalisé",
        "Optimisation des processus",
        "Accompagnement au changement",
        "Formation des équipes",
        "Suivi et ajustement"
      ],
      deliveryTime: "2-3 semaines",
      revisions: "3 mois d'accompagnement"
    },
    5: {
      id: 5,
      title: "Formation Professionnelle",
      category: "Éducation",
      description: "Programmes sur mesure pour le développement des compétences.",
      fullDescription: "Notre organisme de formation propose des programmes sur mesure pour développer les compétences de vos équipes. De la formation individuelle aux programmes collectifs, nous adaptons notre approche à vos besoins spécifiques pour garantir des résultats mesurables.",
      price: "À partir de 15 000 XAF",
      rating: 4.8,
      reviews: 156,
      provider: {
        name: "Form Academy",
        description: "Organisme de formation certifié",
        rating: 4.8,
        projects: 412
      },
      image: "education",
      features: [
        "Programmes sur mesure",
        "Formateurs certifiés",
        "Support pédagogique",
        "Évaluation des compétences",
        "Certification finale",
        "Accès à la plateforme e-learning"
      ],
      deliveryTime: "Selon programme",
      revisions: "Mise à jour continue"
    },
    6: {
      id: 6,
      title: "Services Juridiques",
      category: "Droit",
      description: "Conseil juridique, rédaction de contrats et accompagnement légal.",
      fullDescription: "Notre cabinet juridique vous accompagne dans toutes vos démarches légales. Du conseil au contentieux, en passant par la rédaction de contrats et l'accompagnement juridique, nous vous apportons notre expertise pour sécuriser vos activités et protéger vos intérêts.",
      price: "À partir de 60 000 XAF",
      rating: 5.0,
      reviews: 89,
      provider: {
        name: "Legal Services",
        description: "Cabinet d'avocats spécialisés en droit des affaires",
        rating: 5.0,
        projects: 267
      },
      image: "legal",
      features: [
        "Conseil juridique personnalisé",
        "Rédaction de contrats",
        "Analyse de documents légaux",
        "Accompagnement juridique",
        "Médiation et négociation",
        "Représentation légale"
      ],
      deliveryTime: "Selon besoin",
      revisions: "Suivi continu"
    }
  };

  const service = services[id];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact-provider', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contactForm,
          serviceId: service.id,
          providerName: service.provider.name,
          timestamp: new Date().toISOString()
        }),
      });
      
      if (response.ok) {
        setContactSubmitted(true);
        setTimeout(() => {
          setShowContactModal(false);
          setContactSubmitted(false);
          setContactForm({ name: '', email: '', phone: '', message: '', serviceTitle: '' });
        }, 2000);
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (err) {
      alert('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openContactModal = () => {
    setContactForm({ ...contactForm, serviceTitle: service.title });
    setShowContactModal(true);
  };

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
              <button 
                onClick={openContactModal}
                className="w-full bg-secondary-500 text-white py-3 text-sm font-medium hover:bg-secondary-600 transition-colors mb-3"
              >
                Contacter le prestataire
              </button>
              <Link
                to={`/request/${service.id}`}
                className="block w-full bg-primary-900 text-white py-3 text-sm font-medium hover:bg-primary-800 transition-colors text-center"
              >
                Réserver ce service
              </Link>
              <div className="mt-4 text-xs text-gray-600 text-center">
                Paiement sécurisé • Satisfait ou remboursé
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Contacter {service.provider.name}
                </h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Service : {service.title}
              </p>
            </div>

            {!contactSubmitted ? (
              <form onSubmit={handleContactSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="email@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-medium transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi...' : 'Envoyer'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Message envoyé !
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.provider.name} vous contactera dans les plus brefs délais.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
