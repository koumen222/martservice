import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/PageLayout';
import FormContainer from '../components/FormContainer';

const ProfilePage = () => {
  const { user, authLoading } = useApp();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editMode, setEditMode] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  if (authLoading || !user) {
    return (
      <PageLayout title="Chargement..." description="">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="animate-spin w-10 h-10 border-4 border-primary-200 border-t-primary-900 rounded-full mx-auto"></div>
          <p className="text-gray-500 mt-4">Chargement...</p>
        </div>
      </PageLayout>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // TODO: Implémenter la mise à jour du profil dans l'API
      // await updateProfile(formData);
      setSuccess('Profil mis à jour avec succès');
      setEditMode(false);
    } catch (err) {
      setError(err.message || 'Erreur lors de la mise à jour du profil');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
    });
    setError('');
    setSuccess('');
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'client': return 'Client';
      case 'provider': return 'Prestataire';
      case 'admin': return 'Administrateur';
      default: return role;
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'client': return 'bg-blue-100 text-blue-800';
      case 'provider': return 'bg-green-100 text-green-800';
      case 'admin': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <PageLayout 
      title="Mon Profil" 
      description="Gérez vos informations personnelles"
    >
      <FormContainer 
        title="Mon Profil" 
        subtitle={editMode ? "Modifiez vos informations" : "Vos informations personnelles"}
        maxWidth="lg"
      >
        {/* Success/Error messages */}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm mb-6">
            {success}
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-6">
            {error}
          </div>
        )}

        {/* Role badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {user.firstName} {user.lastName}
              </h3>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                {getRoleLabel(user.role)}
              </span>
            </div>
          </div>
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="bg-primary-600 text-white px-4 py-2 text-sm font-medium hover:bg-primary-700 rounded-md transition-colors"
            >
              Modifier
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!editMode}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Jean"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!editMode}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="Dupont"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editMode}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="votre@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="+237 6XX XXX XXX"
            />
          </div>

          {/* Account info */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Informations du compte</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Type de compte :</span>
                <span className="font-medium text-gray-900">{getRoleLabel(user.role)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Statut :</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">Actif</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Membre depuis :</span>
                <span className="font-medium text-gray-900">
                  {new Date(user.createdAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          {editMode && (
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enregistrement...' : 'Enregistrer les modifications'}
              </button>
            </div>
          )}
        </form>

        {/* Additional actions for non-edit mode */}
        {!editMode && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setEditMode(true)}
                className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Modifier mes informations
              </button>
              {user.role === 'provider' && (
                <button
                  onClick={() => navigate('/become-provider')}
                  className="flex-1 bg-secondary-500 text-white py-3 px-4 rounded-md font-medium hover:bg-secondary-600 transition-colors"
                >
                  Gérer mon profil de prestataire
                </button>
              )}
            </div>
          </div>
        )}
      </FormContainer>
    </PageLayout>
  );
};

export default ProfilePage;
