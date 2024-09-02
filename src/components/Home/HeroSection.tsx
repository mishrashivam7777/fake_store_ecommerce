import { motion } from "framer-motion";
import videosrc from '../../assets/video.mp4'

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src={videosrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover Amazing Deals on the Latest Products!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore a wide range of categories and find exactly what you're looking for. Shop now and enjoy exclusive discounts!
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#e64a19] transition duration-300"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
