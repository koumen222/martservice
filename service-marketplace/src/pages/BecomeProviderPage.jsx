import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const BecomeProviderPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    category: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/providers/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', city: '', category: '', description: '' });
      } else {
        alert('Erreur: ' + (data.error || 'Une erreur est survenue'));
      }
    } catch (err) {
      alert('Erreur de connexion au serveur. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <PageLayout>
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-8">
          <div className="max-w-lg w-full text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Candidature envoyée !</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              Merci pour votre intérêt. Notre équipe examinera votre candidature et vous contactera sous 48h.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-left">
              <p className="text-sm text-blue-800">
                <strong>Prochaine étape :</strong> Vous recevrez un email de confirmation, puis un suivi une fois votre profil validé.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/" className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-colors text-center">
                Retour à l'accueil
              </Link>
              <Link to="/services" className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-center">
                Voir les services
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Message d'introduction */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Devenez prestataire Mart Business
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            Rejoignez notre réseau d'experts et accédez à des milliers de clients au Cameroun. 
            Remplissez le formulaire ci-dessous et notre équipe vous contactera sous 48h.
          </p>
        </div>

        {/* Avantages rapides */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3 sm:p-4">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-green-800">Inscription gratuite</span>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-3 sm:p-4">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Paiements sécurisés</span>
          </div>
          <div className="flex items-center gap-3 bg-purple-50 rounded-xl p-3 sm:p-4">
            <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-purple-800">Support 24/7</span>
          </div>
        </div>

        {/* Formulaire simple */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Vos informations</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="email@exemple.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="+237 6XX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Ville *</label>
                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Douala">Douala</option>
                  <option value="Yaoundé">Yaoundé</option>
                  <option value="Bafoussam">Bafoussam</option>
                  <option value="Bamenda">Bamenda</option>
                  <option value="Garoua">Garoua</option>
                  <option value="Maroua">Maroua</option>
                  <option value="Kribi">Kribi</option>
                  <option value="Limbe">Limbe</option>
                  <option value="Buea">Buea</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Catégorie de services *</label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
              >
                <option value="">Sélectionnez une catégorie</option>
                <option value="design">Design & Création</option>
                <option value="developpement">Développement Web/Mobile</option>
                <option value="marketing">Marketing Digital</option>
                <option value="redaction">Rédaction & Contenu</option>
                <option value="consulting">Consulting & Stratégie</option>
                <option value="photographie">Photographie & Vidéo</option>
                <option value="formation">Formation</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Décrivez vos services *</label>
              <textarea
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-sm sm:text-base"
                placeholder="Décrivez brièvement vos services, votre expérience et ce qui vous distingue..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white py-3.5 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base hover:bg-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              En soumettant ce formulaire, vous acceptez nos{' '}
              <Link to="/cgu" className="text-primary-600 hover:underline">conditions d'utilisation</Link>.
            </p>
          </form>
        </div>

        {/* Contact */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-sm text-gray-500">
            Des questions ? Contactez-nous à{' '}
            <a href="mailto:contact@martbusiness.com" className="text-primary-600 hover:underline font-medium">
              contact@martbusiness.com
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default BecomeProviderPage;
