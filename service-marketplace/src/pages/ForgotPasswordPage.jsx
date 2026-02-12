import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import FormContainer from '../components/FormContainer';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'envoi d'email
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <PageLayout 
        title="Email envoyé!" 
        description="Instructions de réinitialisation envoyées"
      >
        <FormContainer maxWidth="sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">
              Email envoyé!
            </h2>
            
            <p className="text-gray-600 mb-8">
              Nous avons envoyé des instructions de réinitialisation à votre adresse email. 
              Vérifiez votre boîte de réception et suivez les étapes.
            </p>
            
            <div className="space-y-4">
              <Link
                to="/login"
                className="block w-full bg-secondary-500 text-white py-3 px-4 rounded-md font-medium hover:bg-secondary-600 transition-colors text-center"
              >
                Retour à la connexion
              </Link>
              
              <button
                onClick={() => setIsSubmitted(false)}
                className="block w-full text-primary-600 hover:text-primary-500 font-medium"
              >
                Renvoyer l'email
              </button>
            </div>
          </div>
        </FormContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title="Mot de passe oublié" 
      description="Réinitialisez votre mot de passe Mart Business"
    >
      <FormContainer 
        title="Mot de passe oublié"
        subtitle="Entrez votre email pour recevoir les instructions de réinitialisation"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-secondary-500 text-white py-3 px-4 rounded-md font-medium hover:bg-secondary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Envoi en cours...' : 'Envoyer les instructions'}
          </button>
        </form>

        {/* Back to login */}
        <div className="mt-6 text-center">
          <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
            Retour à la connexion
          </Link>
        </div>
      </FormContainer>
    </PageLayout>
  );
};

export default ForgotPasswordPage;
