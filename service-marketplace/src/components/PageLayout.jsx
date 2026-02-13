import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Contenu principal */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
