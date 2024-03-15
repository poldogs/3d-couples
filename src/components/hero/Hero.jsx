import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>3D COUPLES</motion.h2>
          <motion.h1 variants={textVariants}>
            Un detalle para toda la vida
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
          <motion.button 
            variants={textVariants} 
            onClick={() => document.getElementById('Proceso').scrollIntoView({ behavior: 'smooth' })}
          >
            Proceso
          </motion.button>
          <motion.button 
            variants={textVariants} 
            onClick={() => document.getElementById('¡Queremos uno!').scrollIntoView({ behavior: 'smooth' })}
          >
            ¡Queremos uno!
          </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        🤍3D COUPLES🤍
      </motion.div>
      <div className="imageContainer">
        <img src="/couple_main-1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
