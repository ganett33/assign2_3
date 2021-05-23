import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-4.png';
import Footer from '../components/Footer';
import Series2Origin from'../components/Series2Origin';
import { motion } from 'framer-motion';
import { animationThree } from '../animations';

const Series2 = () => {
  return (
    <motion.div
      initial='out'
      animate='end'
      exit='out'
      variants={animationThree}
    >
      <Header />
      <Hero
        image={Image}
        title='WARNING: '
        desc='DATABASE IS CLASSIFIED'
        btn='Find out more'
      />
      <Series2Origin />
      <Footer />
    </motion.div>
    
  );
};

export default Series2;
