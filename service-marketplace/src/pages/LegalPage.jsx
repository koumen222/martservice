import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const LegalPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('mentions');

  const getTabInfo = () => {
    const path = location.pathname;
    if (path.includes('politique-confidentialite')) return 'privacy';
    if (path.includes('cgu')) return 'cgu';
    return 'mentions';
  };

  useEffect(() => {
    setActiveTab(getTabInfo());
  }, [location.pathname]);

  const tabs = [
    { id: 'mentions', label: 'Mentions Légales', path: '/mentions-legales' },
    { id: 'privacy', label: 'Politique de Confidentialité', path: '/politique-confidentialite' },
    { id: 'cgu', label: 'Conditions Générales', path: '/cgu' },
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-primary max-w-none">
          {activeTab === 'mentions' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Mentions Légales
              </h1>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Éditeur</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="mb-2"><strong>Mart Business</strong></p>
                  <p className="mb-2">SARL au capital de 1 000 000 FCFA</p>
                  <p className="mb-2">RC : DOU-2023-B-1234</p>
                  <p className="mb-2">NIF : 123456789012345</p>
                  <p className="mb-2">Siège social : Douala, Bonanjo, Immeuble Horizon</p>
                  <p className="mb-2">Email : contact@martbusiness.cm</p>
                  <p>Téléphone : +237 6 00 00 00 00</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Directeur de la publication</h2>
                <p className="text-gray-600">
                  Monsieur Jean Dupont, gérant de la société Mart Business
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Hébergeur</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="mb-2"><strong>Cloudflare, Inc.</strong></p>
                  <p className="mb-2">101 Townsend Street</p>
                  <p className="mb-2">San Francisco, CA 94107</p>
                  <p className="mb-2">États-Unis</p>
                  <p>Email : abuse@cloudflare.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Propriété intellectuelle</h2>
                <p className="text-gray-600 mb-3">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                </p>
                <p className="text-gray-600">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
                <p className="text-gray-600 mb-3">
                  L'utilisation du site www.martbusiness.cm entraure le placement de cookies sur votre terminal. 
                  Les cookies sont des petits fichiers texte déposés sur votre terminal lors de la visite d'un site.
                </p>
                <p className="text-gray-600">
                  Vous pouvez vous opposer à l'enregistrement de cookies en configurant votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Données personnelles</h2>
                <p className="text-gray-600">
                  Conformément au RGPD, vous disposez d'un droit d'accès, de modification et de suppression 
                  de vos données personnelles. Pour exercer ce droit, contactez-nous à l'adresse : 
                  privacy@martbusiness.cm
                </p>
              </section>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Politique de Confidentialité
              </h1>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
                <p className="text-gray-600">
                  Mart Business s'engage à protéger la vie privée de ses utilisateurs. Cette politique 
                  décrit comment nous collectons, utilisons et protégeons vos données personnelles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Données collectées</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">Données d'inscription :</h3>
                    <p className="text-gray-600">Nom, prénom, email, téléphone, mot de passe, type de compte</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Données de profil :</h3>
                    <p className="text-gray-600">Photo de profil, description professionnelle, compétences, portfolio</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Données d'utilisation :</h3>
                    <p className="text-gray-600">Adresse IP, type de navigateur, pages visitées, durée de visite</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Données de paiement :</h3>
                    <p className="text-gray-600">Coordonnées bancaires (traitées par nos partenaires sécurisés)</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Utilisation des données</h2>
                <p className="text-gray-600 mb-3">Vos données sont utilisées pour :</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Gérer votre compte et vous fournir nos services</li>
                  <li>Faciliter la mise en relation entre clients et prestataires</li>
                  <li>Améliorer nos services et personnaliser votre expérience</li>
                  <li>Communiquer avec vous concernant votre compte</li>
                  <li>Assurer la sécurité et la prévention des fraudes</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Partage des données</h2>
                <p className="text-gray-600 mb-3">
                  Nous ne vendons pas vos données personnelles. Nous ne les partageons que dans les cas suivants :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Avec les prestataires concernés par une demande de service</li>
                  <li>Avec nos partenaires techniques (hébergeur, paiement)</li>
                  <li>En cas d'obligation légale ou judiciaire</li>
                  <li>Avec votre consentement explicite</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Sécurité des données</h2>
                <p className="text-gray-600">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
                  appropriées pour protéger vos données contre l'accès non autorisé, la modification, 
                  la divulgation ou la destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Vos droits</h2>
                <p className="text-gray-600 mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Droit d'accès :</strong> Consulter vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                  <li><strong>Droit de suppression :</strong> Demander la suppression de vos données</li>
                  <li><strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
                  <li><strong>Droit de portabilité :</strong> Recevoir vos données dans un format lisible</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Pour exercer ces droits, contactez-nous à : privacy@martbusiness.cm
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Durée de conservation</h2>
                <p className="text-gray-600">
                  Vos données sont conservées le temps nécessaire à la fourniture des services 
                  et conformément aux obligations légales. Les données des comptes inactifs 
                  depuis plus de 2 ans sont automatiquement supprimées.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'cgu' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Conditions Générales d'Utilisation
              </h1>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Objet</h2>
                <p className="text-gray-600">
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation 
                  de la plateforme Mart Business et des services associés.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Acceptation des CGU</h2>
                <p className="text-gray-600">
                  L'utilisation de la plateforme Mart Business implique l'acceptation pleine et entière 
                  des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser 
                  notre service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Inscription et compte</h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Pour utiliser certains services, vous devez créer un compte en fournissant des 
                    informations exactes et complètes.
                  </p>
                  <p className="text-gray-600">
                    Vous êtes responsable de la confidentialité de vos identifiants de connexion 
                    et de toute activité réalisée depuis votre compte.
                  </p>
                  <p className="text-gray-600">
                    Mart Business se réserve le droit de suspendre ou de supprimer tout compte 
                    en cas de violation des présentes CGU.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Services proposés</h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Mart Business est une plateforme de mise en relation entre clients et prestataires 
                    de services au Cameroun.
                  </p>
                  <p className="text-gray-600">
                    La plateforme permet aux clients de publier des demandes de services et aux 
                    prestataires d'y répondre.
                  </p>
                  <p className="text-gray-600">
                    Mart Business n'est pas partie aux contrats conclus entre clients et prestataires.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Obligations des utilisateurs</h2>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Pour les clients :</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Fournir des informations précises sur les demandes de service</li>
                    <li>Payer les services conformément aux conditions convenues</li>
                    <li>Respecter les prestataires et leur travail</li>
                    <li>Ne pas publier de demandes illégales ou contraires à l'ordre public</li>
                  </ul>
                  
                  <h3 className="font-semibold text-gray-800">Pour les prestataires :</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Fournir des informations exactes sur leurs compétences et qualifications</li>
                    <li>Réaliser les services avec professionnalisme et diligence</li>
                    <li>Respecter les délais et conditions convenus avec le client</li>
                    <li>Disposer des autorisations et qualifications nécessaires</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Tarifs et paiement</h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    L'inscription sur la plateforme est gratuite.
                  </p>
                  <p className="text-gray-600">
                    Mart Business perçoit une commission de 10% sur le montant de chaque transaction 
                    réussie entre client et prestataire.
                  </p>
                  <p className="text-gray-600">
                    Les paiements sont sécurisés et traités par nos partenaires agréés.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Propriété intellectuelle</h2>
                <p className="text-gray-600">
                  Le contenu de la plateforme (textes, images, logos, etc.) est protégé par le droit 
                  d'auteur et appartient à Mart Business ou à ses partenaires.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Responsabilité</h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Mart Business s'efforce de fournir une plateforme fiable mais ne garantit pas 
                    une disponibilité continue et sans interruption.
                  </p>
                  <p className="text-gray-600">
                    Mart Business n'est pas responsable des relations contractuelles entre 
                    clients et prestataires.
                  </p>
                  <p className="text-gray-600">
                    La responsabilité de Mart Business est limitée au montant des commissions 
                    perçues sur la transaction concernée.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Litiges</h2>
                <p className="text-gray-600">
                  En cas de litige, les parties s'engagent à rechercher une solution amiable. 
                  À défaut, les tribunaux de Douala seront seuls compétents.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Modification des CGU</h2>
                <p className="text-gray-600">
                  Mart Business se réserve le droit de modifier ces CGU à tout moment. 
                  Les modifications seront notifiées aux utilisateurs et prendront effet 
                  dès leur publication sur la plateforme.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
          <p className="text-gray-600 mb-2">
            Pour toute question concernant ces mentions légales, notre politique de confidentialité 
            ou nos conditions générales :
          </p>
          <p className="text-gray-600">
            Email : legal@martbusiness.cm<br />
            Téléphone : +237 6 00 00 00 00
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default LegalPage;
