import React from 'react'

// import ContactImg from '../assets'

const Contact = () => {
  return (
    <section className='flex flex-col  px-5 bg-primary py-32' id='contact'>

        <div className='flex flex-col items-center text-white'>
        
        <h1 className='text-4xl border-b-4 border-[black] mb-5 w-[140px] font-bold'>Contact</h1>
        <p className='pb-5'>
            If you want to discuss more detail, please contact me
        </p>
        <p className='py-2'><span className='font-bold'>Email :</span>
        <a href='mailto:prabunarendran@gmail.com'>prabunarendran@gmail.com</a></p>
        <p className='py-2'><span className='font-bold'>Mobile :</span>7339358264</p>
            
        </div>
    </section>
  )
}

export default Contact