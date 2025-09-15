import React from 'react' 
import img1 from '../images/img1.jpg' 
import banner from '../images/banner.png'  
// import CardLabour from './components/CardLabour'
import prof from '../images/profile.jpg';
import Features from './Features';
import CardLabour from './CardLabour';
const Home = () => {
  return  <>
   <div className=' hero sm:w-[80%] w-[100%] mx-auto sm:h-[85vh] h-[70vh] flex sm:flex-row flex-col justify-center items-center p-2 sm:mt-[15vh] mt-[10vh]  transition-all ease-in-out duration-500 ' >
         <div className='box  sm:w-full w-full sm:h-[100%] h-full flex sm:flex-row flex-col sm:justify-center justify-around   items-center rounded-[1rem] p-3 ' >
            <div className='sm:w-[50%] w-[100%] sm:h-full h-[30%] flex flex-col justify-center items-center  '>
               <h1 className='tst sm:text-[3rem] text-[2rem] font-bold uppercase  ' >Viilage <span className='text-[#1EA1CF]'>Workers </span> 
                      Job Finder</h1>
               <p className='tst font-semibold ' >Connecting Village Labours with Work Opportunities</p>
            </div>
            <div className=' pics sm:w-[50%] w-[100%] sm:h-full h-[50%] flex justify-center items-center gap-2 ' >
               <img  src={img1} alt="" /> 
            </div>
         </div>
      </div>
      {/* --- Why use this --- */}
      <h1 className='text-[2rem] text-center capitalize font-bold sm:mt-0 mt-1 ' >why use this plateform</h1>
      <div className='sm:w-[80%] w-[100%] h-auto sm:p-3 p-4 mx-auto flex flex-col justify-center items-center bg-[#ECF7FB] sm:rounded-[2rem] rounded-0 ' >
         <ol class="sm:w-[80%] w-[100%] sm:p-0 p-3 relative border-s mx-auto border-[#000] dark:border-[#000]">

            <li class="mb-10 ms-4">
               <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
               <time class="mb-1 text-lg font-normal leading-none text-black dark:text-black">For Workers</time>
               <h3 class="text-lg font-semibold text-black dark:text-black">Easily Find Work & Get Hired</h3>
               <p class="mb-4 text-base font-normal text-black dark:text-black">
                  Register your profile and apply for jobs in your village or nearby areas.
                  You’ll get work through direct phone contact, without any middleman, ensuring full payment goes directly to you. </p>
            </li>

            <li class="ms-4">
               <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
               <time class="mb-1 text-lg font-normal leading-none text-black dark:text-black">For Employers</time>
               <h3 class="text-lg font-semibold text-black dark:text-black">Find Skilled Workers in Minutes</h3>
               <p class="text-base font-normal text-black dark:text-black">
                  Farming helpers, carpenters, plumbers, or construction workers — all in one place.
                  Just post a job and labours will contact you directly. This saves time and supports your local community. </p>
            </li>

         </ol>

      </div>
      {/* -----Features ------ */}
      <Features/>
      <div className='sm:w-full w-full h-auto flex sm:flex-row flex-col p-2 justify-center items-center gap-2 ' >
         <CardLabour prof={prof} />
         <CardLabour prof={prof} />
      </div>
      {/* ----- Call to Action ----- */}
      <div className=' sm:w-[80%] w-[100%] sm:h-[80vh] h-[70vh] mx-auto sm:rounded-[3rem] rounded-[0] bg-[#1EA1CF] border-t-2 border-[#fff] flex sm:flex-row flex-col justify-center items-center p-2 ' >

         <div className='sm:w-[50%] w-[100%] sm:h-full h-[50%] flex flex-col justify-center gap-3 sm:p-0 p-3 sm:gap-0 ' >
            <p className='sm:text-[2rem] text-[1.2rem] text-white font-bold ' > Are you a labourer looking for work? Or a villager looking for help? Start now!</p>
            <button className='bg-[#fff] font-semibold py-2 px-2 sm:w-[30%] w-[40%] rounded-[0.3rem] cursor-pointer ' >Register Now🚀</button>
         </div>
         <div className='sm:w-[40%] w-[100%] sm:h-full h-[40%]  ' >
            <img src={banner} className='sm:w-full w-[50%] sm:h-full h-[100%] mx-auto ' alt="image" />
         </div>
      </div>
  </>
}

export default Home