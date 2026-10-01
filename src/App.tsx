// src/App.tsx
import { Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './oldVersion/components/Header';
import Footer from './oldVersion/components/Footer';

// import Services from './oldVersion/components/Services';
import Home from './pages/Home';
// import About from './oldVersion/components/About';
import { lazy } from 'react';
const Support = lazy(()=> import( './oldVersion/components/Support'))
const ContactUs = lazy(()=> import( './oldVersion/components/ContactUs'))
const PrivacyPolicy = lazy(()=> import( './oldVersion/components/PrivacyPolicy'))
const TermsOfUse = lazy(()=> import( './oldVersion/components/TermsOfUse'))
const CookiePolicy = lazy(()=> import( './oldVersion/components/CookiePolicy'))
const NotFound = lazy(()=> import( './oldVersion/components/NotFound'))
const Careers = lazy(()=> import( './oldVersion/components/Careers'))
const Disclaimer = lazy(()=> import( './oldVersion/components/Disclaimer'))
const AppPrivacy = lazy(()=> import( './oldVersion/components/AppPrivacy'))
const RefundPolicy = lazy(()=> import( './oldVersion/components/RefundPolicy'))
const ScrollToTop = lazy(()=> import( './oldVersion/components/ScrollToTop'))
const HRSection = lazy(()=> import( './oldVersion/components/HrSection'))
// const VerticalLivingFeature = lazy(()=> import( './pages/VerticalLivingFeature'))
// const VerticalLivingFormMain = lazy(()=> import( './pages/VerticalLivingFormMain'))
// const LMSFeaturePage = lazy(()=> import( './pages/LMSFeaturePage'))
// const LMSFormMain = lazy(()=> import( './pages/LMSFormMain'))
// const Products = lazy(()=> import( './pages/Products'))

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
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> */}
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
          {/* <Route path="/VL-feature" element={<VerticalLivingFeature />} />
          <Route path="/VL-form" element={<VerticalLivingFormMain />} />
          <Route path="/LMS-form" element={<LMSFormMain />} />
          <Route path="/LMS" element={<LMSFeaturePage />} /> */}

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