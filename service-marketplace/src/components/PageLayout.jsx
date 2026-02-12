import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children, title, description }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section commun pour toutes les pages */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
