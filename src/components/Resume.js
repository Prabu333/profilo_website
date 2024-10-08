import React from 'react';
import ResumeImg from '../assets/resume.jpg';
import ResumePDF from '../assets/prabu_resume.pdf'; // Import the PDF file

const Resume = () => {
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} alt='Resume' />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-[black] mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>
                    You can view my resume <a className='btn' href={ResumePDF} target='_blank' rel='noopener noreferrer'>here</a>
                </p>
                <p>
                    You can also <a className='btn' href={ResumePDF} download='resume.pdf'>download</a> it.
                </p>
            </div>
        </div>
    </section>
  );
}

export default Resume;
