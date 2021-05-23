import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Image from '../images/img-1.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Home = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero 
        image={Image}
        title='Experience it'
        desc='Try now!'
        btn='Explore more' 
         />
         <Footer />
    </motion.div>
  );
};

export default Home;
