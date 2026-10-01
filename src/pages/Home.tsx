// src/pages/Home.tsx
import { motion } from 'framer-motion';
// import Hero from '../oldVersion/components/Hero';
// import About from '../oldVersion/components/About';
// import Services from '../oldVersion/components/Services';
// import ContactUs from '../oldVersion/components/ContactUs';
import ClientTrust from '../components/ClientTrust';
import Hero from '../components/Hero';
import Integrations from '../components/integrations/Integrations';
import Products from '../components/products/Products';
import TechnicalAbout from '../components/TechnicalAbout/TechnicalAbout';
import Industries from '../components/industries/Industries';
import Service from '../components/service/Service';
import Faq from '../components/Faq/Faq';
import Pricing from '../components/pricing/Pricing';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import ContactUs from '../components/contactUs/ContactUs';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full"
    >
      {/* 1. Hero Section: The first thing users see */}
      {/* <Hero /> */}

      <Hero />
      <ClientTrust />
      <Products />

      <TechnicalAbout />
      <Integrations />
      <Industries />
      <Service />
      <HowWeWork />
      <Pricing />
      <Faq />
      <ContactUs />

      {/* 2. About Section: Explaining the company vision */}
      {/* <About /> */}

      {/* 3. Services Section: Showcasing what you offer */}
      {/* <Services /> */}


      {/* <ContactUs /> */}

      {/* You can add the "Our Expertise" or "Testimonials" sections here later */}
    </motion.div>
  );
};

export default Home;