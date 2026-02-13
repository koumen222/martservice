import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import PromoHeader from './components/PromoHeader';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProvidersListPage from './pages/ProvidersListPage';
import RequestServicePage from './pages/RequestServicePage';
import AdminDashboard from './pages/AdminDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import BecomeProviderPage from './pages/BecomeProviderPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PartnerDashboard from './pages/PartnerDashboard';
import PartnerReferralPage from './pages/PartnerReferralPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LegalPage from './pages/LegalPage';
import './index.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <PromoHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/services/:serviceId/providers" element={<ProvidersListPage />} />
          <Route path="/request/:serviceId" element={<RequestServicePage />} />
          <Route path="/request/:serviceId/:providerId" element={<RequestServicePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/provider-dashboard/:providerId" element={<ProviderDashboard />} />
          <Route path="/become-provider" element={<BecomeProviderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          <Route path="/partner/dashboard" element={<PartnerDashboard />} />
          <Route path="/partner/referral" element={<PartnerReferralPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/politique-confidentialite" element={<LegalPage />} />
          <Route path="/cgu" element={<LegalPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
