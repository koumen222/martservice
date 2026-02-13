import PageLayout from '../components/PageLayout';
import Icon from '../components/Icon';

const AboutPage = () => {
  return (
    <PageLayout 
      title="À Propos" 
      description="Découvrez Mart Business, votre plateforme de services au Cameroun"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Votre Partenaire de Confiance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mart Business connecte les clients avec les meilleurs prestataires de services au Cameroun. 
            Nous faciliterons vos projets professionnels et personnels avec expertise et fiabilité.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-primary-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Icon name="target" className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Notre Mission</h2>
            <p className="text-primary-700 leading-relaxed">
              Rendre les services professionnels accessibles à tous au Cameroun en créant une plateforme 
              transparente, sécurisée et performante qui met en relation les clients avec des prestataires 
              qualifiés et vérifiés.
            </p>
          </div>

          <div className="bg-secondary-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
              <Icon name="eye" className="w-8 h-8 text-secondary-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-secondary-900 mb-4">Notre Vision</h2>
            <p className="text-secondary-700 leading-relaxed">
              Devenir la référence nationale pour la mise en relation de services professionnels, 
              en favorisant l'économie locale et en offrant des opportunités aux talents camerounais.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="shield" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fiabilité</h3>
              <p className="text-gray-600 text-sm">
                Des prestataires vérifiés et des services garantis
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="check" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600 text-sm">
                Standards élevés et satisfaction client prioritaire
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="clock" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapidité</h3>
              <p className="text-gray-600 text-sm">
                Mise en relation rapide et interventions ponctuelles
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heart" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement</h3>
              <p className="text-gray-600 text-sm">
                Support continu et accompagnement personnalisé
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Mart Business en Chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Prestataires vérifiés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-primary-100">Services réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Catégories de services</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-primary-100">Satisfaction client</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jean Dupont</h3>
              <p className="text-gray-600 mb-2">Fondateur & CEO</p>
              <p className="text-sm text-gray-500">
                Expert en digitalisation des services et passionné par l'entrepreneuriat camerounais
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">MN</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marie Nkoulou</h3>
              <p className="text-gray-600 mb-2">Directrice des Opérations</p>
              <p className="text-sm text-gray-500">
                Spécialiste de l'expérience client et de la qualité de service
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">PT</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Paul Tchinda</h3>
              <p className="text-gray-600 mb-2">Responsable Technique</p>
              <p className="text-sm text-gray-500">
                Ingénieur logiciel spécialisé dans les plateformes de mise en relation
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Rejoignez l'Aventure Mart Business
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous soyez client à la recherche de services ou prestataire désireux de développer votre activité, 
            Mart Business est la plateforme qu'il vous faut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Créer un compte
            </a>
            <a
              href="/become-provider"
              className="bg-secondary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary-600 transition-colors"
            >
              Devenir prestataire
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
