import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({closeSidebar, setSelectedBrand}) => {
  const items = ["Home", "All", "Honda", "Nissan", "Proton", "Perodua", "Suzuki", "Toyota"];
  const handleClick = (item) =>{
    closeSidebar();
    setSelectedBrand(item);
  }

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(item)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
