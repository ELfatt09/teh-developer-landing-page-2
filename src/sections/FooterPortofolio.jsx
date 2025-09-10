import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PortofolioFooter() {
  const socials = [
    { name: "Instagram", icon: <FaInstagram size={18} />, link: "https://instagram.com" },
    { name: "Whatsapp", icon: <FaWhatsapp size={18} />, link: "https://wa.me/628123456789" },
    { name: "LinkedIn", icon: <FaLinkedin size={18} />, link: "https://linkedin.com" },
  ];

  return (
    <footer className="w-full h-[15vh] font-jakarta flex justify-center items-center">
      <div className="border-t w-[92%] py-4 text-sm flex justify-between">
        {/* Sosmed */}
        <div className="flex gap-8 items-center">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 relative text-gray-700"
            >
              <div>{s.icon}</div>

              <motion.div
                className="relative"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Text */}
                <motion.span
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 20, transition: { duration: 0.3 } },
                  }}
                  className="inline-block"
                >
                  {s.name}
                </motion.span>

                {/* Arrow */}
                <motion.span
                  variants={{
                    rest: { opacity: 0, x: -20 },
                    hover: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3 },
                    },
                  }}
                  className="absolute left-0"
                >
                  →
                </motion.span>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Credit */}
        <div className="font-medium text-gray-700">
          <h1>Personal@Portofolio2025</h1>
        </div>
      </div>
    </footer>
  );
}
