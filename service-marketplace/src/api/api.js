const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(url, options = {}) {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders(), ...options.headers },
    ...options,
  });
  if (!res.ok) {
    // Check if response is HTML (likely an error page)
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      throw new Error(`Erreur serveur: ${res.status} - Le serveur retourne une page HTML au lieu de JSON`);
    }
    
    const err = await res.json().catch(() => ({ error: 'Erreur serveur' }));
    throw new Error(err.error || `Erreur ${res.status}`);
  }
  return res.json();
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
