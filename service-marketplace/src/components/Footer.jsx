import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo et description */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-serif font-bold text-white tracking-tight">Mart</span>
              <span className="text-2xl font-light text-white tracking-tight ml-1">Business</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Excellence en prestations de services professionnels depuis 2024 au Cameroun.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/become-provider" className="text-gray-300 hover:text-white transition-colors">
                  Devenir prestataire
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                contact@martbusiness.cm
              </li>
              <li className="text-gray-300">
                +237 6 00 00 00 00
              </li>
              <li className="text-gray-300">
                Douala, Cameroun
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              2024 Mart Business. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgu" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
