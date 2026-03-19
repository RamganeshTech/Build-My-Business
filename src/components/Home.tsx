// src/pages/Home.tsx
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ContactUs from './ContactUs';

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
      <Hero />

      {/* 2. About Section: Explaining the company vision */}
      <About />

      {/* 3. Services Section: Showcasing what you offer */}
      <Services />


      <ContactUs />

      {/* You can add the "Our Expertise" or "Testimonials" sections here later */}
    </motion.div>
  );
};

export default Home;