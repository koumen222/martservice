import { Link } from 'react-router-dom';

const PresentationFlyer = () => {
  const services = [
    "Services domestiques : Ménage, repassage, cuisine",
    "Bâtiment et construction : Maçonnerie, plomberie, électricité",
    "Services informatiques : Développement web, maintenance informatique",
    "Transport et logistique : Déménagement, livraison",
    "Agriculture et agroalimentaire : Conseil, production, distribution",
    "Formation et coaching : Cours particuliers, coaching personnel",
    "Santé et bien-être : Massage, soins à domicile",
    "Divertissement et événementiel : Photographie, organisation d'événements"
  ];

  const providerAdvantages = [
    "Visibilité accrue et accès à une clientèle variée",
    "Gestion simplifiée des services et paiements",
    "Plateforme intuitive et facile à utiliser"
  ];

  const clientAdvantages = [
    "Accès à des professionnels qualifiés et fiables",
    "Comparaison des offres et avis pour choisir le meilleur service",
    "Paiement sécurisé et satisfaction garantie"
  ];

  const platformBenefits = [
    "Accès à une large gamme de services",
    "Mise en relation rapide et efficace",
    "Paiements sécurisés",
    "Avis et recommandations pour garantir la qualité"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      {/* Navbar professionnel */}
      <nav className="bg-white shadow-lg border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900 tracking-wide">ServiceHub</span>
                <span className="ml-2 text-sm text-secondary-600 font-medium">Africa</span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-secondary-600 px-4 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-secondary-500"
              >
                Retour à l'accueil
              </Link>
              <button
                onClick={() => window.print()}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                📄 Imprimer le dépliant
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Flyer Content */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden border-4 border-secondary-200">

          {/* Page 1: Couverture Africaine */}
          <div className="page-break bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white p-16 text-center relative min-h-[700px] flex flex-col justify-center overflow-hidden">
            {/* Motifs africains subtils */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-secondary-400 rounded-full"></div>
              <div className="absolute top-20 right-20 w-24 h-24 border-4 border-secondary-400 transform rotate-45"></div>
              <div className="absolute bottom-20 left-20 w-20 h-20 bg-secondary-400 opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-secondary-400 transform rotate-12"></div>
            </div>

            <div className="relative z-10">
              {/* Logo premium */}
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white">
                <span className="text-4xl font-bold text-primary-900">S</span>
              </div>

              {/* Titre principal */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                ServiceHub
                <span className="block text-4xl md:text-5xl text-secondary-400 mt-2 font-medium">
                  Excellence Africaine
                </span>
              </h1>

              <div className="w-32 h-1 bg-secondary-400 mx-auto mb-8 rounded-full"></div>

              <p className="text-2xl md:text-3xl mb-12 text-primary-100 font-light leading-relaxed max-w-4xl mx-auto">
                Votre partenaire de confiance pour des services professionnels
                de qualité supérieure en Afrique
              </p>

              {/* Éléments graphiques africains */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <p className="text-secondary-200 font-semibold">Maison</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">💼</span>
                  </div>
                  <p className="text-secondary-200 font-semibold">Travail</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <p className="text-secondary-200 font-semibold">Transport</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-secondary-200 font-semibold">Qualité</p>
                </div>
              </div>

              {/* Citation africaine */}
              <div className="mt-16 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-secondary-400 border-opacity-30">
                <blockquote className="text-secondary-200 italic text-lg">
                  "L'unité est la force, la confiance est le fondement du progrès africain"
                </blockquote>
                <cite className="text-secondary-300 text-sm mt-2 block">— Sagesse Africaine</cite>
              </div>
            </div>
          </div>

          {/* Page 2: Présentation Institutionnelle */}
          <div className="page-break p-16 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="max-w-5xl mx-auto">
              {/* En-tête avec motifs africains */}
              <div className="text-center mb-12">
                <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
                <h2 className="text-5xl font-bold text-emerald-900 mb-4">
                  Présentation Institutionnelle
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-12 border-l-8 border-amber-500">
                <div className="text-xl leading-relaxed mb-10 text-gray-800">
                  <p className="mb-8 text-center font-semibold text-2xl text-emerald-900">
                    Bienvenue sur <span className="text-amber-600 font-bold">ServiceHub Africa</span>, votre solution innovante pour trouver et offrir des prestations de services en toute simplicité.
                  </p>
                  <p className="mb-6 text-lg">
                    Nous mettons en relation des prestataires qualifiés et des clients à la recherche de services fiables et de qualité. Que vous soyez un professionnel souhaitant valoriser votre savoir-faire ou un particulier en quête d'un service fiable, notre plateforme est conçue pour répondre à vos besoins sur le continent africain.
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
                  Pourquoi choisir ServiceHub Africa ?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {platformBenefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 hover:shadow-lg transition-all">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-emerald-900 font-semibold text-lg mb-1">{benefit}</p>
                          <div className="w-12 h-0.5 bg-amber-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Page 3: Catalogue des Services */}
          <div className="page-break p-16 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-1 bg-emerald-500 mx-auto mb-4 rounded-full"></div>
                <h2 className="text-5xl font-bold text-emerald-900 mb-4">
                  Catalogue des Services
                </h2>
                <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                <p className="text-xl text-emerald-700 mt-6 font-medium">
                  Une diversité de services professionnels pour tous vos besoins
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-12 border-l-8 border-emerald-500">
                <p className="text-2xl text-emerald-900 mb-12 text-center font-semibold">
                  Nous proposons une large variété de services, notamment :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="group bg-gradient-to-r from-white to-emerald-25 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          <span className="text-white font-bold text-xl">
                            {index === 0 && "🏠"}
                            {index === 1 && "🏗️"}
                            {index === 2 && "💻"}
                            {index === 3 && "🚚"}
                            {index === 4 && "🌾"}
                            {index === 5 && "📚"}
                            {index === 6 && "🧘"}
                            {index === 7 && "🎪"}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-emerald-900 font-bold text-lg mb-2 group-hover:text-emerald-700 transition-colors">{service}</p>
                          <div className="w-16 h-0.5 bg-amber-500 rounded-full group-hover:w-24 transition-all"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12 p-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-200">
                  <p className="text-emerald-800 text-lg italic font-medium">
                    "Et bien d'autres services disponibles selon vos besoins spécifiques en Afrique"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Page 4: Avantages et Engagement */}
          <div className="page-break p-16 bg-gradient-to-br from-amber-50 to-yellow-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
                <h2 className="text-5xl font-bold text-emerald-900 mb-4">
                  Avantages & Engagement
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

                {/* Pour les prestataires */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-emerald-500">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900">Pour les Prestataires</h3>
                    <p className="text-emerald-600">Développez votre activité en Afrique</p>
                  </div>

                  <div className="space-y-6">
                    {providerAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-start space-x-3 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-800 font-medium leading-relaxed group-hover:text-emerald-700 transition-colors">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pour les clients */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-amber-500">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900">Pour les Clients</h3>
                    <p className="text-amber-600">Accédez à l'excellence africaine</p>
                  </div>

                  <div className="space-y-6">
                    {clientAdvantages.map((advantage, index) => (
                      <div key={index} className="flex items-start space-x-3 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-800 font-medium leading-relaxed group-hover:text-amber-700 transition-colors">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Call to action premium */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white rounded-2xl p-12 shadow-2xl">
                  <h3 className="text-4xl font-bold mb-6">
                    Rejoignez ServiceHub Africa !
                  </h3>
                  <p className="text-xl mb-8 opacity-90">
                    Bénéficiez d'un service fiable et efficace pour votre développement en Afrique
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">📧</div>
                      <h4 className="font-bold mb-2">Contact</h4>
                      <p className="text-sm opacity-90">contact@servicehub.africa</p>
                      <p className="text-sm opacity-90">+225 01 02 03 04 05</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">🌐</div>
                      <h4 className="font-bold mb-2">Site Web</h4>
                      <p className="text-sm opacity-90">www.servicehub.africa</p>
                      <p className="text-sm opacity-90">Application mobile disponible</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">📱</div>
                      <h4 className="font-bold mb-2">Réseaux Sociaux</h4>
                      <p className="text-sm opacity-90">Facebook, Instagram</p>
                      <p className="text-sm opacity-90">@servicehub_africa</p>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">🏆</div>
                      <h4 className="font-bold mb-2">Excellence</h4>
                      <p className="text-sm opacity-90">Qualité garantie</p>
                      <p className="text-sm opacity-90">Service premium</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                    <p className="text-amber-200 italic text-lg">
                      "L'excellence africaine au service de l'Afrique"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .page-break {
            page-break-before: always;
          }

          nav {
            display: none;
          }

          body {
            background: white !important;
          }

          .shadow-2xl {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PresentationFlyer;
