import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-2.jpg';
import Footer from '../components/Footer';
import Series1Origin from '../components/Series1Origin';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const Series1 = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
      <Header />
      <Hero
        image={Image}
        title='SCP Foundation'
        desc='Overlord : Coming soon!'
        btn='Find more' />       
        <Series1Origin />
        <Footer />
    </motion.div>


  );
};

export default Series1;
