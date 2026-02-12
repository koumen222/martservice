import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import FormContainer from '../components/FormContainer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'client'
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'inscription
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <PageLayout 
      title="Inscription" 
      description="Créez votre compte Mart Business et accédez à nos services"
    >
      <FormContainer 
        title="Inscription" 
        subtitle="Rejoignez la communauté Mart Business"
        maxWidth="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Je suis un
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="relative">
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={formData.userType === 'client'}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-full text-center py-2 px-4 border-2 rounded-md cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 peer-checked:text-primary-700 border-gray-300 hover:border-gray-400">
                  Client
                </div>
              </label>
              <label className="relative">
                <input
                  type="radio"
                  name="userType"
                  value="provider"
                  checked={formData.userType === 'provider'}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-full text-center py-2 px-4 border-2 rounded-md cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 peer-checked:text-primary-700 border-gray-300 hover:border-gray-400">
                  Prestataire
                </div>
              </label>
            </div>
          </div>

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
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength="8"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              J'accepte les{' '}
              <Link to="/cgu" className="text-primary-600 hover:text-primary-500">
                conditions générales d'utilisation
              </Link>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-secondary-500 text-white py-3 px-4 rounded-md font-medium hover:bg-secondary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Inscription en cours...' : "S'inscrire"}
          </button>
        </form>

        {/* Login link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Déjà un compte?{' '}
            <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
              Se connecter
            </Link>
          </p>
        </div>
      </FormContainer>
    </PageLayout>
  );
};

export default RegisterPage;
