import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import FormContainer from '../components/FormContainer';
import Icon from '../components/Icon';

const BecomeProviderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    city: '',
    category: '',
    experience: '',
    description: '',
    portfolio: '',
    linkedin: '',
    certifications: '',
    disponibility: '',
    tarifHoraire: '',
    langue: '',
    references: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const steps = [
    { id: 1, title: "Informations personnelles", description: "Vos coordonnées de base" },
    { id: 2, title: "Profil professionnel", description: "Votre expertise et expérience" },
    { id: 3, title: "Services et tarifs", description: "Détails de vos prestations" },
    { id: 4, title: "Documents et finalisation", description: "Portfolio et validation" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/providers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          whatsapp: '',
          city: '',
          category: '',
          experience: '',
          description: '',
          portfolio: '',
          linkedin: '',
          certifications: '',
          disponibility: '',
          tarifHoraire: '',
          langue: '',
          references: ''
        });
      } else {
        setSubmitStatus('error');
        alert('Erreur: ' + (data.error || 'Une erreur est survenue'));
      }
    } catch (err) {
      setSubmitStatus('error');
      alert('Erreur de connexion au serveur. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const validateStep = (step) => {
    switch(step) {
      case 1:
        return formData.fullName && formData.email && formData.phone;
      case 2:
        return formData.category && formData.experience && formData.description;
      case 3:
        return formData.disponibility; // Seule la disponibilité est requise
      case 4:
        return true; // Tous les champs sont facultatifs à cette étape
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Informations personnelles</h3>
            
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
                  Email professionnel *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="email@exemple.com"
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
                  placeholder="+237 6XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp (facultatif)
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+237 6XX XXX XXX"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Votre ville"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Profil professionnel</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie de services *
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="design">Design</option>
                  <option value="developpement">Développement</option>
                  <option value="marketing">Marketing</option>
                  <option value="redaction">Rédaction</option>
                  <option value="consulting">Consulting</option>
                  <option value="photographie">Photographie</option>
                  <option value="video">Vidéo</option>
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
                  <option value="1-3">1-3 ans</option>
                  <option value="3-5">3-5 ans</option>
                  <option value="5-10">5-10 ans</option>
                  <option value="10+">Plus de 10 ans</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description de vos services *
                </label>
                <textarea
                  name="description"
                  required
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Décrivez vos services, votre expertise et ce qui vous distingue..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Langues parlées (facultatif)
                </label>
                <input
                  type="text"
                  name="langue"
                  value={formData.langue}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Français, Anglais, etc."
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Services et tarifs</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Disponibilité *
                </label>
                <select
                  name="disponibility"
                  required
                  value={formData.disponibility}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez</option>
                  <option value="plein-temps">Plein temps</option>
                  <option value="partiel">Temps partiel</option>
                  <option value="weekend">Week-end</option>
                  <option value="soir">Soirs uniquement</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarif horaire (XAF) (facultatif)
                </label>
                <input
                  type="number"
                  name="tarifHoraire"
                  value={formData.tarifHoraire}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="5000"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Références clients (facultatif)
                </label>
                <textarea
                  name="references"
                  rows="3"
                  value={formData.references}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Noms de clients ou projets réalisés..."
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Documents et finalisation</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio (facultatif)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://votreportfolio.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profil LinkedIn (facultatif)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/votreprofil"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certifications (facultatif)
                </label>
                <textarea
                  name="certifications"
                  rows="3"
                  value={formData.certifications}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Vos certifications et diplômes pertinents..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Récapitulatif de votre candidature</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p><strong>Nom:</strong> {formData.fullName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Catégorie:</strong> {formData.category}</p>
                  <p><strong>Tarif:</strong> {formData.tarifHoraire ? `${formData.tarifHoraire} XAF/heure` : 'Non spécifié'}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout 
      title="Devenir Prestataire" 
      description="Rejoignez Mart Business et développez votre activité"
    >
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left Column - Benefits Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Pourquoi rejoindre Mart Business ?</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-500">
                <Icon name="globe" className="w-6 h-6 text-primary-600 mb-2" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visibilité Maximale</h3>
                <p className="text-gray-600 text-sm mb-3">Accédez à des milliers de clients potentiels à travers tout le Cameroun</p>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Profil personnel optimisé
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Notation et avis clients
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mise en avant des meilleurs
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary-500">
                <Icon name="money" className="w-6 h-6 text-secondary-600 mb-2" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Revenus Garantis</h3>
                <p className="text-gray-600 text-sm mb-3">Paiements sécurisés et rapides pour tous vos services en XAF</p>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Paiement sécurisé Orange Money
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Retrait rapide 24-48h
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Commission transparente 10%
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-500">
                <Icon name="growth" className="w-6 h-6 text-primary-600 mb-2" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Croissance Rapide</h3>
                <p className="text-gray-600 text-sm mb-3">Développez votre activité avec nos outils de gestion</p>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tableau de bord personnel
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Statistiques détaillées
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Support client dédié
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column - Registration Form */}
          <div className="lg:col-span-3">
            <FormContainer 
              title="Formulaire d'inscription" 
              subtitle="Devenez prestataire Mart Business"
              maxWidth="full"
            >
              {/* Progress Steps */}
              <div className="mb-8">
                {/* Mobile: Vertical layout */}
                <div className="lg:hidden space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors flex-shrink-0 ${
                          currentStep === step.id
                            ? 'bg-primary-600 text-white'
                            : currentStep > step.id
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {currentStep > step.id ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          step.id
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className={`text-sm font-medium ${
                          currentStep === step.id ? 'text-primary-600' : 'text-gray-600'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: Horizontal layout */}
                <div className="hidden lg:flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                            currentStep === step.id
                              ? 'bg-primary-600 text-white'
                              : currentStep > step.id
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {currentStep > step.id ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            step.id
                          )}
                        </div>
                        <div className="mt-2 text-center">
                          <p className={`text-xs font-medium ${
                            currentStep === step.id ? 'text-primary-600' : 'text-gray-600'
                          }`}>
                            {step.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 max-w-20">{step.description}</p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 mx-2 mt-5 ${
                          currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={currentStep === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Précédent
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="submit"
                      disabled={!validateStep(currentStep)}
                      className={`px-6 py-2 rounded-md font-medium transition-colors ${
                        validateStep(currentStep)
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-secondary-500 text-white px-6 py-2 rounded-md font-medium hover:bg-secondary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Icon name="rocket" className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Envoi en cours...' : 'Soumettre ma candidature'}
                    </button>
                  )}
                </div>
              </form>
            </FormContainer>
          </div>
        </div>
      </div>

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
            <h3 className="font-bold text-lg mb-2">Publication</h3>
            <p className="text-gray-600 text-sm">Votre profil est visible par les clients</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="font-bold text-lg mb-2">Commencez !</h3>
            <p className="text-gray-600 text-sm">Recevez vos premières missions</p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 z-50" onClick={() => setShowSuccessModal(false)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 lg:p-12 text-center shadow-2xl transform transition-all relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Success Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 shadow-xl">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            {/* Content */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Candidature envoyée avec succès !</h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto">
              Merci pour votre intérêt pour rejoindre Mart Business. Votre candidature a été soumise et sera examinée par notre équipe d'experts sous 48h.
            </p>
            
            {/* Info Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-10">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg sm:text-xl font-bold text-blue-900">Prochaines étapes</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-blue-800 leading-relaxed">
                Vous recevrez un email de confirmation dans les prochaines heures, puis un suivi une fois votre profil validé.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  window.location.href = '/';
                }}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 rounded-2xl text-sm sm:text-base lg:text-lg font-bold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Retour à l'accueil
              </button>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  window.location.href = '/services';
                }}
                className="w-full bg-gray-50 text-gray-700 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 rounded-2xl text-sm sm:text-base lg:text-lg font-bold hover:bg-gray-100 transition-all duration-200 border border-gray-200"
              >
                Explorer les services
              </button>
            </div>
            
            {/* Footer Text */}
            <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 lg:mt-8">
              Questions ? Contactez-nous à <a href="mailto:contact@martbusiness.com" className="text-primary-600 hover:underline">contact@martbusiness.com</a>
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default BecomeProviderPage;
