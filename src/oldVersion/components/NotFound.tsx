// src/pages/NotFound.tsx
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 pt-20">
      <div className="max-w-xl w-full text-center">
        
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[120px] md:text-[180px] font-black text-slate-50 leading-none select-none relative">
            404
            <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl text-slate-900 tracking-tighter">
              Page Not Found
            </span>
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 space-y-6"
        >
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="h-[1px] w-12 bg-blue-600 mx-auto"></div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Go Back
            </button>
            
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-black text-xs tracking-widest uppercase hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-house-chimney"></i>
              Return Home
            </Link>
          </div>
        </motion.div>

        {/* Support Link */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          Need help? <Link to="/support" className="text-blue-600 hover:underline">Contact Support</Link>
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;