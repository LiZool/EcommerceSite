import { motion } from "framer-motion";
import { Mail, Phone, Edit3 } from "lucide-react"; // modern minimal icons

const buttonVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ParallaxSection() {
  const buttons = [
    { label: "Email Us", href: "mailto:someone@example.com", icon: <Mail size={18} /> },
    { label: "Call Us", href: "tel:+1234567890", icon: <Phone size={18} /> },
    { label: "Contact Form", href: "#form", icon: <Edit3 size={18} /> },
  ];

  return (
    <section
      id="contact"
      className="h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200 px-4 md:px-16 gap-10"
    >
      {/* LEFT SECTION */}
      <div className="flex flex-col justify-center text-center md:text-left max-w-lg mx-auto md:mx-0">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent"
        >
          Let’s Get in Touch
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-600"
        >
          We’d love to hear from you — reach out through any of the options below.
        </motion.p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-center md:items-start gap-6 px-5">
        {buttons.map((btn, i) => (
          <motion.a
            key={btn.label}
            href={btn.href}
            custom={i}
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.07,
              y: -5,
              boxShadow: "0px 8px 20px rgba(139,92,246,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            className="w-full md:w-auto flex items-center gap-3 px-10 py-4 rounded-2xl backdrop-blur-md bg-white/40 border border-white/50 shadow-md text-purple-800 font-medium hover:bg-white/70 transition"
          >
            <div className="px-5"> 
              {btn.icon}
            </div>
            {btn.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}