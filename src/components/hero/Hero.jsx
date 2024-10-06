import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          initial="initial"
          animate="animate"
        >
          <motion.h1>
            Tian Ye Cushion @ Jerantut, Pahang👋🏻
          </motion.h1>
          <motion.h3>
            Hi, I'm Jia Jun. A passionate software engineering student from Malaysia 🇲🇾
          </motion.h3>
        </motion.div>
      </div>

      <motion.div 
        className="imageContainer" 
        initial="initial"
        animate="animate"
      >
        <img src="/hero.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;