// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CAREER', path: '/career' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'PRODUCTS', path: '/products' },
    // { name: 'LMS Form', path: '/VL-form' },
    // { name: 'CRM Form', path: '/LMS-form' },
  ];

  const formLinks = [
    { name: 'CRM FORM', path: '/VL-form', icon: 'fa-city' },
    { name: 'LMS FORM', path: '/LMS-form', icon: 'fa-graduation-cap' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-[100]">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center ">
            <Link to="/" className='outline-none'>
              <img
                src="/logo.png"
                alt="Build My Business Logo"
                className="h-10 md:h-12  w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors tracking-wider"
              >
                {link.name}
              </Link>
            ))}


            {/* DROPDOWN FOR FORMS */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-2 text-[13px] font-bold text-gray-600 group-hover:text-blue-600 transition-colors tracking-wider">
                FORMS <i className={`fas fa-chevron-down text-[10px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-25 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-4 mt-2 overflow-hidden"
                  >
                    {formLinks.map((form) => (
                      <Link
                        key={form.name}
                        to={form.path}
                        className="flex items-center gap-3 px-6 py-3 text-[12px] font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                      >
                        <i className={`fas ${form.icon} w-4`}></i>
                        {form.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 p-2 focus:outline-none transition-colors"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-all"
                >
                  {link.name}
                </Link>
              ))}


              <div className="pt-4 border-t border-gray-50">
                <p className="text-[10px] font-black text-gray-300 tracking-[0.2em] mb-4">INQUIRY FORMS</p>
                <div className="grid grid-cols-1 gap-4">
                  {formLinks.map((form) => (
                    <Link
                      key={form.name}
                      to={form.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-sm font-bold text-gray-700 hover:text-blue-600"
                    >
                      <i className={`fas ${form.icon} text-blue-500`}></i>
                      {form.name}
                    </Link>
                  ))}
                </div>
              </div>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;