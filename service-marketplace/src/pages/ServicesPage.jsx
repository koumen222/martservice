import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    'Coiffure',
    'Plomberie',
    'Maintenance Informatique',
    'Notariat'
  ];

  const priceRanges = [
    'Tous',
    'Moins de 50 000 FCFA',
    '50 000 - 200 000 FCFA',
    '200 000 - 500 000 FCFA',
    'Plus de 500 000 FCFA'
  ];

  const allServices = [
    {
      id: 1,
      title: "Design Graphique",
      category: "Création",
      description: "Logo, identité visuelle et supports de communication professionnels.",
      price: "À partir de 50 000 FCFA",
      priceValue: 50000,
      rating: 4.9,
      reviews: 127,
      provider: "Studio Design",
      image: "🎨",
      featured: true
    },
    {
      id: 2,
      title: "Développement Web",
      category: "Technologie",
      description: "Sites sur mesure, applications et solutions digitales personnalisées.",
      price: "À partir de 150 000 FCFA",
      priceValue: 150000,
      rating: 4.8,
      reviews: 89,
      provider: "Tech Solutions",
      image: "💻",
      featured: true
    },
    {
      id: 3,
      title: "Marketing Digital",
      category: "Communication",
      description: "Stratégie digitale, réseaux sociaux et campagnes publicitaires.",
      price: "À partir de 75 000 FCFA/mois",
      priceValue: 75000,
      rating: 4.7,
      reviews: 203,
      provider: "Marketing Pro",
      image: "📱"
    },
    {
      id: 4,
      title: "Consulting Business",
      category: "Conseil",
      description: "Stratégie d'entreprise, optimisation des processus et accompagnement.",
      price: "À partir de 200 000 FCFA",
      priceValue: 200000,
      rating: 4.9,
      reviews: 156,
      provider: "Business Experts",
      image: "📊"
    },
    {
      id: 5,
      title: "Formation Professionnelle",
      category: "Éducation",
      description: "Programmes sur mesure pour le développement des compétences.",
      price: "À partir de 25 000 FCFA",
      priceValue: 25000,
      rating: 4.8,
      reviews: 67,
      provider: "Form Academy",
      image: "📚"
    },
    {
      id: 6,
      title: "Services Juridiques",
      category: "Droit",
      description: "Conseil juridique, rédaction de contrats et accompagnement légal.",
      price: "À partir de 100 000 FCFA",
      priceValue: 100000,
      rating: 5.0,
      reviews: 94,
      provider: "Legal Services",
      image: "⚖️"
    },
    {
      id: 7,
      title: "Coiffure Femme",
      category: "Coiffure",
      description: "Coupe, coloration, brushing et soins capillaires professionnels.",
      price: "À partir de 15 000 FCFA",
      priceValue: 15000,
      rating: 4.7,
      reviews: 234,
      provider: "Salon Beauté Plus",
      image: "💇‍♀️",
      featured: true
    },
    {
      id: 8,
      title: "Coiffure Homme",
      category: "Coiffure",
      description: "Coupe moderne, barbe et soins pour hommes.",
      price: "À partir de 10 000 FCFA",
      priceValue: 10000,
      rating: 4.8,
      reviews: 189,
      provider: "Barber Shop Pro",
      image: "💇‍♂️"
    },
    {
      id: 9,
      title: "Installation Sanitaire",
      category: "Plomberie",
      description: "Installation et réparation de sanitaires, robinets et évacuations.",
      price: "À partir de 30 000 FCFA",
      priceValue: 30000,
      rating: 4.6,
      reviews: 145,
      provider: "Plomberie Express",
      image: "🔧"
    },
    {
      id: 10,
      title: "Dépannage Plomberie",
      category: "Plomberie",
      description: "Intervention d'urgence pour fuites, bouchons et pannes.",
      price: "À partir de 25 000 FCFA",
      priceValue: 25000,
      rating: 4.5,
      reviews: 278,
      provider: "Dépannage 24/7",
      image: "🚿"
    },
    {
      id: 11,
      title: "Maintenance Ordinateur",
      category: "Maintenance Informatique",
      description: "Dépannage, nettoyage et optimisation de PC et portables.",
      price: "À partir de 20 000 FCFA",
      priceValue: 20000,
      rating: 4.7,
      reviews: 312,
      provider: "Info Maintenance",
      image: "🖥️"
    },
    {
      id: 12,
      title: "Support Informatique",
      category: "Maintenance Informatique",
      description: "Assistance technique, installation logiciels et formation.",
      price: "À partir de 35 000 FCFA",
      priceValue: 35000,
      rating: 4.8,
      reviews: 198,
      provider: "Tech Support Pro",
      image: "🛠️"
    },
    {
      id: 13,
      title: "Consultation Notariale",
      category: "Notariat",
      description: "Conseil notarial pour transactions immobilières et successions.",
      price: "À partir de 80 000 FCFA",
      priceValue: 80000,
      rating: 4.9,
      reviews: 167,
      provider: "Cabinet Notaire",
      image: "📋"
    },
    {
      id: 14,
      title: "Rédaction Acte Notarié",
      category: "Notariat",
      description: "Rédaction d'actes authentiques et formalités notariales.",
      price: "À partir de 120 000 FCFA",
      priceValue: 120000,
      rating: 5.0,
      reviews: 89,
      provider: "Notaire Expert",
      image: "📝"
    },
    {
      id: 15,
      title: "Photographie Professionnelle",
      category: "Création",
      description: "Shooting photo, portrait et événementiel.",
      price: "À partir de 60 000 FCFA",
      priceValue: 60000,
      rating: 4.8,
      reviews: 156,
      provider: "Photo Studio",
      image: "📷"
    },
    {
      id: 16,
      title: "Vidéo Production",
      category: "Création",
      description: "Production vidéo, montage et post-production.",
      price: "À partir de 100 000 FCFA",
      priceValue: 100000,
      rating: 4.7,
      reviews: 98,
      provider: "Video Pro",
      image: "🎥"
    },
    {
      id: 17,
      title: "Application Mobile",
      category: "Technologie",
      description: "Développement d'applications iOS et Android natives.",
      price: "À partir de 300 000 FCFA",
      priceValue: 300000,
      rating: 4.9,
      reviews: 76,
      provider: "App Dev Studio",
      image: "📲"
    },
    {
      id: 18,
      title: "SEO Optimisation",
      category: "Technologie",
      description: "Optimisation SEO pour meilleur référencement Google.",
      price: "À partir de 80 000 FCFA",
      priceValue: 80000,
      rating: 4.6,
      reviews: 234,
      provider: "SEO Masters",
      image: "🔍"
    },
    {
      id: 19,
      title: "Community Management",
      category: "Communication",
      description: "Gestion des réseaux sociaux et création de contenu.",
      price: "À partir de 60 000 FCFA/mois",
      priceValue: 60000,
      rating: 4.5,
      reviews: 189,
      provider: "Social Media Pro",
      image: "📢"
    },
    {
      id: 20,
      title: "Relations Presse",
      category: "Communication",
      description: "Relations médias, communiqués et gestion de crise.",
      price: "À partir de 150 000 FCFA",
      priceValue: 150000,
      rating: 4.8,
      reviews: 67,
      provider: "Press Relations",
      image: "📰"
    },
    {
      id: 21,
      title: "Conseil Financier",
      category: "Conseil",
      description: "Conseil en gestion de patrimoine et investissement.",
      price: "À partir de 100 000 FCFA",
      priceValue: 100000,
      rating: 4.9,
      reviews: 145,
      provider: "Finance Conseil",
      image: "💰"
    },
    {
      id: 22,
      title: "Coach Personnel",
      category: "Conseil",
      description: "Accompagnement personnel et développement de carrière.",
      price: "À partir de 40 000 FCFA",
      priceValue: 40000,
      rating: 4.7,
      reviews: 278,
      provider: "Life Coach Pro",
      image: "🎯"
    },
    {
      id: 23,
      title: "Cours Langues",
      category: "Éducation",
      description: "Cours de langues étrangères tous niveaux.",
      price: "À partir de 30 000 FCFA/mois",
      priceValue: 30000,
      rating: 4.6,
      reviews: 312,
      provider: "Langues Academy",
      image: "🗣️"
    },
    {
      id: 24,
      title: "Soutien Scolaire",
      category: "Éducation",
      description: "Soutien scolaire et préparation aux examens.",
      price: "À partir de 20 000 FCFA/mois",
      priceValue: 20000,
      rating: 4.8,
      reviews: 198,
      provider: "Edu Support",
      image: "✏️"
    },
    {
      id: 25,
      title: "Droit des Affaires",
      category: "Droit",
      description: "Conseil juridique pour entreprises et contrats commerciaux.",
      price: "À partir de 150 000 FCFA",
      priceValue: 150000,
      rating: 4.9,
      reviews: 167,
      provider: "Business Legal",
      image: "⚖️"
    },
    {
      id: 26,
      title: "Droit Immobilier",
      category: "Droit",
      description: "Conseil juridique pour transactions immobilières.",
      price: "À partir de 120 000 FCFA",
      priceValue: 120000,
      rating: 4.8,
      reviews: 89,
      provider: "Immobilier Legal",
      image: "🏠"
    },
    {
      id: 27,
      title: "Coloration Professionnelle",
      category: "Coiffure",
      description: "Coloration, mèches et balayage de qualité salon.",
      price: "À partir de 25 000 FCFA",
      priceValue: 25000,
      rating: 4.7,
      reviews: 156,
      provider: "Color Expert",
      image: "🎨"
    },
    {
      id: 28,
      title: "Soins Capillaires",
      category: "Coiffure",
      description: "Soins profonds, masques et traitements capillaires.",
      price: "À partir de 20 000 FCFA",
      priceValue: 20000,
      rating: 4.8,
      reviews: 98,
      provider: "Hair Care Pro",
      image: "💆‍♀️"
    },
    {
      id: 29,
      title: "Chauffage Sanitaire",
      category: "Plomberie",
      description: "Installation et entretien de systèmes de chauffage.",
      price: "À partir de 80 000 FCFA",
      priceValue: 80000,
      rating: 4.6,
      reviews: 76,
      provider: "Chauffage Pro",
      image: "🔥"
    },
    {
      id: 30,
      title: "Rénovation Salle de Bain",
      category: "Plomberie",
      description: "Rénovation complète de salles de bain et cuisines.",
      price: "À partir de 200 000 FCFA",
      priceValue: 200000,
      rating: 4.7,
      reviews: 234,
      provider: "Rénovation Bath",
      image: "🚽"
    },
    {
      id: 31,
      title: "Réparation Smartphone",
      category: "Maintenance Informatique",
      description: "Réparation d'écrans, batteries et composants smartphones.",
      price: "À partir de 25 000 FCFA",
      priceValue: 25000,
      rating: 4.5,
      reviews: 189,
      provider: "Phone Repair",
      image: "📱"
    },
    {
      id: 32,
      title: "Sécurité Informatique",
      category: "Maintenance Informatique",
      description: "Audit sécurité, antivirus et protection des données.",
      price: "À partir de 60 000 FCFA",
      priceValue: 60000,
      rating: 4.8,
      reviews: 67,
      provider: "Security Pro",
      image: "🔒"
    },
    {
      id: 33,
      title: "Succession Notariale",
      category: "Notariat",
      description: "Déclaration de succession et partage successoral.",
      price: "À partir de 150 000 FCFA",
      priceValue: 150000,
      rating: 4.9,
      reviews: 145,
      provider: "Succession Notaire",
      image: "📜"
    },
    {
      id: 34,
      title: "Immobilier Notarié",
      category: "Notariat",
      description: "Actes de vente, hypothèques et transactions immobilières.",
      price: "À partir de 200 000 FCFA",
      priceValue: 200000,
      rating: 5.0,
      reviews: 278,
      provider: "Immo Notaire",
      image: "🏘️"
    },
    {
      id: 35,
      title: "Illustration Digitale",
      category: "Création",
      description: "Illustrations numériques, dessin vectoriel et concept art.",
      price: "À partir de 40 000 FCFA",
      priceValue: 40000,
      rating: 4.7,
      reviews: 312,
      provider: "Digital Art",
      image: "🖌️"
    },
    {
      id: 36,
      title: "Motion Design",
      category: "Création",
      description: "Animations 2D/3D, effets visuels et motion graphics.",
      price: "À partir de 80 000 FCFA",
      priceValue: 80000,
      rating: 4.8,
      reviews: 198,
      provider: "Motion Studio",
      image: "🎬"
    },
    {
      id: 37,
      title: "E-commerce Solution",
      category: "Technologie",
      description: "Boutique en ligne complète avec paiement et gestion.",
      price: "À partir de 250 000 FCFA",
      priceValue: 250000,
      rating: 4.6,
      reviews: 167,
      provider: "E-commerce Pro",
      image: "🛒"
    },
    {
      id: 38,
      title: "Cloud Computing",
      category: "Technologie",
      description: "Migration cloud, infrastructure et services cloud.",
      price: "À partir de 180 000 FCFA",
      priceValue: 180000,
      rating: 4.7,
      reviews: 89,
      provider: "Cloud Solutions",
      image: "☁️"
    },
    {
      id: 39,
      title: "Brand Content",
      category: "Communication",
      description: "Création de contenu marque et storytelling.",
      price: "À partir de 90 000 FCFA",
      priceValue: 90000,
      rating: 4.8,
      reviews: 156,
      provider: "Brand Content",
      image: "📖"
    },
    {
      id: 40,
      title: "Événementiel",
      category: "Communication",
      description: "Organisation d'événements, séminaires et lancements.",
      price: "À partir de 300 000 FCFA",
      priceValue: 300000,
      rating: 4.9,
      reviews: 98,
      provider: "Event Pro",
      image: "🎉"
    },
    {
      id: 41,
      title: "Conseil RH",
      category: "Conseil",
      description: "Conseil en ressources humaines et gestion de carrière.",
      price: "À partir de 120 000 FCFA",
      priceValue: 120000,
      rating: 4.6,
      reviews: 76,
      provider: "RH Conseil",
      image: "👥"
    },
    {
      id: 42,
      title: "Conseil Marketing",
      category: "Conseil",
      description: "Stratégie marketing, étude de marché et positionnement.",
      price: "À partir de 100 000 FCFA",
      priceValue: 100000,
      rating: 4.7,
      reviews: 234,
      provider: "Marketing Conseil",
      image: "📈"
    },
    {
      id: 43,
      title: "Formation Professionnelle",
      category: "Éducation",
      description: "Formations certifiantes et développement des compétences.",
      price: "À partir de 50 000 FCFA",
      priceValue: 50000,
      rating: 4.8,
      reviews: 189,
      provider: "Pro Formation",
      image: "🎓"
    },
    {
      id: 44,
      title: "Coaching Sportif",
      category: "Éducation",
      description: "Coaching sportif personnalisé et programmes fitness.",
      price: "À partir de 35 000 FCFA/mois",
      priceValue: 35000,
      rating: 4.7,
      reviews: 67,
      provider: "Sport Coach",
      image: "🏋️"
    },
    {
      id: 45,
      title: "Droit du Travail",
      category: "Droit",
      description: "Conseil droit du travail, contrats et litiges.",
      price: "À partir de 80 000 FCFA",
      priceValue: 80000,
      rating: 4.8,
      reviews: 145,
      provider: "Travail Legal",
      image: "⚖️"
    },
    {
      id: 46,
      title: "Droit Fiscal",
      category: "Droit",
      description: "Conseil fiscalité, optimisation et déclarations.",
      price: "À partir de 100 000 FCFA",
      priceValue: 100000,
      rating: 4.9,
      reviews: 278,
      provider: "Fiscal Legal",
      image: "💸"
    },
    {
      id: 47,
      title: "Extensions Capillaires",
      category: "Coiffure",
      description: "Pose d'extensions, rallongements et volumisation.",
      price: "À partir de 40 000 FCFA",
      priceValue: 40000,
      rating: 4.6,
      reviews: 312,
      provider: "Extensions Pro",
      image: "💁‍♀️"
    },
    {
      id: 48,
      title: "Maquillage Professionnel",
      category: "Coiffure",
      description: "Maquillage événementiel, cours et coaching beauté.",
      price: "À partir de 30 000 FCFA",
      priceValue: 30000,
      rating: 4.7,
      reviews: 198,
      provider: "Makeup Pro",
      image: "💄"
    },
    {
      id: 49,
      title: "Plomberie Industrielle",
      category: "Plomberie",
      description: "Installation et maintenance plomberie industrielle.",
      price: "À partir de 250 000 FCFA",
      priceValue: 250000,
      rating: 4.8,
      reviews: 167,
      provider: "Plomberie Indus",
      image: "🏭"
    },
    {
      id: 50,
      title: "Backup et Sauvegarde",
      category: "Maintenance Informatique",
      description: "Solutions de sauvegarde et récupération de données.",
      price: "À partir de 45 000 FCFA",
      priceValue: 45000,
      rating: 4.7,
      reviews: 89,
      provider: "Backup Solutions",
      image: "💾"
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
                    
                    <div className="text-3xl sm:text-4xl mb-4">{service.image}</div>
                    
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
