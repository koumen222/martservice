import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Footer = () => {
  const { user } = useApp();
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo et description */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">Mart</span>
              <span className="text-xl sm:text-2xl font-light text-white tracking-tight ml-1">Business</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Excellence en prestations de services professionnels depuis 2024 au Cameroun.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">À Propos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Blog</Link></li>
              <li><Link to="/become-provider" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Devenir prestataire</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-300 text-sm sm:text-base break-all">contact@martbusiness.cm</li>
              <li className="text-gray-300 text-sm sm:text-base">+237 6 00 00 00 00</li>
              <li className="text-gray-300 text-sm sm:text-base">Douala, Cameroun</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Mart Business. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Confidentialité
              </Link>
              <Link to="/cgu" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
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
