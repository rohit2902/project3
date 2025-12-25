import React from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";

const Main = () => {
  return (

    <div className="w-full min-h-[85vh] flex bg-[url('./assets/banner.png')] bg-cover bg-position-[70%_center]">
  <div className="max-w-7xl mx-auto px-10  w-full ">
    <div className="pt-[35vh]  text-white ">
     <h1 className='text-8xl font-light tracking-[0.15em]'>DESIGN</h1>
     <h1 className='text-8xl font-light tracking-[0.15em] mt-2 ml-20'>& FREEDOM</h1>
    </div>
    <div className='text-white flex items-center justify-between hover:text-white cursor-pointer tracking-widest mt-5'>
        <p className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer'>Explore Independent Style by Embracing Uniqueness <br />
        with Our Exclusive Designer Apparel</p>
        <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><IoIosArrowRoundDown /></span>LARN MORE </h1>
    </div>
  </div>
</div>

  )
}

export default Main
