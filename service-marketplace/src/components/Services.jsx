import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Icon from './Icon';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Design Graphique",
      category: "Création",
      description: "Logo, identité visuelle et supports de communication professionnels.",
      price: "À partir de 30 000 XAF",
      rating: 4.9,
      provider: "Studio Design",
      icon: "design"
    },
    {
      id: 2,
      title: "Développement Web",
      category: "Technologie",
      description: "Sites sur mesure, applications et solutions digitales personnalisées.",
      price: "À partir de 100 000 XAF",
      rating: 4.8,
      provider: "Tech Solutions",
      icon: "code"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-8 hover:border-primary-900 transition-colors">
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                <Icon name={service.icon} className="w-6 h-6 text-primary-600" />
              </div>

              {/* Category */}
              <div className="mb-4">
                <span className="text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  {service.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-lg font-bold text-primary-900">{service.price}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{service.rating}</span>
              </div>

              {/* Provider */}
              <div className="text-sm text-gray-500 mb-6">
                Par {service.provider}
              </div>

              {/* Button */}
              <Link 
                to={`/services/${service.id}`}
                className="block w-full bg-secondary-500 text-white py-3 px-4 rounded-md font-medium hover:bg-secondary-600 transition-colors text-center"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link 
            to="/services"
            className="inline-flex items-center bg-primary-900 text-white py-3 px-8 rounded-md font-medium hover:bg-primary-800 transition-colors"
          >
            Voir tous les services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
