import React, { useState } from 'react'

function Find({ findShow, setFindShow, workers }) {
    const [search, setSearch] = useState("");

    // Filter workers by name, location, skills, etc.
    const filteredWorkers = workers.filter(worker =>
        worker.name.toLowerCase().includes(search.toLowerCase()) ||
        worker.location.toLowerCase().includes(search.toLowerCase()) ||
        worker.skills.toLowerCase().includes(search.toLowerCase())
    );

    return <>
        {
            findShow && (
                <div className=' w-[100vw] h-[100vh] flex flex-col  bg-[#fff] fixed top-0 z-55 p-2 ' >
                    <p onClick={() => setFindShow(false)} className=' ml-[95%] mt-[0px] cursor-pointer text-[1.5rem] '>❌</p>
                    <div className='border border-[#fff] w-full h-[100%] p-2 rounded-[0.5rem] '>
                        <div className='w-full h-[10%] flex justify-center gap-3 flex-col items-center '>
                            <h1 className='text-[2rem] font-bold text-center ' >Worker's List</h1>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder='Search Workers'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className=' w-[20%] border-2 border-[#1EA1CF] py-2 px-2 rounded-[0.5rem] outline-none transition-all duration-500 ease-in-out hover:w-[30%] '
                            />
                        </div>
                        <div className=' conta w-full h-[90%] p-2 flex flex-wrap justify-center items-center gap-2 bg-[#ffffffbe] ' >
                            {
                                filteredWorkers.length === 0 ? (
                                    <p>No matching workers found!</p>
                                ) : (
                                    filteredWorkers.map((worker, index) => (
                                        <div key={index} className=' w-[20%] h-[300px] bg-[#fff] gap-1 rounded-[0.5rem] shadow-sm flex flex-col justify-center p-3 ' >
                                            <h3 className='text-[1.2rem] font-semibold'>{worker.name}</h3>
                                            <p><span className='text-[#1EA1CF] font-semibold'>Age</span> : {worker.age}</p>
                                            <p><span className='text-[#1EA1CF] font-semibold'>Gender</span> : {worker.gender}</p>
                                            <p><span className='text-[#1EA1CF] font-semibold'>Location</span> : {worker.location}</p>
                                            <p><span className='text-[#1EA1CF] font-semibold'>Skills</span> : {worker.skills}</p>
                                            <p><span className='text-[#1EA1CF] font-semibold'>Wage</span> : {worker.wage}</p>
                                            <p><span className='text-[#1EA1CF] font-semibold'>Number</span> : {worker.number}</p>
                                            <div className='flex justify-center gap-2 '>
                                                <button className=' w-[40%] bg-[#1EA1CF] text-[0.9rem] text-white font-semibold rounded-[0.2rem] cursor-pointer'>
                                                <a href={`tel:${worker.number}`}>Call Now</a>
                                            </button>
                                            <button className=' w-[40%] bg-green-500 text-white text-[0.9rem] font-semibold rounded-[0.2rem] cursor-pointer'>
                                                <a href={`https://wa.me/${worker.number}`} target="_blank" rel="noopener noreferrer">
                                                    WhatsApp Now
                                                </a>
                                            </button>
                                            </div>

                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
    </>
}

export default Find
