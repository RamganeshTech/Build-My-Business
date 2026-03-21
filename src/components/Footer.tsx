// // src/components/Footer.tsx
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const usefulLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Register Firm', path: '/register' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const socialLinks = [
//     { icon: 'fa-facebook-f', href: '#' },
//     { icon: 'fa-instagram', href: '#' },
//     { icon: 'fa-youtube', href: '#' },
//     { icon: 'fa-linkedin-in', href: '#' },
//   ];

//   const workingHours = [
//     { day: 'MON', hours: '09:00 AM – 05:00 PM' },
//     { day: 'TUE', hours: '09:00 AM – 05:00 PM' },
//     { day: 'WED', hours: '09:00 AM – 05:00 PM' },
//     { day: 'THU', hours: '09:00 AM – 05:00 PM' },
//     { day: 'FRI', hours: '09:00 AM – 05:00 PM' },
//     { day: 'SAT', hours: 'CLOSED' },
//     { day: 'SUN', hours: 'CLOSED' },
//   ];

//   return (
//     <footer className="bg-[#0f172a] text-white pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

//           {/* Brand Column */}
//           <div className="space-y-6">
//             <Link to="/">
//               <img 
//                 src="/logo.png" 
//                 alt="Build My Business" 
//                 className="h-14 w-auto brightness-0 invert" 
//               />
//             </Link>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//               Providing expert consulting services to boost growth and profitability for businesses and individuals.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a 
//                   key={index} 
//                   href={social.href} 
//                   className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
//                 >
//                   <i className={`fa-brands ${social.icon} text-sm`}></i>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Useful Links Column */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 tracking-wider">USEFUL LINKS</h3>
//             <ul className="space-y-4">
//               {usefulLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link 
//                     to={link.path} 
//                     className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact / Working Hours Column */}
//           <div>
//             <h3 className="text-lg font-bold mb-6 tracking-wider">CONTACT US WITH WORKING HOURS</h3>
//             <ul className="space-y-3">
//               {workingHours.map((item) => (
//                 <li key={item.day} className="flex justify-between text-sm border-b border-slate-800 pb-2">
//                   <span className="font-bold text-gray-300">{item.day}</span>
//                   <span className={`${item.hours === 'CLOSED' ? 'text-red-400' : 'text-gray-400'}`}>
//                     {item.hours}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
//           <p>© {currentYear} Build My Business. All Rights Reserved.</p>
//           <div className="flex space-x-6">
//             <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-white">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import logo from "../../public/logo.png"; // Ensure this path is correct relative to the component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/career' },
    { name: 'Contact', path: '/contact' },
    { name: 'Products', path: '/products' },
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

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
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
              A premier consulting group specialized in registration, tax infrastructure, and digital scalability for modern enterprises.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
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
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm font-medium"
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
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm font-medium"
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
                  <span className="font-bold text-slate-300 tracking-widest">{item.day}</span>
                  <span className={`${item.hours === 'CLOSED' ? 'text-red-400' : 'text-slate-400'} font-medium`}>
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