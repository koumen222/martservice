import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalReferrals: 0,
    activeReferrals: 0,
    pendingPayouts: 0,
    conversionRate: 0,
    monthlyRevenue: []
  });
  const [referrals, setReferrals] = useState([]);
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simuler le chargement des données
  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalRevenue: 2450000,
        totalReferrals: 48,
        activeReferrals: 32,
        pendingPayouts: 325000,
        conversionRate: 67,
        monthlyRevenue: [
          { month: 'Jan', revenue: 180000 },
          { month: 'Fev', revenue: 220000 },
          { month: 'Mar', revenue: 195000 },
          { month: 'Avr', revenue: 280000 },
          { month: 'Mai', revenue: 310000 },
          { month: 'Jun', revenue: 365000 }
        ]
      });

      setReferrals([
        {
          id: 1,
          companyName: 'Tech Solutions SA',
          contactName: 'Jean Pierre',
          email: 'jean@techsolutions.cm',
          status: 'active',
          registrationDate: '15/01/2024',
          revenue: 125000,
          commission: 12500
        },
        {
          id: 2,
          companyName: 'Digital Marketing Pro',
          contactName: 'Marie Claire',
          email: 'marie@dmpro.cm',
          status: 'active',
          registrationDate: '22/01/2024',
          revenue: 98000,
          commission: 9800
        },
        {
          id: 3,
          companyName: 'Services Plus',
          contactName: 'Paul Nkoulou',
          email: 'paul@servicesplus.cm',
          status: 'pending',
          registrationDate: '05/02/2024',
          revenue: 0,
          commission: 0
        },
        {
          id: 4,
          companyName: 'Consulting Group',
          contactName: 'Sophie Martin',
          email: 'sophie@consulting.cm',
          status: 'active',
          registrationDate: '12/02/2024',
          revenue: 156000,
          commission: 15600
        }
      ]);

      setPayouts([
        {
          id: 1,
          month: 'Janvier 2024',
          amount: 125000,
          status: 'paid',
          paymentDate: '05/02/2024',
          reference: 'PAY-2024-01-001'
        },
        {
          id: 2,
          month: 'Février 2024',
          amount: 155000,
          status: 'paid',
          paymentDate: '05/03/2024',
          reference: 'PAY-2024-02-001'
        },
        {
          id: 3,
          month: 'Mars 2024',
          amount: 185000,
          status: 'pending',
          paymentDate: 'Prévu le 05/04/2024',
          reference: 'PAY-2024-03-001'
        }
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Aperçu', icon: 'chart' },
    { id: 'referrals', label: 'Références', icon: 'users' },
    { id: 'payouts', label: 'Paiements', icon: 'money' },
    { id: 'marketing', label: 'Marketing', icon: 'megaphone' },
    { id: 'profile', label: 'Profil', icon: 'user' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <PageLayout title="Espace Partenaire" description="Tableau de bord partenaire">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="animate-spin w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full"></div>
            <span className="ml-3 text-gray-600">Chargement...</span>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title="Espace Partenaire" 
      description="Gérez vos références et suivez vos commissions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">
                Espace Partenaire
              </h1>
              <p className="text-gray-600 mt-1">
                Bienvenue dans votre tableau de bord partenaire
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link
                to="/partner/referral"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                <Icon name="plus" className="w-5 h-5 mr-2" />
                Nouvelle référence
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenu total</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {formatCurrency(stats.totalRevenue)}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                <Icon name="money" className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total références</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalReferrals}</p>
              </div>
              <div className="w-12 h-12 bg-secondary-50 rounded-lg flex items-center justify-center">
                <Icon name="users" className="w-6 h-6 text-secondary-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Références actives</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.activeReferrals}</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Icon name="check" className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Paiements en attente</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {formatCurrency(stats.pendingPayouts)}
                </p>
              </div>
              <div className="w-12 h-12 bg-warning-50 rounded-lg flex items-center justify-center">
                <Icon name="clock" className="w-6 h-6 text-warning-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon name={tab.icon} className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Revenue Chart */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenus mensuels</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-end justify-between h-64">
                      {stats.monthlyRevenue.map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-primary-500 rounded-t-lg transition-all duration-500 hover:bg-primary-600"
                            style={{ 
                              height: `${(item.revenue / Math.max(...stats.monthlyRevenue.map(r => r.revenue))) * 100}%`,
                              minHeight: '20px'
                            }}
                          ></div>
                          <span className="text-xs text-gray-600 mt-2">{item.month}</span>
                          <span className="text-xs text-gray-500">
                            {(item.revenue / 1000).toFixed(0)}k
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Referrals */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Références récentes</h3>
                    <button 
                      onClick={() => setActiveTab('referrals')}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Voir tout →
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Entreprise
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Statut
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Revenu
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {referrals.slice(0, 3).map((referral) => (
                          <tr key={referral.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{referral.companyName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{referral.contactName}</div>
                              <div className="text-sm text-gray-500">{referral.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                referral.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {referral.status === 'active' ? 'Actif' : 'En attente'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {formatCurrency(referral.revenue)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'referrals' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Toutes vos références</h3>
                  <div className="flex items-center space-x-3">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Tous les statuts</option>
                      <option>Actifs</option>
                      <option>En attente</option>
                    </select>
                    <Link
                      to="/partner/referral"
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      Ajouter une référence
                    </Link>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Entreprise
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date d'inscription
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Revenu
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Commission
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {referrals.map((referral) => (
                        <tr key={referral.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{referral.companyName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{referral.contactName}</div>
                            <div className="text-sm text-gray-500">{referral.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {referral.registrationDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              referral.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {referral.status === 'active' ? 'Actif' : 'En attente'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatCurrency(referral.revenue)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatCurrency(referral.commission)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-primary-600 hover:text-primary-900 mr-3">
                              Contacter
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              Détails
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'payouts' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Historique des paiements</h3>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                    Demander un paiement
                  </button>
                </div>

                <div className="space-y-4">
                  {payouts.map((payout) => (
                    <div key={payout.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{payout.month}</h4>
                          <p className="text-sm text-gray-500 mt-1">Référence: {payout.reference}</p>
                          <p className="text-sm text-gray-500">Date: {payout.paymentDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(payout.amount)}
                          </p>
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            payout.status === 'paid' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {payout.status === 'paid' ? 'Payé' : 'En attente'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'marketing' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Outils de marketing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-medium text-gray-900 mb-2">Lien de parrainage</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Partagez ce lien pour gagner des commissions
                      </p>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value="https://martbusiness.cm/ref/PARTNER123"
                          readOnly
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
                        />
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                          Copier
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-medium text-gray-900 mb-2">Matériels marketing</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Téléchargez nos bannières et supports
                      </p>
                      <button className="bg-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary-700 transition-colors">
                        Télécharger
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance de vos liens</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <p className="text-3xl font-bold text-primary-600">1,247</p>
                      <p className="text-sm text-gray-600 mt-1">Clics totaux</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <p className="text-3xl font-bold text-secondary-600">{stats.conversionRate}%</p>
                      <p className="text-sm text-gray-600 mt-1">Taux de conversion</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <p className="text-3xl font-bold text-accent-600">{stats.totalReferrals}</p>
                      <p className="text-sm text-gray-600 mt-1">Inscriptions</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations du partenaire</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l'entreprise
                    </label>
                    <input
                      type="text"
                      defaultValue="Partner Solutions Ltd"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="partner@company.cm"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+237 6 00 00 00 00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse
                    </label>
                    <textarea
                      rows="3"
                      defaultValue="Douala, Cameroun"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PartnerDashboard;
