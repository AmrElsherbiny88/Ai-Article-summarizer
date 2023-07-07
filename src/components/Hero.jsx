import React from 'react'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
         <h1>AmrElsherbiny</h1>

         <button
         type='button'
         onClick={() => window.open("https://amr-elsherbiny-5r94.vercel.app/")}
         className='black_btn'
         >
            My Portfolio
         </button>
      </nav>
        
        <h1 className='head_text'>
          Summarize Articles 
        </h1>
        <h2 className='desc'>
        Read less and benefit from the same output. On this site, you can summarize anything and preserve its benefits and meanings
        </h2>

    </header>
  )
}

export default Hero