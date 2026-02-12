import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/Icon';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [priceRange, setPriceRange] = useState('Tous');

  const categories = [
    'Tous',
    'Création',
    'Technologie',
    'Communication',
    'Conseil',
    'Éducation',
    'Droit',
    'Médias',
    'Informatique',
    'Langues',
    'Design'
  ];

  const priceRanges = [
    'Tous',
    'Moins de 50 000 XAF',
    '50 000 - 200 000 XAF',
    '200 000 - 500 000 XAF',
    'Plus de 500 000 XAF'
  ];

  const allServices = [
    {
      id: 1,
      title: "Design Graphique",
      category: "Création",
      description: "Logo, identité visuelle et supports de communication professionnels.",
      price: "À partir de 30 000 XAF",
      priceValue: 30000,
      rating: 4.9,
      reviews: 127,
      provider: "Studio Design",
      icon: "design",
      featured: true
    },
    {
      id: 2,
      title: "Développement Web",
      category: "Technologie",
      description: "Sites sur mesure, applications et solutions digitales personnalisées.",
      price: "À partir de 100 000 XAF",
      priceValue: 100000,
      rating: 4.8,
      reviews: 89,
      provider: "Tech Solutions",
      icon: "code",
      featured: true
    },
    {
      id: 3,
      title: "Marketing Digital",
      category: "Communication",
      description: "Stratégie digitale, réseaux sociaux et campagnes publicitaires.",
      price: "À partir de 50 000 XAF/mois",
      priceValue: 50000,
      rating: 4.7,
      reviews: 203,
      provider: "Marketing Pro",
      icon: "mobile"
    },
    {
      id: 4,
      title: "Consulting Business",
      category: "Conseil",
      description: "Stratégie d'entreprise, optimisation des processus et accompagnement.",
      price: "À partir de 120 000 XAF",
      priceValue: 120000,
      rating: 4.9,
      reviews: 156,
      provider: "Business Experts",
      icon: "chart"
    },
    {
      id: 5,
      title: "Formation Professionnelle",
      category: "Éducation",
      description: "Programmes sur mesure pour le développement des compétences.",
      price: "À partir de 15 000 XAF",
      priceValue: 15000,
      rating: 4.8,
      reviews: 67,
      provider: "Form Academy",
      icon: "education"
    },
    {
      id: 6,
      title: "Services Juridiques",
      category: "Droit",
      description: "Conseil juridique, rédaction de contrats et accompagnement légal.",
      price: "À partir de 60 000 XAF",
      priceValue: 60000,
      rating: 5.0,
      reviews: 94,
      provider: "Legal Services",
      icon: "legal"
    },
    {
      id: 7,
      title: "Photographie Professionnelle",
      category: "Médias",
      description: "Shooting photo, retouche et création de contenu visuel de haute qualité.",
      price: "À partir de 40 000 XAF",
      priceValue: 40000,
      rating: 4.8,
      reviews: 145,
      provider: "Photo Pro Studio",
      icon: "camera"
    },
    {
      id: 8,
      title: "Support Technique",
      category: "Informatique",
      description: "Maintenance informatique, dépannage et assistance technique rapide.",
      price: "À partir de 25 000 XAF",
      priceValue: 25000,
      rating: 4.6,
      reviews: 189,
      provider: "Tech Support",
      icon: "support"
    },
    {
      id: 9,
      title: "Traduction Professionnelle",
      category: "Langues",
      description: "Traduction de documents, interprétation et services multilingues.",
      price: "À partir de 20 000 XAF",
      priceValue: 20000,
      rating: 4.7,
      reviews: 234,
      provider: "Langue Masters",
      icon: "speech"
    },
    {
      id: 10,
      title: "Architecture d'Intérieur",
      category: "Design",
      description: "Conception d'espaces, décoration et aménagement intérieur personnalisé.",
      price: "À partir de 80 000 XAF",
      priceValue: 80000,
      rating: 4.9,
      reviews: 167,
      provider: "Interior Design Pro",
      icon: "home"
    }
  ];

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = !searchTerm || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Tous' || service.category === selectedCategory;
      
      if (priceRange === 'Tous') return matchesSearch && matchesCategory;
      
      const price = service.priceValue;
      switch (priceRange) {
        case 'Moins de 50 000 FCFA':
          return matchesSearch && matchesCategory && price < 50000;
        case '50 000 - 200 000 FCFA':
          return matchesSearch && matchesCategory && price >= 50000 && price <= 200000;
        case '200 000 - 500 000 FCFA':
          return matchesSearch && matchesCategory && price >= 200000 && price <= 500000;
        case 'Plus de 500 000 FCFA':
          return matchesSearch && matchesCategory && price > 500000;
        default:
          return matchesSearch && matchesCategory;
      }
    });
  }, [searchTerm, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Nos Services</h1>
          <p className="text-lg text-gray-200">Des solutions professionnelles adaptées à vos besoins</p>
        </div>
      </div>

      
      {/* Services Grid with Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:sticky lg:top-24">
              <h3 className="font-serif font-bold text-lg mb-4 sm:mb-6">Filtres</h3>
              
              {/* Search */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Rechercher</label>
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primary-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-primary-900 focus:ring-primary-900"
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Fourchette de prix</label>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={range}
                        checked={priceRange === range}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="mr-2 text-primary-900 focus:ring-primary-900"
                      />
                      <span className="text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Tous');
                  setPriceRange('Tous');
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-gray-600">
              {filteredServices.length} service{filteredServices.length > 1 ? 's' : ''} trouvé{filteredServices.length > 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredServices.map(service => (
                <Link key={service.id} to={`/services/${service.id}`} className="block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg hover:border-primary-900 transition-all duration-200 cursor-pointer">
                    {service.featured && (
                      <div className="bg-secondary-500 text-white text-xs font-medium px-2 py-1 inline-block mb-3">
                        VEDette
                      </div>
                    )}
                    
                    <Icon name={service.icon} className="text-3xl sm:text-4xl mb-4 text-primary-600" />
                    
                    <div className="mb-2">
                      <span className="text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-primary-900 mb-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="mb-3">
                      <p className="text-xs text-gray-500">Par {service.provider}</p>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="flex text-secondary-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3 h-3 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 ml-2">{service.rating} ({service.reviews})</span>
                    </div>

                    <div className="text-primary-900 font-semibold text-sm mb-4">
                      {service.price}
                    </div>

                    <button className="w-full bg-secondary-500 text-white py-2 text-sm font-medium hover:bg-secondary-600 transition-colors">
                      En savoir plus
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
