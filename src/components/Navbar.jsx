import React, { useState } from 'react'
 
import { NavLink } from 'react-router-dom';

function Navbar() { 
    const [lang, setLang] = useState(false);
    const [menuopen, setMenuopen] = useState(false);
  
    return <>
        {/* <div className='flex flex-col justify-center items-center' > */}
        <nav className=' w-full sm:h-[15vh] h-[10vh] fixed top-0 bg-[#1EA1CF] flex justify-between items-center p-2 text-white z-55 '>
            <h1 className=' text-2xl font-bold  ' >KaamWala</h1>
            {/* <input type="search" name='search' className='border w-[10%] h-[80%] transition-all ease-in-out duration-500 hover:w-[25%] rounded-[0.5rem] outline-none px-2 ' placeholder='Searcj Work' /> */}
            <ul className=' navlink hidden md:flex bg-[#fff] text-black rounded-[1.5rem] px-4 py-1   gap-3 justify-center items-center font-semibold text-[1rem] '>
                <li><NavLink className={({isActive})=> isActive?"bg-[#1EA1CF] py-1 px-2 rounded-[0.2rem] text-white ":""} to="/" >Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"bg-[#1EA1CF] py-1 px-2 rounded-[0.2rem] text-white ":""} to="registerlabour" >Register Labour</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"bg-[#1EA1CF] py-1 px-2 rounded-[0.2rem] text-white ":""} to="postjob">Post Job</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"bg-[#1EA1CF] py-1 px-2 rounded-[0.2rem] text-white ":""} to="findlabour" >Find Labours</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"bg-[#1EA1CF] py-1 px-2 rounded-[0.2rem] text-white ":""} to="viewjobs" >View Jobs</NavLink></li>

            </ul>
            <div className=' flex gap-3 ' >
                <button onClick={()=>setLang(!lang)}   className=' hidden md:block py-1 px-2 bg-[#fff] hover:bg-transparent hover:text-white transition-all ease-in-out duration-500 border-2 border-solid border-[#fff] text-black font-semibold rounded-[0.2rem] cursor-pointer ' >{lang ? "English🌐" : "Hindi🌐"}</button>
                <button   className=' py-1 px-2 bg-[#fff] hover:bg-transparent hover:text-white transition-all ease-in-out duration-500 border-2 border-solid border-[#fff] text-black font-semibold rounded-[0.2rem] cursor-pointer ' ><NavLink to="login" >Login</NavLink></button>
                <button   className=' py-1 px-2 bg-[#fff] hover:bg-transparent hover:text-white transition-all ease-in-out duration-500 border-2 border-solid border-[#fff] text-black font-semibold rounded-[0.2rem] cursor-pointer ' ><NavLink to="signup" >Signup</NavLink></button>
            </div>
            <button onClick={() => setMenuopen(!menuopen)} className=' sm:hidden  text-[1.5rem] ' ><i class="fa-solid fa-bars"></i></button>
            {menuopen && (
                <div className="absolute top-[15vh] left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-6 shadow-lg md:hidden">
                    <li className="list-none cursor-pointer">Home</li>
                    <li
                        onClick={() => {
                            setRegshow(true);
                            setMenuopen(false);
                        }}
                        className="list-none cursor-pointer"
                    >
                        Register Labour
                    </li>
                    <li className="list-none cursor-pointer">Post Job</li>
                    <li
                        onClick={() => {
                            setFindShow(true);
                            setMenuopen(false);
                        }}
                        className="list-none cursor-pointer"
                    >
                        Find Labours
                    </li>
                    <li className="list-none cursor-pointer">View Jobs</li>

                    {/* Buttons in mobile */}
                    <button
                        onClick={() => setLang(!lang)}
                        className="py-1 px-4 w-[80%] bg-[#1EA1CF] text-white font-semibold rounded-md cursor-pointer"
                    >
                        {lang ? "English🌐" : "Hindi🌐"}
                    </button>
                    <button
                         
                        className="py-1 px-4 w-[80%] bg-[#1EA1CF] text-white font-semibold rounded-md cursor-pointer"
                    >
                        <NavLink to="login" >Login</NavLink>
                    </button>
                    <button
                        className="py-1 px-4 w-[80%] bg-[#1EA1CF] text-white font-semibold rounded-md cursor-pointer">
                        <NavLink to="signup" >Sign up</NavLink>
                    </button>
                </div>
            )}

        </nav>
          

        {/* Register Labour */}
        {/* <Workers workers={workers} setWorkers={setWorkers} regshow={regshow} setRegshow={setRegshow} /> */}
        {/* Find Labour */}
        {/* <Find workers={workers} findShow={findShow} setFindShow={setFindShow} /> */}
    </>
}

export default Navbar