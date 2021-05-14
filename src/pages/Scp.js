import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DetailScp from'../components/DetailScp';
import Image from '../images/img-2.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const Scp = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
      <Header />
      <Hero
        image={Image}
        title='SCP Foundation'
        desc='Overlord : Coming soon!'
        btn='Find more' />
      <DetailScp />
    </motion.div>

  );
};

export default Scp;
