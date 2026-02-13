const API_URL = (import.meta.env.VITE_API_URL || 'https://martservice-production.up.railway.app') + '/api';

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function safeJson(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error('Réponse non JSON :', text);
    throw new Error('Le serveur a renvoyé une réponse invalide');
  }
}

async function request(url, options = {}) {
  const res = await fetch(`${API_URL}${url}`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders(), ...options.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await safeJson(res).catch(() => ({ error: 'Erreur serveur' }));
    throw new Error(err.error || `Erreur ${res.status}`);
  }
  return safeJson(res);
}

// ---- Auth ----
export const register = (data) => request('/auth/register', {
  method: 'POST',
  body: JSON.stringify(data),
});

export const login = (data) => request('/auth/login', {
  method: 'POST',
  body: JSON.stringify(data),
});

export const getMe = () => request('/auth/me');

// ---- Services ----
export const fetchServices = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return request(`/services${query ? `?${query}` : ''}`);
};

export const fetchServiceById = (id) => request(`/services/${id}`);

// ---- Providers ----
export const fetchProviders = () => request('/providers');
export const fetchProviderById = (id) => request(`/providers/${id}`);
export const fetchProvidersByService = (serviceId) => request(`/providers/by-service/${serviceId}`);

// ---- Requests ----
export const fetchRequests = (status) => {
  const query = status && status !== 'tous' ? `?status=${status}` : '';
  return request(`/requests${query}`);
};

export const fetchRequestsByProvider = (providerId, status) => {
  const query = status && status !== 'tous' ? `?status=${status}` : '';
  return request(`/requests/by-provider/${providerId}${query}`);
};

export const createRequest = (data) => request('/requests', {
  method: 'POST',
  body: JSON.stringify(data),
});

export const updateRequestStatus = (id, status) => request(`/requests/${id}/status`, {
  method: 'PUT',
  body: JSON.stringify({ status }),
});

export const assignProvider = (id, providerId, providerName) => request(`/requests/${id}/assign`, {
  method: 'PUT',
  body: JSON.stringify({ providerId, providerName }),
});

export const reassignProvider = (id, providerId, providerName) => request(`/requests/${id}/reassign`, {
  method: 'PUT',
  body: JSON.stringify({ providerId, providerName }),
});
