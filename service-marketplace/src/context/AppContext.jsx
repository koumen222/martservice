import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as api from '../api/api';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [providers, setProviders] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Load user from token on mount
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData = await api.getMe();
          setUser(userData);
        } catch (err) {
          localStorage.removeItem('token');
          setUser(null);
        }
      }
      setAuthLoading(false);
    };
    loadUser();
  }, []);

  // Load services and providers on mount
  useEffect(() => {
    const init = async () => {
      try {
        const [svc, prov] = await Promise.all([
          api.fetchServices(),
          api.fetchProviders(),
        ]);
        setServices(svc);
        setProviders(prov);
      } catch (err) {
        console.error('Erreur chargement données:', err);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const registerUser = useCallback(async (data) => {
    const result = await api.register(data);
    localStorage.setItem('token', result.token);
    setUser(result.user);
    return result;
  }, []);

  const loginUser = useCallback(async (data) => {
    const result = await api.login(data);
    localStorage.setItem('token', result.token);
    setUser(result.user);
    return result;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  const getServiceById = useCallback((id) => services.find(s => s._id === id), [services]);
  const getProviderById = useCallback((id) => providers.find(p => p._id === id), [providers]);

  const getProvidersByService = useCallback(async (serviceId) => {
    try {
      return await api.fetchProvidersByService(serviceId);
    } catch (err) {
      console.error('Erreur chargement prestataires:', err);
      return [];
    }
  }, []);

  const loadRequests = useCallback(async () => {
    try {
      const data = await api.fetchRequests();
      setRequests(data);
      return data;
    } catch (err) {
      console.error('Erreur chargement demandes:', err);
      return [];
    }
  }, []);

  const loadRequestsByProvider = useCallback(async (providerId) => {
    try {
      return await api.fetchRequestsByProvider(providerId);
    } catch (err) {
      console.error('Erreur chargement missions:', err);
      return [];
    }
  }, []);

  const createRequest = useCallback(async (requestData) => {
    try {
      const newReq = await api.createRequest(requestData);
      setRequests(prev => [newReq, ...prev]);
      return newReq;
    } catch (err) {
      console.error('Erreur création demande:', err);
      throw err;
    }
  }, []);

  const updateRequestStatus = useCallback(async (requestId, status) => {
    try {
      const updated = await api.updateRequestStatus(requestId, status);
      setRequests(prev => prev.map(r => r._id === requestId ? updated : r));
      return updated;
    } catch (err) {
      console.error('Erreur mise à jour statut:', err);
      throw err;
    }
  }, []);

  const assignProvider = useCallback(async (requestId, providerId, providerName) => {
    try {
      const updated = await api.assignProvider(requestId, providerId, providerName);
      setRequests(prev => prev.map(r => r._id === requestId ? updated : r));
      return updated;
    } catch (err) {
      console.error('Erreur assignation:', err);
      throw err;
    }
  }, []);

  const reassignProvider = useCallback(async (requestId, newProviderId, providerName) => {
    try {
      const updated = await api.reassignProvider(requestId, newProviderId, providerName);
      setRequests(prev => prev.map(r => r._id === requestId ? updated : r));
      return updated;
    } catch (err) {
      console.error('Erreur réassignation:', err);
      throw err;
    }
  }, []);

  const statusLabels = {
    en_attente: 'En attente',
    assignee: 'Assignée',
    validee: 'Validée',
    rejetee: 'Rejetée',
    en_cours: 'En cours',
    terminee: 'Terminée',
    acceptee: 'Acceptée par prestataire',
    refusee: 'Refusée par prestataire',
  };

  const statusColors = {
    en_attente: 'bg-yellow-100 text-yellow-800',
    assignee: 'bg-indigo-100 text-indigo-800',
    validee: 'bg-blue-100 text-blue-800',
    rejetee: 'bg-red-100 text-red-800',
    en_cours: 'bg-purple-100 text-purple-800',
    terminee: 'bg-green-100 text-green-800',
    acceptee: 'bg-teal-100 text-teal-800',
    refusee: 'bg-orange-100 text-orange-800',
  };

  return (
    <AppContext.Provider value={{
      user,
      authLoading,
      registerUser,
      loginUser,
      logout,
      services,
      providers,
      requests,
      loading,
      getServiceById,
      getProviderById,
      getProvidersByService,
      loadRequests,
      loadRequestsByProvider,
      createRequest,
      updateRequestStatus,
      assignProvider,
      reassignProvider,
      statusLabels,
      statusColors,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
