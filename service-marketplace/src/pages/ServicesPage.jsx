import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import { useApp } from '../context/AppContext';

const ServicesPage = () => {
  const { services, loading } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [priceRange, setPriceRange] = useState('Tous');

  const categories = useMemo(() => {
    const cats = ['Tous', ...new Set(services.map(s => s.category))];
    return cats;
  }, [services]);

  const priceRanges = [
    'Tous',
    'Moins de 50 000 XAF',
    '50 000 - 200 000 XAF',
    '200 000 - 500 000 XAF',
    'Plus de 500 000 XAF'
  ];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = !searchTerm || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Tous' || service.category === selectedCategory;
      
      if (priceRange === 'Tous') return matchesSearch && matchesCategory;
      
      const price = service.priceValue;
      switch (priceRange) {
        case 'Moins de 50 000 XAF':
          return matchesSearch && matchesCategory && price < 50000;
        case '50 000 - 200 000 XAF':
          return matchesSearch && matchesCategory && price >= 50000 && price <= 200000;
        case '200 000 - 500 000 XAF':
          return matchesSearch && matchesCategory && price >= 200000 && price <= 500000;
        case 'Plus de 500 000 XAF':
          return matchesSearch && matchesCategory && price > 500000;
        default:
          return matchesSearch && matchesCategory;
      }
    });
  }, [services, searchTerm, selectedCategory, priceRange]);

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
                <div key={service._id} className="block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg hover:border-primary-900 transition-all duration-200">
                    {service.featured && (
                      <div className="bg-secondary-500 text-white text-xs font-medium px-2 py-1 inline-block mb-3">
                        Vedette
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
                      <p className="text-xs text-gray-500">Prix indicatif</p>
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

                    <Link to={`/services/${service._id}/providers`} className="block w-full bg-secondary-500 text-white py-2 text-sm font-medium hover:bg-secondary-600 transition-colors text-center rounded-md">
                      Trouver un prestataire
                    </Link>
                  </div>
                </div>
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
