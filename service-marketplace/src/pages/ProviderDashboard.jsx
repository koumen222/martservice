import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const ProviderDashboard = () => {
  const { providerId: paramProviderId } = useParams();
  const {
    getProviderById, loadRequestsByProvider,
    updateRequestStatus, statusLabels, statusColors, providers, loading,
  } = useApp();

  const [selectedProviderId, setSelectedProviderId] = useState(paramProviderId || '');
  const [providerRequests, setProviderRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(false);
  const [activeTab, setActiveTab] = useState('missions');

  const provider = getProviderById(selectedProviderId);

  const [filterStatus, setFilterStatus] = useState('tous');

  const loadMissions = useCallback(async () => {
    if (!selectedProviderId) return;
    setLoadingRequests(true);
    try {
      const data = await loadRequestsByProvider(selectedProviderId);
      setProviderRequests(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingRequests(false);
    }
  }, [selectedProviderId, loadRequestsByProvider]);

  useEffect(() => {
    if (selectedProviderId) loadMissions();
  }, [selectedProviderId, loadMissions]);

  const filteredRequests = providerRequests.filter(r => {
    if (filterStatus === 'tous') return true;
    return r.status === filterStatus;
  });

  const stats = {
    total: providerRequests.length,
    nouvelles: providerRequests.filter(r => r.status === 'validee').length,
    en_cours: providerRequests.filter(r => ['acceptee', 'en_cours'].includes(r.status)).length,
    terminees: providerRequests.filter(r => r.status === 'terminee').length,
    revenus: providerRequests
      .filter(r => r.status === 'terminee')
      .reduce((sum, r) => sum + (r.budget || 0), 0),
    noteMoyenne: 4.8 // Simulé
  };

  const tabs = [
    { id: 'missions', label: 'Missions', icon: 'briefcase' },
    { id: 'stats', label: 'Statistiques', icon: 'chart' },
    { id: 'profile', label: 'Mon profil', icon: 'user' },
    { id: 'settings', label: 'Paramètres', icon: 'settings' }
  ];

  const formatDate = (iso) => {
    if (!iso) return '-';
    return new Date(iso).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleStatusChange = async (requestId, status) => {
    try {
      await updateRequestStatus(requestId, status);
      await loadMissions();
    } catch (err) {
      alert('Erreur lors de la mise à jour.');
    }
  };

  const getRef = (req) => req._id ? req._id.toString().slice(-6) : '------';

  if (!provider) {
    return (
      <PageLayout title="Espace Prestataire" description="Connectez-vous pour accéder à votre tableau de bord">
        <div className="max-w-lg mx-auto px-4 py-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="user" className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-xl font-serif font-bold text-primary-900 mb-2">Espace Prestataire</h2>
              <p className="text-sm text-gray-500">Connectez-vous pour accéder à votre tableau de bord</p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => setSelectedProviderId(providers[0]?._id || '')}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Accéder à mon espace
              </button>
              <Link
                to="/become-provider"
                className="block w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors text-center"
              >
                Devenir prestataire
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title={`Espace Prestataire - ${provider.name}`} 
      description="Gérez vos missions, vos revenus et votre profil professionnel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {provider.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900">
                  {provider.name}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center gap-1">
                    <Icon name="building" className="w-4 h-4" />
                    {provider.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    {provider.rating} ({provider.reviews} avis)
                  </span>
                  <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    provider.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      provider.available ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    {provider.available ? 'Disponible' : 'Indisponible'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                Mettre à jour disponibilité
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total missions</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                <Icon name="briefcase" className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Nouvelles</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{stats.nouvelles}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Icon name="clock" className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">En cours</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">{stats.en_cours}</p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <Icon name="settings" className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenus</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  {formatCurrency(stats.revenus)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Icon name="money" className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Note moyenne</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">{stats.noteMoyenne}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon name={tab.icon} className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'missions' && (
              <div className="space-y-6">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'tous', label: 'Toutes' },
                    { key: 'validee', label: 'Nouvelles demandes' },
                    { key: 'acceptee', label: 'Acceptées' },
                    { key: 'en_cours', label: 'En cours' },
                    { key: 'terminee', label: 'Terminées' },
                    { key: 'refusee', label: 'Refusées' },
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setFilterStatus(tab.key)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        filterStatus === tab.key
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Missions List */}
                {filteredRequests.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg p-12 text-center">
                    <Icon name="briefcase" className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-serif font-bold text-gray-600 mb-2">Aucune mission</h3>
                    <p className="text-gray-500 text-sm">
                      {filterStatus === 'tous'
                        ? "Vous n'avez pas encore de missions assignées."
                        : "Aucune mission avec ce statut."}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredRequests.map(request => (
                      <div key={request._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                          {/* Left: Info */}
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                #{getRef(request)}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[request.status] || 'bg-gray-100 text-gray-700'}`}>
                                {statusLabels[request.status] || request.status}
                              </span>
                              {request.status === 'validee' && (
                                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full animate-pulse">
                                  Nouveau
                                </span>
                              )}
                            </div>

                            <div>
                              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                                {request.serviceTitle}
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">Client : </span>
                                  <span className="text-gray-900 font-medium">{request.clientName}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Téléphone : </span>
                                  <span className="text-gray-900">{request.clientPhone}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Ville : </span>
                                  <span className="text-gray-900">{request.clientCity}</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Date souhaitée : </span>
                                  <span className="text-gray-900">{request.preferredDate}</span>
                                </div>
                              </div>
                            </div>

                            {request.description && (
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm font-medium text-gray-700 mb-1">Description :</p>
                                <p className="text-sm text-gray-600">{request.description}</p>
                              </div>
                            )}

                            {request.budget && (
                              <div className="flex items-center gap-2">
                                <Icon name="money" className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-600">
                                  Budget : {formatCurrency(request.budget)}
                                </span>
                              </div>
                            )}

                            <p className="text-xs text-gray-400">
                              Reçue le {formatDate(request.createdAt)}
                            </p>
                          </div>

                          {/* Right: Actions */}
                          <div className="flex flex-col gap-3 lg:w-48">
                            {request.status === 'validee' && (
                              <>
                                <button
                                  onClick={() => handleStatusChange(request._id, 'acceptee')}
                                  className="w-full px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                                >
                                  Accepter
                                </button>
                                <button
                                  onClick={() => handleStatusChange(request._id, 'refusee')}
                                  className="w-full px-4 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-lg hover:bg-red-200 transition-colors"
                                >
                                  Refuser
                                </button>
                              </>
                            )}
                            {request.status === 'acceptee' && (
                              <button
                                onClick={() => handleStatusChange(request._id, 'en_cours')}
                                className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                              >
                                Démarrer la mission
                              </button>
                            )}
                            {request.status === 'en_cours' && (
                              <button
                                onClick={() => handleStatusChange(request._id, 'terminee')}
                                className="w-full px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                              >
                                Terminer la mission
                              </button>
                            )}
                            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                              Contacter le client
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Statistiques détaillées</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Répartition des missions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Nouvelles</span>
                        <span className="text-sm font-medium text-blue-600">{stats.nouvelles}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${stats.total > 0 ? (stats.nouvelles / stats.total) * 100 : 0}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">En cours</span>
                        <span className="text-sm font-medium text-purple-600">{stats.en_cours}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${stats.total > 0 ? (stats.en_cours / stats.total) * 100 : 0}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Terminées</span>
                        <span className="text-sm font-medium text-green-600">{stats.terminees}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${stats.total > 0 ? (stats.terminees / stats.total) * 100 : 0}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Performance</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Taux de réponse</span>
                          <span className="text-sm font-medium text-gray-900">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Taux de completion</span>
                          <span className="text-sm font-medium text-gray-900">87%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Satisfaction client</span>
                          <span className="text-sm font-medium text-gray-900">{stats.noteMoyenne}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(stats.noteMoyenne / 5) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                  <h4 className="font-medium text-primary-900 mb-2">🎯 Objectif du mois</h4>
                  <p className="text-primary-700 mb-4">
                    Atteindre 10 missions terminées ce mois pour un bonus de 10% sur vos revenus.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-600">Progression : 7/10 missions</span>
                    <span className="text-sm font-medium text-primary-900">70%</span>
                  </div>
                  <div className="w-full bg-primary-200 rounded-full h-3 mt-2">
                    <div className="bg-primary-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Mon profil professionnel</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        defaultValue={provider.name}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={provider.email}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description professionnelle
                    </label>
                    <textarea
                      rows="4"
                      defaultValue={provider.description}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Services proposés
                    </label>
                    <input
                      type="text"
                      defaultValue={provider.services?.join(', ')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Paramètres du compte</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Notifications</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3" />
                        <span className="text-sm text-gray-700">Recevoir les nouvelles demandes par email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3" />
                        <span className="text-sm text-gray-700">Notifications SMS pour les missions urgentes</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3" />
                        <span className="text-sm text-gray-700">Newsletter Mart Business</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Disponibilité</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked={provider.available} className="mr-3" />
                        <span className="text-sm text-gray-700">Disponible pour nouvelles missions</span>
                      </label>
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">Heures de travail</label>
                        <div className="grid grid-cols-2 gap-4">
                          <input type="time" defaultValue="08:00" className="px-3 py-2 border border-gray-300 rounded-lg" />
                          <input type="time" defaultValue="18:00" className="px-3 py-2 border border-gray-300 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Supprimer mon compte
                    </button>
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                      Enregistrer les paramètres
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProviderDashboard;
