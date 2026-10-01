
// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import logo from "../../../public/logo.png"; // Ensure this path is correct relative to the component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    // { name: 'Home', path: '/' },
    // { name: 'About Us', path: '/about' },
    // { name: 'Services', path: '/services' },
    // { name: 'Careers', path: '/career' },
    // { name: 'Contact', path: '/contact' },
    // { name: 'Products', path: '/products' },

     { name: 'HOME', path: '/' },
    { name: 'PRICING', path: '#pricing' },
    { name: 'SERVICES', path: '#services' },
    { name: 'CAREER', path: '/career' },
    { name: 'CONTACT', path: '#contact' },
    { name: 'PRODUCTS', path: '#products' },

    // { name: 'Vertical Living', path: '/VL-feature' },
    // { name: 'Vertical form', path: '/VL-form' },
    // { name: 'LMs Form', path: '/LMS-form' },
    // { name: 'LMS', path: '/LMS' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Use', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'App Privacy', path: '/app-privacy' },
    { name: 'Refund Policy', path: '/refund-cancellation-policy' },
    { name: 'Hr Section', path: '/hr-section' },
  ];

  const socialLinks = [
    { 
      icon: 'fa-instagram', 
      href: 'https://www.instagram.com/build_my_busines?igsh=NTN4M2VobTlpbWw5' 
    },
    { 
      icon: 'fa-linkedin-in', 
      href: 'https://www.linkedin.com/company/buildmybusines/posts/?feedView=all' 
    },
    { 
      icon: 'fa-whatsapp', 
      href: 'https://wa.me/919363964498' 
    },
  ];

  const workingHours = [
    { day: 'MON', hours: '09:00 AM – 05:00 PM' },
    { day: 'TUE', hours: '09:00 AM – 05:00 PM' },
    { day: 'WED', hours: '09:00 AM – 05:00 PM' },
    { day: 'THU', hours: '09:00 AM – 05:00 PM' },
    { day: 'FRI', hours: '09:00 AM – 05:00 PM' },
    { day: 'SAT/SUN', hours: 'CLOSED' },
  ];


  
  const handleNavClick = (path: string) => {
    if (path.startsWith('#')) {
        const element = document.querySelector(path);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }
};


  return (
    // <footer className="bg-[#0f172a] text-white pt-20 pb-10">
    <footer className="bg-white text-slate-900 pt-20 pb-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link to="/">
              <img
                src={logo}
                alt="Build My Business"
                className="h-12 w-auto mb-5 object-contain" // Removed brightness filters for better visibility
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Building powerful digital products for business operations, academic workflows, and interior project management. Designed to scale with your vision.

            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-xl text-white border-2 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                >
                  <i className={`fa-brands ${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-blue-500">Navigation</h3>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}

                    className="text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-blue-500">Legal & Compliance</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xs font-bold mb-8 tracking-[0.3em] uppercase text-blue-500">Working Hours</h3>
            <ul className="space-y-3">
              {workingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-xs py-1">
                  <span className="font-bold text-slate-600 tracking-widest">{item.day}</span>
                  <span className={`${item.hours === 'CLOSED' ? 'text-red-400' : 'text-slate-700'} font-medium`}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest gap-6">
          <p>© {currentYear} Build My Business Group. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 bg-green-500 rounded-full animate-pulse"></span>
            <p>System Status: Fully Operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;