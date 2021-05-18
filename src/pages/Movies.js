import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-3.jpg';
import MovieFrom from'../components/Movie/MovieFrom';
import { motion } from 'framer-motion';
import { animationThree } from '../animations';

const Movies = () => {
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
        title='Pick the movie'
        desc='Find the favourite?'
        btn='Search movies'
      />
      <MovieFrom />
    </motion.div>
    
  );
};

export default Movies;
