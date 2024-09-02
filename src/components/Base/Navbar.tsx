import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  return (
    <motion.nav
      className="p-4 text-white shadow-md relative bg-white"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-black">Ecommerce Website</h1>
        </div>

        <div className="hidden md:flex space-x-4 flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="text-black hover:text-gray-400 cursor-pointer"
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
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
