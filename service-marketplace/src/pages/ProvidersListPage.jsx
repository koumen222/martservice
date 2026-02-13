import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const ProvidersListPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { getProvidersByService, services, loading } = useApp();

  const [providers, setProviders] = useState([]);
  const [loadingProviders, setLoadingProviders] = useState(true);

  const service = services.find(s => s._id === serviceId);

  useEffect(() => {
    const load = async () => {
      setLoadingProviders(true);
      const data = await getProvidersByService(serviceId);
      setProviders(data);
      setLoadingProviders(false);
    };
    if (serviceId) load();
  }, [serviceId, getProvidersByService]);

  if (loading || loadingProviders) {
    return (
      <PageLayout title="Chargement..." description="">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="animate-spin w-10 h-10 border-4 border-primary-200 border-t-primary-900 rounded-full mx-auto"></div>
          <p className="text-gray-500 mt-4">Chargement des prestataires...</p>
        </div>
      </PageLayout>
    );
  }

  if (!service) {
    return (
      <PageLayout title="Service introuvable" description="Ce service n'existe pas.">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-gray-600 mb-6">Le service demandé n'a pas été trouvé.</p>
          <Link to="/services" className="bg-primary-900 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition-colors">
            Retour aux services
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={service.title} description="Choisissez un prestataire qualifié pour votre projet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Service Info Banner */}
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
            <Icon name={service.icon} className="w-7 h-7 text-primary-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-serif font-bold text-primary-900">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <p className="text-primary-900 font-semibold text-sm mt-1">{service.price}</p>
          </div>
          <span className="text-sm text-gray-500">{providers.length} prestataire{providers.length > 1 ? 's' : ''} disponible{providers.length > 1 ? 's' : ''}</span>
        </div>

        {/* Providers List */}
        {providers.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="person" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-gray-700 mb-2">Aucun prestataire disponible</h3>
            <p className="text-gray-500 mb-6">Aucun prestataire n'est disponible pour ce service actuellement.</p>
            <Link to="/services" className="bg-primary-900 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition-colors">
              Voir d'autres services
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map(provider => (
              <div key={provider._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary-300 transition-all duration-200">
                {/* Provider Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-900 font-bold text-lg">
                      {provider.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-primary-900">{provider.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon name="building" className="w-4 h-4" />
                      <span>{provider.city}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{provider.bio}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{provider.rating}</span>
                  <span className="text-sm text-gray-500">({provider.reviews} avis)</span>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 mb-6">
                  <span className={`w-2.5 h-2.5 rounded-full ${provider.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm text-gray-600">{provider.available ? 'Disponible' : 'Indisponible'}</span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => navigate(`/request/${serviceId}/${provider._id}`)}
                  disabled={!provider.available}
                  className={`w-full py-3 rounded-md font-medium transition-colors text-center ${
                    provider.available
                      ? 'bg-secondary-500 text-white hover:bg-secondary-600'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {provider.available ? 'Choisir ce prestataire' : 'Indisponible'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link to="/services" className="text-primary-900 hover:text-primary-700 font-medium inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Retour aux services
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProvidersListPage;
