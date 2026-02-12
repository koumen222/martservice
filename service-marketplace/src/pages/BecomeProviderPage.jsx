import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BecomeProviderPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    experience: '',
    description: '',
    portfolio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre inscription ! Nous vous contactons sous 48h.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Devenez Prestataire</h1>
          <p className="text-2xl text-secondary-100 mb-8">Développez votre activité avec ServiceHub Africa</p>
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-secondary-200">Prestataires actifs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-secondary-200">Clients potentiels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-secondary-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Pourquoi rejoindre ServiceHub Africa ?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-500">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visibilité Maximale</h3>
            <p className="text-gray-600">Accédez à des milliers de clients potentiels à travers toute l'Afrique</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-secondary-500">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Revenus Garantis</h3>
            <p className="text-gray-600">Paiements sécurisés et rapides pour tous vos services</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-500">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Croissance Rapide</h3>
            <p className="text-gray-600">Développez votre activité avec nos outils de gestion</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-primary-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Formulaire d'inscription</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="+225 XX XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Catégorie de service *
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="design">Design & Création</option>
                  <option value="dev">Développement Web/Mobile</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="redaction">Rédaction & Contenu</option>
                  <option value="domestique">Services Domestiques</option>
                  <option value="batiment">Bâtiment & Construction</option>
                  <option value="transport">Transport & Logistique</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Années d'expérience *
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez</option>
                  <option value="0-1">Moins d'1 an</option>
                  <option value="1-3">1 à 3 ans</option>
                  <option value="3-5">3 à 5 ans</option>
                  <option value="5+">Plus de 5 ans</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Portfolio / Site web
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="https://votre-portfolio.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description de vos services *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="Décrivez vos compétences, vos services et ce qui vous distingue..."
              ></textarea>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
              <p className="text-sm text-primary-800">
                <strong>Note :</strong> Votre candidature sera examinée sous 48h. Nous vous contacterons par email pour finaliser votre inscription.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-secondary-700 hover:to-secondary-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              🚀 Soumettre ma candidature
            </button>
          </form>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Comment ça marche ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Inscription</h3>
              <p className="text-gray-600 text-sm">Remplissez le formulaire ci-dessus</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Validation</h3>
              <p className="text-gray-600 text-sm">Nous vérifions votre profil sous 48h</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Activation</h3>
              <p className="text-gray-600 text-sm">Créez votre profil complet</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg mb-2">Commencez !</h3>
              <p className="text-gray-600 text-sm">Recevez vos premières missions</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BecomeProviderPage;
