import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Vertical Living CRM",
    icon: "fa-building",
    desc: "A powerful CRM tailored for interior design firms to manage projects, clients, workflows, and execution efficiently.",
    gradient: "from-indigo-500 to-blue-600",
    bg: "bg-blue-50",
    route: "/VL-feature"
  },
  {
    title: "Learning Management System",
    icon: "fa-graduation-cap",
    desc: "A complete LMS platform designed for schools with dedicated apps for students, parents, and staff management.",
    gradient: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    route: "/LMS"
  }
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen mt-16 py-16 md:py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase">
            Our <span className="text-blue-600">Products</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-xl">
            Explore our powerful digital products built to solve real-world business challenges.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="cursor-pointer bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => navigate(product.route)}
            >

              {/* Icon */}
              <div className={`w-16 h-16 ${product.bg} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`fa-solid ${product.icon} text-2xl bg-gradient-to-br ${product.gradient} bg-clip-text text-transparent`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                {product.desc}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                View Product <i className="fa-solid fa-arrow-right"></i>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Products;