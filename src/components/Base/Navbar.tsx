import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="p-4 text-white shadow-md bg-white"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-black">Ecommerce Website</h1>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>
        </div>

        <div className={`md:flex space-x-4 flex items-center ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="text-black hover:text-gray-400 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <Link
              to="/shop"
              className="text-black hover:text-gray-400 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <Link
              to="/cart"
              className="text-black hover:text-gray-400 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </motion.div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden"
            initial="hidden"
            animate="visible"
            variants={mobileMenuVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <Link
                to="/"
                className="block text-black hover:text-gray-400 p-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              <Link
                to="/shop"
                className="block text-black hover:text-gray-400 p-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              <Link
                to="/cart"
                className="block text-black hover:text-gray-400 p-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
