import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/ChatGPT_Image_12_févr._2026__02_17_17-removebg-preview (1).png" 
                alt="Mart Business" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              À Propos
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            {!user && (
              <>
              <Link
                to="/become-provider"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Devenir prestataire
              </Link>
              <Link
                to="/partner/referral"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Devenir partenaire
              </Link>
              </>
            )}
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Mon profil
                </Link>
                {user.role === 'provider' && (
                  <Link
                    to="/provider-dashboard"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Mon espace
                  </Link>
                )}
                {user.role === 'partner' && (
                  <Link
                    to="/partner/dashboard"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Espace Partenaire
                  </Link>
                )}
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Admin
                  </Link>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{user.firstName}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded-md transition-colors"
                  >
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-secondary-500 text-white px-4 py-2 text-sm font-medium hover:bg-secondary-600"
              >
                Connexion
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              {!user && (
                <>
                <Link
                  to="/become-provider"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devenir prestataire
                </Link>
                <Link
                  to="/partner/referral"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devenir partenaire
                </Link>
                </>
              )}
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mon profil
                  </Link>
                  {user.role === 'provider' && (
                    <Link
                      to="/provider-dashboard"
                      className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mon espace
                    </Link>
                  )}
                  {user.role === 'partner' && (
                    <Link
                      to="/partner/dashboard"
                      className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Espace Partenaire
                    </Link>
                  )}
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <div className="px-3 py-2 text-sm text-gray-500">Connecté : {user.firstName} {user.lastName}</div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-gray-100 text-gray-700 px-3 py-2 text-base font-medium hover:bg-gray-200 text-left"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="w-full bg-secondary-500 text-white px-3 py-2 text-base font-medium hover:bg-secondary-600 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
