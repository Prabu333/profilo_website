import React from 'react'

import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5 py-12' id='about'>
        <div className='py-5 md:w-1/2 flex justify-center'>
            <img src={AboutImg} alt='Prabu Narendran S. - Front End Developer' className='w-full h-auto max-w-md' />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-black mb-5 w-[170px] font-bold'>About Me</h1>
                
                <p className='pb-5'>
                    I'm a passionate <span className='font-semibold text-orange-500'>Front End Developer</span> with over <strong className='font-semibold'>4.8 years of experience</strong> in the software development field. I specialize in creating visually appealing and highly functional websites, with a focus on e-commerce platforms.
                </p>

                <p className='pb-5'>
                    I am proficient in a range of front-end technologies, including:
                </p>
                <ul className='list-none space-y-2 ml-6'>
                    <li><span className='font-semibold text-orange-500'>React.js</span></li>
                    <li><span className='font-semibold text-orange-500'>Redux</span></li>
                    <li><span className='font-semibold text-orange-500'>Tailwind Css</span></li>
                    <li><span className='font-semibold text-orange-500'>Typescript</span></li>
                    <li><span className='font-semibold text-orange-500'>HTML</span></li>
                    <li><span className='font-semibold text-orange-500'>CSS</span></li>
                    <li><span className='font-semibold text-orange-500'>JavaScript</span></li>
                </ul>

                <p className='pb-5'>
                    One of my proudest achievements is building seamless and dynamic e-commerce websites using <span className='font-semibold text-orange-500'>React</span>, <span className='font-semibold text-orange-500'>Redux</span>, and <span className='font-semibold text-orange-500'>Firebase API</span>, ensuring both performance and usability.
                </p>

                <p className='pb-5'>
                    Additionally, I have a foundational knowledge of <span className='font-semibold text-orange-500'>C#</span> and <span className='font-semibold text-orange-500'>SQL</span>, allowing me to understand back-end processes and contribute to full-stack development when necessary.
                </p>

            </div>
        </div>
    </section>
  )
}

export default About

