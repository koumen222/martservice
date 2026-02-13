import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import FormContainer from '../components/FormContainer';

const PartnerReferralPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyAddress: '',
    companySize: '',
    industry: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <PageLayout title="Référence envoyée" description="Votre référence a été enregistrée avec succès">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-green-800 mb-3">
              Référence envoyée avec succès !
            </h2>
            <p className="text-green-700 mb-6">
              Votre référence pour {formData.companyName} a été enregistrée. 
              Nous les contacterons prochainement et vous tiendrons informé de l'avancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    companyName: '',
                    contactName: '',
                    contactEmail: '',
                    contactPhone: '',
                    companyAddress: '',
                    companySize: '',
                    industry: '',
                    message: '',
                    consent: false
                  });
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Ajouter une autre référence
              </button>
              <button
                onClick={() => navigate('/partner/dashboard')}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Retour au tableau de bord
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title="Nouvelle Référence" 
      description="Ajoutez une nouvelle entreprise à votre réseau de partenaires"
    >
      <div className="max-w-2xl mx-auto px-4 py-8">
        <FormContainer 
          title="Ajouter une référence"
          subtitle="Remplissez les informations ci-dessous pour recommander une entreprise"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Company Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200">
                Informations sur l'entreprise
              </h3>
              
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Ex: Tech Solutions SA"
                />
              </div>

              <div>
                <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse de l'entreprise
                </label>
                <textarea
                  id="companyAddress"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Adresse complète de l'entreprise"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                    Taille de l'entreprise
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner</option>
                    <option value="1-10">1-10 employés</option>
                    <option value="11-50">11-50 employés</option>
                    <option value="51-200">51-200 employés</option>
                    <option value="201-500">201-500 employés</option>
                    <option value="500+">500+ employés</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Secteur d'activité
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner</option>
                    <option value="technology">Technologie</option>
                    <option value="consulting">Conseil</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Santé</option>
                    <option value="education">Éducation</option>
                    <option value="retail">Commerce</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200">
                Informations du contact
              </h3>
              
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du contact *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Nom complet de la personne à contacter"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email du contact *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="email@entreprise.cm"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone du contact
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+237 6 XX XX XX XX"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message personnel (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Ajoutez un message personnel pour votre référence..."
              />
            </div>

            {/* Commission Info */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-900 mb-2">💰 Commission de parrainage</h4>
              <p className="text-sm text-primary-700">
                Si cette entreprise s'inscrit et devient active sur Mart Business, 
                vous recevrez une commission de 10% sur ses revenus pendant les 6 premiers mois.
              </p>
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-600">
                  Je confirme que j'ai l'autorisation de partager ces informations et que 
                  l'entreprise concernée a donné son consentement pour être contactée par Mart Business.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer la référence'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/partner/dashboard')}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </FormContainer>
      </div>
    </PageLayout>
  );
};

export default PartnerReferralPage;
