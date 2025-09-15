import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [pshow,setPshow] = useState(false);
    const navigate = useNavigate();
    
  return (
    <div className='w-[100vw] bg-[#fff] flex justify-center p-2 items-center ' >
                    <form action="submit" className='forms   relative  sm:w-[30%] w-[80%] sm:h-[80vh] h-[60%] mx-auto flex flex-col justify-center items-center gap-2.5 rounded-[0.5rem] bg-[#fff] shadow-2xl p-3 sm:mt-[15vh] sm:ml-[35%] ' >
                         
                        <h1 className=' text-[2rem] font-bold  ' >Welcome!</h1>
                        <div className='rs flex items-center sm:w-[100%] w-[100%] ' >
                            <i className="fa-solid fa-user text-[1.5rem]  "></i>
                            <input type="email" name='Email' placeholder='Email id' className='' />
                        </div>
                        <div className='rs w-full flex items-center ' >
                            <input type={pshow ? "text" : "password"} name='Password' placeholder='Enter Password' />
                            <p onClick={() => setPshow(!pshow)} className=' text-[1.5rem] cursor-pointer ' >{pshow ? "🔒" : "👁️"}</p>
                        </div>
                        <a href="" className=' text-start text-[#2407e2] ' >Fortgot Password ?</a>
                        <button type='submit' className='bg-[#1EA1CF] w-[60%] py-2 px-4 rounded-[1.2rem] cursor-pointer font-semibold text-white ' >Login</button>
                        <p>don't have an account ? <a href="" className='text-[#2407e2] font-semibold ' onClick={()=>navigate("/signup")} >Sign Up</a></p>
                    </form>
                   
                </div>
  )
}

export default Login