import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Icon from './Icon';

const Services = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Design UX/UI",
      category: "Design & Création",
      description: "Interfaces modernes et expérience utilisateur optimale pour vos applications web et mobiles.",
      price: "À partir de 50 000 XAF",
      rating: 4.9,
      reviews: 127,
      provider: "Studio Digital",
      icon: "design",
      featured: true,
      deliveryTime: "5-7 jours",
      skills: ["Figma", "Adobe XD", "Prototypage"]
    },
    {
      id: 2,
      title: "Développement Web",
      category: "Technologie & Dév",
      description: "Sites sur mesure, applications web complexes et solutions digitales performantes.",
      price: "À partir de 150 000 XAF",
      rating: 4.8,
      reviews: 89,
      provider: "Tech Solutions",
      icon: "code",
      featured: true,
      deliveryTime: "2-4 semaines",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Marketing Digital",
      category: "Marketing & Com",
      description: "Stratégies digitales complètes : SEO, réseaux sociaux, publicités et content marketing.",
      price: "À partir de 75 000 XAF/mois",
      rating: 4.7,
      reviews: 93,
      provider: "Growth Agency",
      icon: "trending",
      featured: true,
      deliveryTime: "Continu",
      skills: ["SEO/SEA", "Social Media", "Analytics"]
    },
    {
      id: 4,
      title: "Photographie Professionnelle",
      category: "Création & Média",
      description: "Shots produits, portraits, événements. Images haute qualité pour votre marque.",
      price: "À partir de 25 000 XAF",
      rating: 4.9,
      reviews: 156,
      provider: "Lens Pro Studio",
      icon: "camera",
      featured: true,
      deliveryTime: "2-3 jours",
      skills: ["Portrait", "Produit", "Événementiel"]
    },
    {
      id: 5,
      title: "Consulting Business",
      category: "Conseil & Stratégie",
      description: "Accompagnement stratégique, business plan, optimisation processes et croissance.",
      price: "À partir de 100 000 XAF",
      rating: 4.8,
      reviews: 67,
      provider: "Strategy Partners",
      icon: "briefcase",
      featured: true,
      deliveryTime: "1-2 semaines",
      skills: ["Stratégie", "Business Plan", "Optimisation"]
    },
    {
      id: 6,
      title: "Rédaction Web & SEO",
      category: "Contenu & SEO",
      description: "Articles de blog, contenu web, optimisation SEO et stratégie de contenu.",
      price: "À partir de 15 000 XAF/article",
      rating: 4.6,
      reviews: 203,
      provider: "Content Factory",
      icon: "edit",
      featured: true,
      deliveryTime: "24-48h",
      skills: ["Rédaction", "SEO", "Content Strategy"]
    }
  ];

  const categories = [
    { name: "Design & Création", count: 89, icon: "palette", color: "from-purple-500 to-pink-500" },
    { name: "Technologie & Dév", count: 124, icon: "code", color: "from-blue-500 to-cyan-500" },
    { name: "Marketing & Com", count: 76, icon: "trending", color: "from-green-500 to-emerald-500" },
    { name: "Conseil & Stratégie", count: 45, icon: "briefcase", color: "from-orange-500 to-red-500" },
    { name: "Création & Média", count: 92, icon: "camera", color: "from-indigo-500 to-purple-500" },
    { name: "Contenu & SEO", count: 68, icon: "edit", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-primary-700 text-sm font-semibold">Services populaires</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Des solutions expertes
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              pour tous vos besoins
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accédez à plus de <span className="font-semibold text-gray-900">500 professionnels vérifiés</span> 
            dans toutes les catégories. Qualité garantie, support 24/7.
          </p>
        </div>

        {/* Categories Pills */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 hover:border-primary-300 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-2`}></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {category.name}
                </span>
                <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200"
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Populaire
                  </div>
                </div>
              )}

              {/* Service Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-secondary-600 uppercase tracking-wider mb-1">
                      {service.category}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">{service.rating}</span>
                      <span className="text-xs ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Prix indicatif</div>
                    <div className="text-lg font-bold text-gray-900">{service.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Livraison</div>
                    <div className="text-sm font-medium text-gray-700">{service.deliveryTime}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs font-bold text-gray-600">
                        {service.provider.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs font-medium">{service.provider}</span>
                  </div>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-center group-hover:shadow-lg"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">500+</div>
              <div className="text-primary-100 text-sm font-medium">Experts vérifiés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">98%</div>
              <div className="text-primary-100 text-sm font-medium">Satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">24/7</div>
              <div className="text-primary-100 text-sm font-medium">Support disponible</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black mb-2">2K+</div>
              <div className="text-primary-100 text-sm font-medium">Projets livrés</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de clients qui font confiance à Mart Business 
              pour leurs projets les plus ambitieux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explorer tous les services
              </Link>
              <Link
                to="/request-service"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
