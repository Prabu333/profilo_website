import React from 'react';
import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>
                Hi, <br /> I'm Prabu Narendran S
                <p className='text-2xl'>I'm a React Developer</p>
            </h1>
        
            <div className='flex py-10'>
                <a href='https://github.com/Prabu333' target='_blank' rel='noopener noreferrer' className='pr-5 hover:text-white'>
                    <AiOutlineGithub size={40} />
                </a>
                <a href='mailto:prabunarendran@gmail.com' className='pr-5 hover:text-white'>
                    <AiOutlineMail size={40} />
                </a>
                <a href='https://www.linkedin.com/in/prabu-narendran-s-6807341b6' target='_blank' rel='noopener noreferrer' className='hover:text-white'>
                    <AiOutlineLinkedin size={40} />
                </a>
            </div>
        </div>
        
        <img className='md:w-1/3' src={HeroImg} alt='hero' />
    </section>
  );
}

export default Hero;
