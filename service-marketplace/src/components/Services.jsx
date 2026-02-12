import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Design Graphique",
      category: "Création",
      description: "Logo, identité visuelle et supports de communication professionnels.",
      price: "À partir de 50 000 FCFA",
      rating: 4.9,
      provider: "Studio Design",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Développement Web",
      category: "Technologie",
      description: "Sites sur mesure, applications et solutions digitales personnalisées.",
      price: "À partir de 150 000 FCFA",
      rating: 4.8,
      provider: "Tech Solutions",
      icon: "💻"
    },
    {
      id: 3,
      title: "Marketing Digital",
      category: "Communication",
      description: "Stratégie digitale, réseaux sociaux et campagnes publicitaires.",
      price: "À partir de 75 000 FCFA/mois",
      rating: 4.7,
      provider: "Marketing Pro",
      icon: "📱"
    },
    {
      id: 4,
      title: "Consulting Business",
      category: "Conseil",
      description: "Stratégie d'entreprise, optimisation des processus et accompagnement.",
      price: "À partir de 200 000 FCFA",
      rating: 4.9,
      provider: "Business Experts",
      icon: "📊"
    },
    {
      id: 5,
      title: "Formation Professionnelle",
      category: "Éducation",
      description: "Programmes sur mesure pour le développement des compétences.",
      price: "À partir de 25 000 FCFA",
      rating: 4.8,
      provider: "Form Academy",
      icon: "🎓"
    },
    {
      id: 6,
      title: "Services Juridiques",
      category: "Droit",
      description: "Conseil juridique, rédaction de contrats et accompagnement légal.",
      price: "À partir de 100 000 FCFA",
      rating: 5.0,
      provider: "Legal Services",
      icon: "⚖️"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions professionnelles adaptées à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-8 hover:border-primary-900 transition-colors">
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Category */}
              <div className="mb-4">
                <span className="text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  {service.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-primary-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Provider */}
              <div className="mb-6">
                <p className="text-sm text-gray-500">Par {service.provider}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-secondary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">{service.rating}</span>
              </div>

              {/* Price */}
              <div className="text-primary-900 font-semibold mb-6">
                {service.price}
              </div>

              {/* CTA */}
              <button className="w-full bg-secondary-500 text-white py-3 text-sm font-medium hover:bg-secondary-600 transition-colors">
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
