import React, { useState } from 'react'
import Workers from './Workers';
import Find from './Find';

function Navbar() {
    const [show, setShow] = useState(false);
    const [sinShow, setSinShow] = useState(false);
    const [pshow, setPshow] = useState(false);
    const [lang, setLang] = useState(false);
    const [menuopen, setMenuopen] = useState(false);
    // ------ Register -------
    const [regshow, setRegshow] = useState(false);
    const [workers, setWorkers] = useState([]);
    // ------ Find Labour ----
    const [findShow, setFindShow] = useState(false);

    return <>
        {/* <div className='flex flex-col justify-center items-center' > */}
        <nav className=' w-full sm:h-[15vh] h-[10vh] fixed top-0 bg-[#1EA1CF] flex justify-between items-center p-2 text-white z-55 '>
            <h1 className=' text-2xl font-bold  ' >KaamWala</h1>
            {/* <input type="search" name='search' className='border w-[10%] h-[80%] transition-all ease-in-out duration-500 hover:w-[25%] rounded-[0.5rem] outline-none px-2 ' placeholder='Searcj Work' /> */}
            <ul className=' navlink hidden md:flex bg-[#fff] text-black rounded-[1.5rem] px-3 py-1   gap-3 justify-center items-center font-semibold text-[1rem] '>
                <li>Home</li>
                <li onClick={() => setRegshow(!regshow)} >Register Labour</li>
                <li>Post Job</li>
                <li onClick={() => setFindShow(!findShow)} >Find Labours</li>
                <li>View Jobs</li>
            </ul>
             <div className=' flex gap-3 ' >
                <button onClick={() => setLang(!lang)} className='hidden md:block py-1 px-2 bg-[#fff] hover:bg-transparent hover:text-white transition-all ease-in-out duration-500 border-2 border-solid border-[#fff] text-black font-semibold rounded-[0.2rem] cursor-pointer ' >{lang ? "English🌐" : "Hindi🌐"}</button>
                <button onClick={() => setShow(!show)} className=' py-1 px-2 bg-[#fff] hover:bg-transparent hover:text-white transition-all ease-in-out duration-500 border-2 border-solid border-[#fff] text-black font-semibold rounded-[0.2rem] cursor-pointer ' >Login</button>
                <button onClick={() => setSinShow(!sinShow)} className=' py-1 px-2 bg-[#fff] hover:bg-transparent hover:text-white transition-all ease-in-out duration-500 border-2 border-solid border-[#fff] text-black font-semibold rounded-[0.2rem] cursor-pointer ' >Signup</button>
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
                        onClick={() => setShow(!show)}
                        className="py-1 px-4 w-[80%] bg-[#1EA1CF] text-white font-semibold rounded-md cursor-pointer"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setSinShow(!sinShow)}
                        className="py-1 px-4 w-[80%] bg-[#1EA1CF] text-white font-semibold rounded-md cursor-pointer"
                    >
                        Signup
                    </button>
                </div>
            )}
           
        </nav>
        {/* ---- Login ---- */}
        {
            show && (
                <div className='w-[100vw] h-[100vh] fixed z-55 bg-[#11fcec5c] flex justify-center items-center ' >
                    <form action="submit" className='forms   relative  sm:w-[30%] w-[80%] sm:h-[80vh] h-[60%] mx-auto flex flex-col justify-center items-center gap-2.5 rounded-[0.5rem] bg-[#fff] shadow-2xl p-3 sm:mt-[15vh] sm:ml-[35%] ' >
                        <p onClick={() => setShow(false)} className=' sm:ml-[95%] ml-[95%] sm:mt-[-90px] mt-[-50px] cursor-pointer text-[1.5rem] '>❌</p>
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
                        <p>don't have an account ? <a href="" className='text-[#2407e2] font-semibold ' >Sign Up</a></p>
                    </form>
                </div>
            )
        }
        {/* Signup */}
        {
            sinShow && (
                <div className='w-[100vw] h-[100vh] fixed z-55 bg-[#11fcec5c] flex sm:justify-normal sm:justify-items-normal justify-center items-center ' >
                    <form action="submit" className='forms   sm:w-[30%] w-[80%]  sm:h-[80vh] h-[70%] flex flex-col justify-center items-center gap-2.5 rounded-[0.5rem] bg-[#fff] shadow-2xl p-3 sm:mt-[15vh] sm:ml-[35%] ' >
                        <p onClick={() => setSinShow(false)} className=' ml-[95%] mt-[-90px] cursor-pointer text-[1.5rem] '>❌</p>
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
                        <p>already have an account ? <a href="" className='text-[#2407e2] font-semibold ' >Log in</a></p>
                    </form>
                </div>
            )
        }
        {/* Register Labour */}
        <Workers workers={workers} setWorkers={setWorkers} regshow={regshow} setRegshow={setRegshow} />
        {/* Find Labour */}
        <Find workers={workers} findShow={findShow} setFindShow={setFindShow} />
    </>
}

export default Navbar