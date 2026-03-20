// src/App.tsx
import { Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Pages
// import Home from './pages/Home';
// import Support from './pages/Support';
// import ContactUs from './pages/ContactUs';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import CookiePolicy from './pages/CookiePolicy';
import Services from './components/Services';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import CookiePolicy from './components/CookiePolicy';
import NotFound from './components/NotFound';
import Careers from './components/Careers';
import Disclaimer from './components/Disclaimer';
import AppPrivacy from './components/AppPrivacy';
import RefundPolicy from './components/RefundPolicy';
import ScrollToTop from './components/ScrollToTop';
import HRSection from './components/HrSection';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      <ScrollToTop />
      {/* Navigation stays at the top on every page */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/app-privacy" element={<AppPrivacy />} />
          <Route path="/hr-section" element={<HRSection />} />
          <Route path="/refund-cancellation-policy" element={<RefundPolicy />} />

          {/* Optional: Add a 404 Redirect to Home */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom on every page */}
      <Footer />
    </div>
  )
}

export default App;