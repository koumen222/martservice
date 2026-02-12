import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import FormContainer from '../components/FormContainer';
import Icon from '../components/Icon';

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
    <PageLayout 
      title="Devenir Prestataire" 
      description="Rejoignez la communauté de prestataires Mart Business et développez votre activité"
    >
      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-center text-primary-900 mb-12">Pourquoi rejoindre Mart Business ?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-500">
            <Icon name="globe" className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visibilité Maximale</h3>
            <p className="text-gray-600">Accédez à des milliers de clients potentiels à travers tout le Cameroun</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-secondary-500">
            <Icon name="money" className="w-12 h-12 text-secondary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Revenus Garantis</h3>
            <p className="text-gray-600">Paiements sécurisés et rapides pour tous vos services en XAF</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-500">
            <Icon name="growth" className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Croissance Rapide</h3>
            <p className="text-gray-600">Développez votre activité avec nos outils de gestion</p>
          </div>
        </div>

        {/* Registration Form */}
        <FormContainer 
          title="Formulaire d'inscription" 
          subtitle="Devenez prestataire Mart Business"
          maxWidth="2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+237 6 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie de service *
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="design">Design Graphique</option>
                  <option value="dev">Développement Web</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="consulting">Consulting Business</option>
                  <option value="formation">Formation Professionnelle</option>
                  <option value="juridique">Services Juridiques</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Années d'expérience *
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez</option>
                  <option value="0-1">Moins d'1 an</option>
                  <option value="1-3">1 à 3 ans</option>
                  <option value="3-5">3 à 5 ans</option>
                  <option value="5+">Plus de 5 ans</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio / Site web
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://votre-portfolio.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description de vos services *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
              className="w-full bg-secondary-500 text-white py-3 px-4 rounded-md font-medium hover:bg-secondary-600 transition-colors"
            >
              <Icon name="rocket" className="w-4 h-4 mr-2" /> Soumettre ma candidature
            </button>
          </form>
        </FormContainer>

        {/* Process Steps */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-center text-primary-900 mb-12">Comment ça marche ?</h2>
          
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
    </PageLayout>
  );
};

export default BecomeProviderPage;
