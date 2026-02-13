import { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const AdminDashboard = () => {
  const {
    requests, services, providers,
    getProvidersByService,
    updateRequestStatus, assignProvider, reassignProvider, loadRequests,
    statusLabels, statusColors, loading,
  } = useApp();

  const [filterStatus, setFilterStatus] = useState('tous');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [reassignModalOpen, setReassignModalOpen] = useState(false);
  const [reassignRequest, setReassignRequest] = useState(null);
  const [reassignProviders, setReassignProviders] = useState([]);
  const [newProviderId, setNewProviderId] = useState('');
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [assignRequest, setAssignRequest] = useState(null);
  const [assignProviders, setAssignProviders] = useState([]);
  const [assignProviderId, setAssignProviderId] = useState('');
  const [pendingProviders, setPendingProviders] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    loadRequests();
    loadPendingProviders();
  }, [loadRequests]);

  const loadPendingProviders = async () => {
    try {
      const response = await fetch('/api/providers/pending');
      if (response.ok) {
        const data = await response.json();
        setPendingProviders(data);
      }
    } catch (err) {
      console.error('Erreur chargement candidatures:', err);
    }
  };

  const handleApproveProvider = async (providerId) => {
    try {
      const response = await fetch(`/api/providers/${providerId}/availability`, {
        method: 'PATCH',
      });
      if (response.ok) {
        loadPendingProviders();
        alert('Prestataire approuvé avec succès !');
      } else {
        alert('Erreur lors de l\'approbation');
      }
    } catch (err) {
      alert('Erreur de connexion');
    }
  };

  const handleRejectProvider = async (providerId) => {
    if (!confirm('Êtes-vous sûr de vouloir rejeter cette candidature ?')) return;
    try {
      const response = await fetch(`/api/providers/${providerId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        loadPendingProviders();
        alert('Candidature rejetée');
      } else {
        alert('Erreur lors du rejet');
      }
    } catch (err) {
      alert('Erreur de connexion');
    }
  };

  const filteredRequests = useMemo(() => {
    if (filterStatus === 'tous') return requests;
    return requests.filter(r => r.status === filterStatus);
  }, [requests, filterStatus]);

  const stats = useMemo(() => ({
    total: requests.length,
    en_attente: requests.filter(r => r.status === 'en_attente').length,
    en_cours: requests.filter(r => ['validee', 'acceptee', 'en_cours'].includes(r.status)).length,
    terminee: requests.filter(r => r.status === 'terminee').length,
    rejetee: requests.filter(r => ['rejetee', 'refusee'].includes(r.status)).length,
  }), [requests]);

  const formatDate = (iso) => {
    if (!iso) return '-';
    return new Date(iso).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const formatDateShort = (iso) => {
    if (!iso) return '-';
    return new Date(iso).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short'
    });
  };

  const handleStatusChange = async (requestId, status) => {
    try {
      await updateRequestStatus(requestId, status);
    } catch (err) {
      alert('Erreur lors de la mise à jour du statut.');
    }
  };

  const handleReassign = async () => {
    if (reassignRequest && newProviderId) {
      const prov = reassignProviders.find(p => p._id === newProviderId);
      try {
        await reassignProvider(reassignRequest._id, newProviderId, prov?.name || '');
        setReassignModalOpen(false);
        setReassignRequest(null);
        setNewProviderId('');
      } catch (err) {
        alert('Erreur lors de la réassignation.');
      }
    }
  };

  const openAssignModal = async (request) => {
    setAssignRequest(request);
    setAssignProviderId('');
    const serviceId = typeof request.serviceId === 'object' ? request.serviceId._id : request.serviceId;
    const provs = await getProvidersByService(serviceId);
    setAssignProviders(provs);
    setAssignModalOpen(true);
  };

  const handleAssign = async () => {
    if (assignRequest && assignProviderId) {
      const prov = assignProviders.find(p => p._id === assignProviderId);
      try {
        await assignProvider(assignRequest._id, assignProviderId, prov?.name || '');
        setAssignModalOpen(false);
        setAssignRequest(null);
        setAssignProviderId('');
      } catch (err) {
        alert('Erreur lors de l\'assignation.');
      }
    }
  };

  const openReassignModal = async (request) => {
    setReassignRequest(request);
    setNewProviderId('');
    const serviceId = typeof request.serviceId === 'object' ? request.serviceId._id : request.serviceId;
    const provs = await getProvidersByService(serviceId);
    setReassignProviders(provs);
    setReassignModalOpen(true);
  };

  const getRequestRef = (req) => req._id ? req._id.toString().slice(-6).toUpperCase() : '------';

  const recentRequests = useMemo(() => {
    return [...requests].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  }, [requests]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">Admin</h2>
          <p className="text-sm text-gray-500">Espace de gestion</p>
        </div>
        <nav className="px-3 pb-6">
          {[
            { key: 'overview', label: 'Vue d\'ensemble', icon: 'chart' },
            { key: 'requests', label: 'Demandes', icon: 'scroll', badge: stats.en_attente },
            { key: 'candidatures', label: 'Candidatures', icon: 'people', badge: pendingProviders.length },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all mb-1 ${
                activeTab === tab.key
                  ? 'bg-primary-900 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                activeTab === tab.key ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                <Icon name={tab.icon} className="w-5 h-5" />
              </div>
              <span className="flex-1 text-left">{tab.label}</span>
              {tab.badge > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.key ? 'bg-white text-primary-900' : 'bg-red-500 text-white'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Mini Stats in Sidebar */}
        <div className="px-6 pt-6 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">Performance</p>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Complétion</span>
                <span className="font-medium text-gray-900">{stats.total > 0 ? Math.round((stats.terminee / stats.total) * 100) : 0}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all"
                  style={{ width: `${stats.total > 0 ? (stats.terminee / stats.total) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Système opérationnel</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            </div>
          </div>

          <div className="p-8">
        {/* Stats Cards - Ultra Compact */}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6">
          {[
            {label: 'Total', value: stats.total, icon: 'scroll', accent: 'bg-primary-500'},
            {label: 'En attente', value: stats.en_attente, icon: 'clock', accent: 'bg-amber-400', badge: stats.en_attente > 0},
            {label: 'En cours', value: stats.en_cours, icon: 'rocket', accent: 'bg-blue-400'},
            {label: 'Terminées', value: stats.terminee, icon: 'target', accent: 'bg-emerald-400'},
            {label: 'Candidatures', value: pendingProviders.length, icon: 'people', accent: 'bg-purple-500', badge: pendingProviders.length > 0},
          ].map(card => (
            <div key={card.label} className="bg-white rounded-lg border border-gray-100 p-3 flex flex-col gap-1 shadow-sm">
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded flex items-center justify-center ${card.accent} text-white`}>
                  <Icon name={card.icon} className="w-3.5 h-3.5" />
                </div>
                {card.badge && (
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <p className="text-xl font-bold text-gray-900 leading-none">{card.value ?? 0}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Recent Requests */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Dernières demandes</h3>
                <button 
                  onClick={() => setActiveTab('requests')}
                  className="text-sm text-primary-600 hover:text-primary-800 font-medium"
                >
                  Voir tout →
                </button>
              </div>
              <div className="divide-y divide-gray-50">
                {recentRequests.length === 0 ? (
                  <div className="p-8 text-center">
                    <Icon name="scroll" className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">Aucune demande récente</p>
                  </div>
                ) : (
                  recentRequests.map(request => (
                    <div key={request._id} className="px-6 py-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-gray-600">{request.clientName?.charAt(0) || '?'}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{request.clientName}</p>
                          <p className="text-sm text-gray-500">{request.serviceTitle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[request.status] || 'bg-gray-100 text-gray-700'}`}>
                          {statusLabels[request.status] || request.status}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">{formatDateShort(request.createdAt)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Actions & Candidatures */}
            <div className="space-y-6">
              {/* Pending Candidatures Alert */}
              {pendingProviders.length > 0 && (
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="people" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Nouvelles candidatures</p>
                      <p className="text-purple-200 text-sm">{pendingProviders.length} en attente de validation</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveTab('candidatures')}
                    className="w-full bg-white text-purple-700 font-medium py-2.5 rounded-xl hover:bg-purple-50 transition-colors"
                  >
                    Examiner maintenant
                  </button>
                </div>
              )}

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Taux de complétion</span>
                      <span className="font-medium text-gray-900">{stats.total > 0 ? Math.round((stats.terminee / stats.total) * 100) : 0}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${stats.total > 0 ? (stats.terminee / stats.total) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">En traitement</span>
                      <span className="font-medium text-gray-900">{stats.total > 0 ? Math.round((stats.en_cours / stats.total) * 100) : 0}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${stats.total > 0 ? (stats.en_cours / stats.total) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Count */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Ressources</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <p className="text-2xl font-bold text-gray-900">{services?.length || 0}</p>
                    <p className="text-xs text-gray-500">Services actifs</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <p className="text-2xl font-bold text-gray-900">{providers?.length || 0}</p>
                    <p className="text-xs text-gray-500">Prestataires</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Candidatures Tab */}
        {activeTab === 'candidatures' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Candidatures en attente de validation</h3>
              <p className="text-sm text-gray-500 mt-1">Examinez et validez les nouvelles inscriptions de prestataires</p>
            </div>
            
            {pendingProviders.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="target" className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Tout est à jour !</h3>
                <p className="text-gray-500 text-sm">Aucune candidature en attente de validation.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {pendingProviders.map(provider => (
                  <div key={provider._id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-white">{provider.name?.charAt(0) || '?'}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Nouveau</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Icon name="phone" className="w-3.5 h-3.5" />
                              {provider.phone}
                            </span>
                            {provider.email && (
                              <span className="flex items-center gap-1">
                                <Icon name="email" className="w-3.5 h-3.5" />
                                {provider.email}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Icon name="location" className="w-3.5 h-3.5" />
                              {provider.city}
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="text-xs text-gray-400">Service :</span>
                            <span className="ml-1 text-sm text-gray-700">{provider.serviceIds?.map(s => s.title).join(', ') || 'Non spécifié'}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{provider.bio}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 lg:flex-shrink-0">
                        <button
                          onClick={() => handleRejectProvider(provider._id)}
                          className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          Rejeter
                        </button>
                        <button
                          onClick={() => handleApproveProvider(provider._id)}
                          className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition-all shadow-sm"
                        >
                          Approuver
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === 'requests' && (
          <>
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { key: 'tous', label: 'Toutes', count: stats.total },
                { key: 'en_attente', label: 'En attente', count: stats.en_attente },
                { key: 'validee', label: 'Validées' },
                { key: 'en_cours', label: 'En cours', count: stats.en_cours },
                { key: 'terminee', label: 'Terminées', count: stats.terminee },
                { key: 'rejetee', label: 'Rejetées' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilterStatus(tab.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterStatus === tab.key
                      ? 'bg-primary-900 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                      filterStatus === tab.key ? 'bg-white/20' : 'bg-gray-100'
                    }`}>{tab.count}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Requests Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              {filteredRequests.length === 0 ? (
                <div className="p-12 text-center">
                  <Icon name="scroll" className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Aucune demande</h3>
                  <p className="text-gray-500 text-sm">
                    {filterStatus === 'tous'
                      ? "Aucune demande n'a encore été soumise."
                      : `Aucune demande avec le statut "${statusLabels[filterStatus] || filterStatus}".`}
                  </p>
                </div>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Référence</th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Prestataire</th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
                          <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {filteredRequests.map(request => (
                          <tr key={request._id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                              <span className="font-mono text-sm font-medium text-primary-900 bg-primary-50 px-2 py-1 rounded">#{getRequestRef(request)}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-bold text-gray-600">{request.clientName?.charAt(0) || '?'}</span>
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">{request.clientName}</p>
                                  <p className="text-xs text-gray-500">{request.clientPhone}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{request.serviceTitle}</td>
                            <td className="px-6 py-4 text-sm">
                              {request.providerName ? (
                                <span className="text-gray-700">{request.providerName}</span>
                              ) : (
                                <button
                                  onClick={() => openAssignModal(request)}
                                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-200 transition-colors"
                                >
                                  Assigner un prestataire
                                </button>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">{formatDateShort(request.createdAt)}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[request.status] || 'bg-gray-100 text-gray-700'}`}>
                                {statusLabels[request.status] || request.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => setSelectedRequest(selectedRequest?._id === request._id ? null : request)}
                                  className="p-2 text-gray-400 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
                                  title="Détails"
                                >
                                  <Icon name="search" className="w-4 h-4" />
                                </button>
                                {request.status === 'en_attente' && (
                                  <>
                                    <button
                                      onClick={() => handleStatusChange(request._id, 'validee')}
                                      className="p-2 text-green-500 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                                      title="Valider"
                                    >
                                      <Icon name="target" className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleStatusChange(request._id, 'rejetee')}
                                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                      title="Rejeter"
                                    >
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    </button>
                                  </>
                                )}
                                {['en_attente', 'validee', 'acceptee'].includes(request.status) && (
                                  <button
                                    onClick={() => openReassignModal(request)}
                                    className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                                    title="Réassigner"
                                  >
                                    <Icon name="people" className="w-4 h-4" />
                                  </button>
                                )}
                                {['validee', 'acceptee', 'en_cours'].includes(request.status) && (
                                  <button
                                    onClick={() => handleStatusChange(request._id, 'terminee')}
                                    className="p-2 text-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                                    title="Marquer terminée"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="lg:hidden divide-y divide-gray-100">
                    {filteredRequests.map(request => (
                      <div key={request._id} className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-gray-600">{request.clientName?.charAt(0) || '?'}</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{request.clientName}</p>
                              <p className="text-xs text-gray-500 font-mono">#{getRequestRef(request)}</p>
                            </div>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[request.status] || 'bg-gray-100 text-gray-700'}`}>
                            {statusLabels[request.status] || request.status}
                          </span>
                        </div>
                        <div className="space-y-1 text-sm mb-3 pl-13">
                          <p className="text-gray-600"><span className="text-gray-400">Service :</span> {request.serviceTitle}</p>
                          <p className="text-gray-600"><span className="text-gray-400">Prestataire :</span> {request.providerName || <span className="text-indigo-600 font-medium">Non assigné</span>}</p>
                          <p className="text-gray-600"><span className="text-gray-400">Date :</span> {formatDateShort(request.createdAt)}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-13">
                          <button
                            onClick={() => setSelectedRequest(selectedRequest?._id === request._id ? null : request)}
                            className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                          >
                            Détails
                          </button>
                          {!request.providerName && (
                            <button
                              onClick={() => openAssignModal(request)}
                              className="px-3 py-1.5 text-xs bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors font-medium"
                            >
                              Assigner
                            </button>
                          )}
                          {request.status === 'en_attente' && (
                            <>
                              <button
                                onClick={() => handleStatusChange(request._id, 'validee')}
                                className="px-3 py-1.5 text-xs bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium"
                              >
                                Valider
                              </button>
                              <button
                                onClick={() => handleStatusChange(request._id, 'rejetee')}
                                className="px-3 py-1.5 text-xs bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                              >
                                Rejeter
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {/* Detail Panel */}
        {activeTab === 'requests' && selectedRequest && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-mono text-sm font-medium text-primary-900 bg-primary-50 px-2 py-1 rounded">#{getRequestRef(selectedRequest)}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Détails de la demande</h3>
              </div>
              <button onClick={() => setSelectedRequest(null)} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4 flex items-center gap-2">
                  <Icon name="user" className="w-4 h-4" /> Client
                </h4>
                <div className="space-y-3">
                  <div><span className="text-sm text-gray-500">Nom :</span> <span className="text-sm font-medium text-gray-900 ml-2">{selectedRequest.clientName}</span></div>
                  <div><span className="text-sm text-gray-500">Téléphone :</span> <span className="text-sm font-medium text-gray-900 ml-2">{selectedRequest.clientPhone}</span></div>
                  <div><span className="text-sm text-gray-500">Ville :</span> <span className="text-sm font-medium text-gray-900 ml-2">{selectedRequest.clientCity}</span></div>
                  <div><span className="text-sm text-gray-500">Date souhaitée :</span> <span className="text-sm font-medium text-gray-900 ml-2">{selectedRequest.preferredDate}</span></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4 flex items-center gap-2">
                  <Icon name="tool" className="w-4 h-4" /> Service
                </h4>
                <div className="space-y-3">
                  <div><span className="text-sm text-gray-500">Service :</span> <span className="text-sm font-medium text-gray-900 ml-2">{selectedRequest.serviceTitle}</span></div>
                  <div><span className="text-sm text-gray-500">Prestataire :</span> <span className="text-sm font-medium text-gray-900 ml-2">{selectedRequest.providerName || <span className="text-indigo-600">Non assigné</span>}</span></div>
                  <div><span className="text-sm text-gray-500">Créée le :</span> <span className="text-sm font-medium text-gray-900 ml-2">{formatDate(selectedRequest.createdAt)}</span></div>
                  <div><span className="text-sm text-gray-500">Mise à jour :</span> <span className="text-sm font-medium text-gray-900 ml-2">{formatDate(selectedRequest.updatedAt)}</span></div>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Description du besoin</h4>
                <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700">
                  {selectedRequest.description || 'Aucune description fournie.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assign Modal */}
        {assignModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Assigner un prestataire</h3>
                <button onClick={() => { setAssignModalOpen(false); setAssignRequest(null); }} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-4">
                <p className="text-sm text-indigo-800"><strong>Client :</strong> {assignRequest?.clientName}</p>
                <p className="text-sm text-indigo-800"><strong>Service :</strong> {assignRequest?.serviceTitle}</p>
                <p className="text-sm text-indigo-800"><strong>Ville :</strong> {assignRequest?.clientCity}</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">Choisissez le prestataire le plus adapté pour cette demande :</p>
              <select
                value={assignProviderId}
                onChange={(e) => setAssignProviderId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none mb-4 bg-gray-50"
              >
                <option value="">Sélectionnez un prestataire</option>
                {assignProviders.map(p => (
                  <option key={p._id} value={p._id}>{p.name} - {p.city} (★ {p.rating})</option>
                ))}
              </select>
              {assignProviders.length === 0 && (
                <p className="text-sm text-red-500 mb-4">Aucun prestataire disponible pour ce service.</p>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => { setAssignModalOpen(false); setAssignRequest(null); }}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAssign}
                  disabled={!assignProviderId}
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Assigner
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reassign Modal */}
        {reassignModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Réassigner le prestataire</h3>
                <button onClick={() => { setReassignModalOpen(false); setReassignRequest(null); }} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Choisissez un nouveau prestataire pour cette demande :</p>
              <select
                value={newProviderId}
                onChange={(e) => setNewProviderId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none mb-4 bg-gray-50"
              >
                <option value="">Sélectionnez un prestataire</option>
                {reassignProviders.map(p => (
                  <option key={p._id} value={p._id}>{p.name} - {p.city} (★ {p.rating})</option>
                ))}
              </select>
              <div className="flex gap-3">
                <button
                  onClick={() => { setReassignModalOpen(false); setReassignRequest(null); }}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleReassign}
                  disabled={!newProviderId}
                  className="flex-1 bg-primary-900 text-white py-3 rounded-xl font-medium hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        )}
          </div>
        </main>
      </div>
  );
};

export default AdminDashboard;
