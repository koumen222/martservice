import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const RequestServicePage = () => {
  const { serviceId } = useParams();
  const { services, loading, createRequest } = useApp();

  const service = services.find(s => s._id === serviceId);

  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    clientCity: '',
    description: '',
    preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (loading) {
    return (
      <PageLayout title="Chargement..." description="">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="animate-spin w-10 h-10 border-4 border-primary-200 border-t-primary-900 rounded-full mx-auto"></div>
          <p className="text-gray-500 mt-4">Chargement...</p>
        </div>
      </PageLayout>
    );
  }

  if (!service) {
    return (
      <PageLayout title="Erreur" description="Service introuvable.">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-gray-600 mb-6">Le service demandé n'a pas été trouvé.</p>
          <Link to="/services" className="bg-primary-900 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition-colors">
            Retour aux services
          </Link>
        </div>
      </PageLayout>
    );
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const newRequest = await createRequest({
        serviceId: service._id,
        serviceTitle: service.title,
        ...formData,
      });
      setRequestId(newRequest._id);
      setSubmitted(true);
    } catch (err) {
      alert('Erreur lors de l\'envoi de la demande. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <PageLayout title="Demande envoyée" description="Votre demande a été enregistrée avec succès">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-green-800 mb-3">Demande envoyée avec succès !</h2>
            <p className="text-green-700 mb-2">Notre équipe va analyser votre besoin et vous trouver le meilleur prestataire.</p>
            <p className="text-sm text-green-600 mb-6">Référence : <span className="font-mono font-bold">#{requestId?.toString().slice(-6).toUpperCase()}</span></p>

            <div className="bg-white rounded-xl p-5 text-left space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Service :</span>
                <span className="font-medium text-gray-900">{service.title}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Prestataire :</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-medium">Assignation en cours par notre équipe</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Statut :</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">En attente de traitement</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Comment ça marche ?</strong> Notre équipe examine votre demande et sélectionne le prestataire le plus adapté à votre besoin. Vous serez contacté au <strong>{formData.clientPhone}</strong> dès qu'un prestataire vous sera assigné.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-primary-900 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition-colors font-medium">
              Voir d'autres services
            </Link>
            <Link to="/" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Demander un service" description={`${service.title} — Décrivez votre besoin, nous trouvons le prestataire pour vous`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Service Card */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Icon name={service.icon} className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Service demandé</p>
              <p className="font-serif font-bold text-primary-900 text-lg">{service.title}</p>
            </div>
          </div>
          <p className="text-sm text-primary-700 mt-2">{service.description}</p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-5 mb-8 flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-indigo-900 mb-1">Comment ça marche ?</p>
            <p className="text-sm text-indigo-700">Remplissez le formulaire ci-dessous avec votre besoin. Notre équipe sélectionnera le meilleur prestataire pour vous et vous contactera rapidement.</p>
          </div>
        </div>

        {/* Request Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-serif font-bold text-primary-900 mb-6">Décrivez votre besoin</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet *</label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Jean Kamga"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone *</label>
                <input
                  type="tel"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  required
                  placeholder="+237 6XX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Ville *</label>
                <select
                  name="clientCity"
                  value={formData.clientCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900 transition-colors"
                >
                  <option value="">Sélectionnez votre ville</option>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date souhaitée *</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Description du besoin *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Décrivez votre projet en détail : ce que vous attendez, vos contraintes, votre budget estimé..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-secondary-500 text-white py-3 px-6 rounded-md font-medium hover:bg-secondary-600 transition-colors text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Envoi en cours...' : 'Soumettre ma demande'}
              </button>
              <Link
                to="/services"
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition-colors text-center"
              >
                Retour aux services
              </Link>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default RequestServicePage;
