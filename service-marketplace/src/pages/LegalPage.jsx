import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const LegalPage = () => {
  const { page } = useParams();

  const legalContent = {
    'mentions-legales': {
      title: 'Mentions Légales',
      description: 'Informations légales de Mart Business Cameroun',
      content: `
        <h2 class="text-2xl font-bold mb-4">Éditeur du site</h2>
        <p class="mb-4">
          Mart Business<br>
          Siège social : Douala, Cameroun<br>
          Email : contact@martbusiness.cm<br>
          Téléphone : +237 6 00 00 00 00
        </p>

        <h2 class="text-2xl font-bold mb-4">Hébergement</h2>
        <p class="mb-4">
          Ce site est hébergé par Cloudflare Pages<br>
          101 Townsend Street<br>
          San Francisco, CA 94103<br>
          États-Unis
        </p>

        <h2 class="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
        <p class="mb-4">
          L'ensemble de ce site relève de la législation camerounaise et internationale sur le droit d'auteur 
          et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
          documents téléchargeables et les représentations iconographiques et photographiques.
        </p>

        <h2 class="text-2xl font-bold mb-4">Cookies</h2>
        <p class="mb-4">
          Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer 
          sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
        </p>
      `
    },
    'politique-confidentialite': {
      title: 'Politique de Confidentialité',
      description: 'Comment nous protégeons vos données personnelles',
      content: `
        <h2 class="text-2xl font-bold mb-4">Collecte des données</h2>
        <p class="mb-4">
          Mart Business collecte les informations personnelles que vous nous fournissez lorsque vous :
          <br>• Créez un compte sur notre plateforme
          <br>• Utilisez nos services
          <br>• Contactez notre support client
        </p>

        <h2 class="text-2xl font-bold mb-4">Utilisation des données</h2>
        <p class="mb-4">
          Vos données personnelles sont utilisées pour :
          <br>• Fournir et améliorer nos services
          <br>• Communiquer avec vous
          <br>• Assurer la sécurité de notre plateforme
          <br>• Personnaliser votre expérience
        </p>

        <h2 class="text-2xl font-bold mb-4">Protection des données</h2>
        <p class="mb-4">
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
          personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
        </p>

        <h2 class="text-2xl font-bold mb-4">Vos droits</h2>
        <p class="mb-4">
          Conformément à la réglementation, vous disposez d'un droit d'accès, de modification, 
          de suppression et de portabilité de vos données personnelles.
        </p>
      `
    },
    'cgu': {
      title: 'Conditions Générales d\'Utilisation',
      description: 'Règles d\'utilisation de la plateforme Mart Business',
      content: `
        <h2 class="text-2xl font-bold mb-4">Objet</h2>
        <p class="mb-4">
          Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de la 
          plateforme Mart Business et des services associés.
        </p>

        <h2 class="text-2xl font-bold mb-4">Inscription</h2>
        <p class="mb-4">
          L'accès à certains services nécessite la création d'un compte. Vous vous engagez à 
          fournir des informations exactes et à maintenir vos informations à jour.
        </p>

        <h2 class="text-2xl font-bold mb-4">Services</h2>
        <p class="mb-4">
          Mart Business met en relation des clients avec des prestataires de services professionnels. 
          La plateforme agit comme intermédiaire et n'est pas responsable de la qualité des services 
          fournis par les prestataires.
        </p>

        <h2 class="text-2xl font-bold mb-4">Responsabilités</h2>
        <p class="mb-4">
          <strong>Utilisateurs :</strong> Vous êtes responsable de la confidentialité de vos identifiants 
          et de toute activité réalisée depuis votre compte.
          <br><br>
          <strong>Prestataires :</strong> Vous vous engagez à fournir des services professionnels 
          conformes aux descriptions et à respecter les délais convenus.
        </p>

        <h2 class="text-2xl font-bold mb-4">Paiements</h2>
        <p class="mb-4">
          Les paiements sont sécurisés et traités par nos partenaires de paiement. 
          Les prestataires reçoivent leur rémunération après validation du service par le client.
        </p>

        <h2 class="text-2xl font-bold mb-4">Litiges</h2>
        <p class="mb-4">
          En cas de litige, nous encourageons une résolution à l'amiable. Si nécessaire, 
          les tribunaux compétents seront ceux du lieu du siège social de Mart Business (Douala, Cameroun).
        </p>
      `
    }
  };

  const currentContent = legalContent[page];

  if (!currentContent) {
    return (
      <PageLayout title="Page non trouvée" description="La page que vous recherchez n'existe pas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-primary-900 mb-4">Page non trouvée</h1>
            <p className="text-gray-600 mb-8">La page que vous recherchez n'existe pas.</p>
            <Link to="/" className="bg-secondary-500 text-white px-6 py-3 text-sm font-medium hover:bg-secondary-600 transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={currentContent.title} description={currentContent.description}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-700">Accueil</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{currentContent.title}</li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: currentContent.content }}
          />

          {/* Last update */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LegalPage;
