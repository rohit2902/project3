import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

import { IoIosArrowRoundDown } from "react-icons/io";

const Page2 = () => {
  return (
    <>
      <div className='flex items-center justify-between bg-black px-8'> 
             <div className="w-full sm:w-[48%] md:w-[22%] h-[30vh] bg-white/10 backdrop-blur-xl  rounded-xl text-white p-6 ">
               <h1 className='text-xl mb-4 uppercase'>Independency</h1>
               <p className='text-sm mb-4  text-white/40'>Explore the creativity of independent <br /> designer from around the globe</p>
               <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><IoIosArrowRoundDown /></span>LARN MORE </h1>
           </div>
            <div className="w-full sm:w-[48%] md:w-[22%] h-[30vh] bg-white/10 backdrop-blur-xl rounded-xl p-6 text-white">
                  <h1 className='text-xl mb-4 uppercase'>Uniquity</h1>
               <p className='text-sm mb-4  text-white/40'>Discover the charm of unique pieces that stand out effortlessly.</p>
               <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><GoArrowUpRight /></span>LARN MORE </h1>
           </div>
            <div className="w-full sm:w-[48%] md:w-[22%] h-[30vh] bg-white/10 backdrop-blur-xl rounded-xl p-6 text-white">
                  <h1 className='text-xl mb-4 uppercase'>Quality</h1>
               <p className='text-sm mb-4  text-white/40'>Experience unparalleled craftmanship and attention to detail.</p>
               <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><GoArrowUpRight /></span>LARN MORE </h1>
           </div>
            <div className="w-full sm:w-[48%] md:w-[22%] h-[30vh] bg-white/10 backdrop-blur-xl rounded-xl p-6 text-white">
                 <h1 className='text-xl mb-4 uppercase'>Sustainability</h1>
               <p className='text-sm mb-4  text-white/40'>Embrace eco-concious fashion choices without compromising on style.</p>
               <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><GoArrowUpRight /></span>LARN MORE </h1>
           </div>
      </div>
      <div className='flex items-center justify-between bg-black px-8'>
       <div className="w-full sm:w-[48%] md:w-[15%] h-[20vh]  p-10">
                 <h1 className='text-xl text-white/40 uppercase'>Designers</h1>
                 <p className='text-6xl font-light  text-white'>150+</p>
         </div>
           <div className="w-full sm:w-[48%] md:w-[15%] h-[20vh]  p-10">
                 <h1 className='text-xl text-white/40 uppercase'>Clients</h1>
                 <p className='text-6xl font-light  text-white'>500+</p>
         </div>
           <div className="w-full sm:w-[48%] md:w-[15%] h-[20vh]  p-10">
                 <h1 className='text-xl text-white/40 uppercase'>MasterPieces</h1>
                 <p className='text-6xl font-light  text-white'>20K+</p>
         </div>
         <div className="w-full sm:w-[48%] md:w-[15%] h-[20vh]  p-10">
                 <h1 className='text-xl text-white/40 uppercase'>Events</h1>
                 <p className='text-6xl font-light  text-white'>50+</p>
         </div>
       </div>
       <div className='w-full h-[80vh] flex items-center justify-between px-8 bg-black'>
            <div className='w-[50%] h-full  backdrop-blur-15xl  p-10 text-white'>
              <h1 className='text-4xl uppercase font-medium mb-20'>About</h1>
              <h1 className='text-5xl uppercase '>Where Fashion meets Freedom</h1>
              <div className='flex mt-10 text-white/60 tracking-[.1rem] text-sm'>
                <div className='pr-8  '>
                  <p>The phrase "Where fashion meets freedom" is used as a tagline or theme by various brands, events, and individuals to describe clothing that emphasizes self-expression, comfort, and individuality. It is not a single, specific, two-paragraph text, but rather a widely used marketing slogan and conceptual idea.</p>
                </div>
                  <div >
                  <p>The phrase "Where fashion meets freedom" is used as a tagline or theme by various brands, events, and individuals to describe clothing that emphasizes self-expression, comfort, and individuality. It is not a single, specific, two-paragraph text, but rather a widely used marketing slogan and conceptual idea.</p>
                </div>
              </div>
            </div>
            <div className='w-[45%] h-full bg-[url("./assets/about.jfif")] bg-cover bg-center rounded-xl'>

            </div>
                
       </div>
         <div className='w-full h-[80vh] bg-black px-8 py-8 '>
            <h1 className='text-6xl font-md text-blue-50 uppercase '>Our Advantages</h1>
               <div className='w-full h-[60vh] mt-10 flex items-center justify-between '>
                      <div className='w-[45%] h-full bg-[url("./assets/img2.jfif")] bg-cover bg-center rounded-xl opacity-30'></div>
                      <div className='w-[50%] h-full flex flex-col justify-between '>
                            <div className='w-full h-[45%] p-5 bg-white/30 backdrop-blur-15xl rounded-xl text-white mb-5'>
                               <h1 className='text-xl mb-4 uppercase'>Independency</h1>
                               <div className='flex items-center justify-between '>
                                <p className='text-sm mb-4 w-[120] text-white/40'>An independent designer is a creative professional who works autonomously,<br /> shaping ideas into visual, functional, or experiential designs without being tied to a <br /> single brand or company. Independence allows designers to explore their personal <br /> style, experiment with new concepts, and take full ownership of their creative <br /> decisions.</p>
                                <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><GoArrowUpRight /></span>LARN MORE </h1>
                               </div>
                            </div>

                            <div className='w-full h-[45%] p-5 bg-white/30 backdrop-blur-15xl rounded-xl text-white '>
                               <h1 className='text-xl mb-4 uppercase'>Exclusive & uniquity</h1>
                               <div className='flex items-center justify-between  '>
                                <p className='text-sm  w-[120] text-white/40'>Exclusivity and uniqueness define creations that stand apart from the ordinary. They <br /> reflect individuality, careful craftsmanship, and thoughtful design choices that cannot <br /> be easily replicated. Such qualities add value, create emotional connection, and make <br /> each piece feel special, personal, and timeless rather than mass-produced or trend- <br />driven.</p>
                                <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><GoArrowUpRight /></span>LARN MORE </h1>
                               </div>
                            </div>
                 
                      </div>
            </div>  
       </div>
       <div className='w-full h-[60vh] bg-black px-8 py-8 flex items-center justify-between '>
            <div className='w-[50%] h-full flex flex-col justify-between '>
                            <div className='w-full h-[45%] p-5 bg-white/30 backdrop-blur-15xl rounded-xl text-white mb-5'>
                               <h1 className='text-xl mb-4 uppercase'>High Quality </h1>

                               <div className='flex items-center justify-between '>
                                <p className='text-sm mb-4 w-[120] text-white/40'>A high-quality paragraph is unified (focused on one idea), coherent (sentences flow <br /> logically with transitions), and well-developed (supported by specific <br /> details/evidence), usually beginning with a clear topic sentence that guides the reader <br /> through fully explained points.</p>
                                <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><GoArrowUpRight /></span>LARN MORE </h1>
                               </div>
                            </div>

                            <div className='w-full h-[45%] p-5 bg-white/30 backdrop-blur-15xl rounded-xl text-white '>
                               <h1 className='text-xl mb-4 uppercase'>Eco-friendly</h1>
                               <div className='flex items-center justify-between  '>
                                <p className='text-sm  w-[120] text-white/40'>Adopting eco-friendly habits is essential for planetary health, involving simple daily  changes like reducing plastic, conserving water, and minimizing energy use. These actions reduce carbon footprints and support sustainability.</p>
                                <h1 className='mt-6 text-sm text-white/70 hover:text-white cursor-pointer flex items-center gap-2'> <span className='w-10 h-10 bg-white/10 backdrop-blur-xl text-2xl rounded-4xl flex items-center justify-center'><GoArrowUpRight /></span>LARN MORE </h1>
                               </div>
                            </div>
                 
                      </div>
              <div className='w-[45%] h-full bg-[url("./assets/img3.jpg")] bg-cover bg-center rounded-xl opacity-25'></div>        

       </div>
       
       
   </>
  
  )
}

export default Page2
