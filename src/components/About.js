import React from 'react'

import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt='' />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-[black] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hi, my name is Prabu Narendran S. I'm a Front End Developer. i built beautiful e-commerce website
            with React, Redux & FIrebase API
        </p>
        <p className='pb-5'>
            I'm prioficient in Frontend skills like React.js, Redux, Html, Css, Javascript. 
            I have 3.5 years experience in Software Development field
        </p>
        <p className='pb-5'>
           In back end i have C# and sql Knowledge
        </p>
        </div>
            
        </div>
    </section>
  )
}

export default About