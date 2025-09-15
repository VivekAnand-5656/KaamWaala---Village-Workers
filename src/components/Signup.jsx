import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useForm } from 'react-hook-form';

const Signup = () => {
  const navigate = useNavigate();
  const [pshow, setPshow] = useState(false);

  //     const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitting },
  // } = useForm();
  return (
    <div className='w-[100vw] p-2 flex sm:justify-normal sm:justify-items-normal justify-center items-center ' >
      <form action="submit" className='forms   sm:w-[30%] w-[80%]  sm:h-[80vh] h-[70%] flex flex-col justify-center items-center gap-2.5 rounded-[0.5rem] bg-[#fff] shadow-2xl p-3 sm:mt-[15vh] sm:ml-[35%] ' >

        <h1 className=' text-[2rem] font-bold  ' >Welcome!</h1>
        <div className='rs w-full flex items-center' >
          <p className='text-[1.5rem]' >🤵</p>
          <input type="text" name='Name' placeholder='Full Name' required />
        </div>
        <div className='rs  w-full flex items-center ' >
          <p className='text-[1.5rem]'>📧 </p>
          <input type="email" name='Email' placeholder='Email id' className=' ' />
        </div>
        <div className='rs w-full flex items-center ' >
          <input type={pshow ? "text" : "password"} name='Password' placeholder='Create Password' />
          <p onClick={() => setPshow(!pshow)} className=' text-[1.5rem] cursor-pointer ' >{pshow ? "🔒" : "👁️"}</p>
        </div>
        <button type='submit' className='bg-[#1EA1CF] w-[60%] py-2 px-4 rounded-[1.2rem] cursor-pointer font-semibold text-white ' >Sign Up</button>
        <p>already have an account ? <a href="" className='text-[#2407e2] font-semibold ' onClick={()=>navigate("/login")} >Log in</a></p>
      </form>
    </div>
  )
}

export default Signup