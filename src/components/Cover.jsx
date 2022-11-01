import React from 'react';
import CoverImage from "../assets/cover_two.jpg";

const Cover = () => {
  return (
    <main className='2xl:mx-auto w-full max-w-[1640px] h-[300px] md:h-[500px] xl:h-screen relative'>
      <div className='absolute text-white bg-black/40 flex flex-col justify-center w-[100%] h-[100%]'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Welcome</h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>To <span className='text-red-500'>Dosa</span> World</h1>
      </div>
      <img src={CoverImage} alt="dosa cover" style={{width: "100%", height:"100%"}} />
    </main>

  )
}

export default Cover;