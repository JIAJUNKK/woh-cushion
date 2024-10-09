import { motion } from "framer-motion";
import { useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import './hero.scss';

const Hero = ({setSelectedBrand, loading}) => {
  const [selectedBox, setSelectedBox] = useState(null); 
  const brands = ["Honda", "Nissan", "Proton", "Perodua", "Toyota", "Suzuki",];

  const handleClick = (brand) => {
    setSelectedBox(brand);
    setSelectedBrand(brand);
  }

  return (
    <div className="hero">
      <div className="wrapper">

        {/* Shop Description Section */}
        <motion.div
          className="textContainer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1>
            Tian Ye Cushion @ Jerantut, Pahang
          </motion.h1>
          <motion.h5>
            Handmade cushion
          </motion.h5>
        </motion.div>

        {loading ? (
          <SkeletonLoader />
        ) : (
          <motion.div
            className="brandContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="brandRectangles">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  className={`brandRectangle ${selectedBox === brand ? "selected" : ""}`} 
                  onClick={() => handleClick(brand)}
                  whileHover={{ scale: 1.05, backgroundColor: "white" }} 
                  initial={{ scale: 0.8, opacity: 0, backgroundColor: "#e0e0e0" }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={`/brands/${brand}.png`}
                    alt={brand}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
