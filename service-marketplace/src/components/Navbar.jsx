import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <img 
                src="/ChatGPT_Image_12_févr._2026__02_17_17-removebg-preview (1).png" 
                alt="Mart Business" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Accueil
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              À Propos
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Contact
            </Link>
            {!user && (
              <Link to="/become-provider" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Devenir prestataire
              </Link>
            )}
            {user ? (
              <>
                <Link to="/profile" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Mon profil
                </Link>
                {user.role === 'provider' && (
                  <Link to="/provider-dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Mon espace
                  </Link>
                )}
                {user.role === 'partner' && (
                  <Link to="/partner/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Espace Partenaire
                  </Link>
                )}
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Admin
                  </Link>
                )}
                <div className="flex items-center gap-3 ml-2">
                  <span className="text-sm text-gray-600">{user.firstName}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-primary-600 text-white px-5 py-2 text-sm font-medium hover:bg-primary-700 rounded-lg transition-colors ml-2"
              >
                Connexion
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
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
      </div>

      {/* Mobile Navigation - Full screen overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Accueil
            </Link>
            <Link to="/services" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Services
            </Link>
            <Link to="/about" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              À Propos
            </Link>
            <Link to="/blog" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              Blog
            </Link>
            <Link to="/contact" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact
            </Link>

            <div className="border-t border-gray-100 my-3"></div>

            {!user && (
              <Link to="/become-provider" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-xl active:bg-primary-100 transition-colors">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Devenir prestataire
              </Link>
            )}

            {user ? (
              <>
                <div className="bg-gray-50 rounded-xl p-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-bold text-sm">{user.firstName?.charAt(0)}{user.lastName?.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>

                <Link to="/profile" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  Mon profil
                </Link>
                {user.role === 'provider' && (
                  <Link to="/provider-dashboard" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    Mon espace
                  </Link>
                )}
                {user.role === 'partner' && (
                  <Link to="/partner/dashboard" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Espace Partenaire
                  </Link>
                )}
                {user.role === 'admin' && (
                  <Link to="/admin" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl active:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Admin
                  </Link>
                )}

                <div className="border-t border-gray-100 my-3"></div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3.5 text-base font-medium text-red-600 hover:bg-red-50 rounded-xl active:bg-red-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                  Déconnexion
                </button>
              </>
            ) : (
              <div className="space-y-3 pt-2">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block w-full bg-primary-600 text-white text-center px-4 py-3.5 text-base font-semibold hover:bg-primary-700 rounded-xl transition-colors"
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="block w-full bg-gray-100 text-gray-700 text-center px-4 py-3.5 text-base font-semibold hover:bg-gray-200 rounded-xl transition-colors"
                >
                  Créer un compte
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
