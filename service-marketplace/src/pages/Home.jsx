import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';
import Advantages from '../components/Advantages';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <StatsSection />
      <Advantages />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;
