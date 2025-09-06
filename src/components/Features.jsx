import React from 'react'

function Features() {
    return <>
        <h1 className='text-[2rem]  text-center font-bold ' >Features</h1>
        <div className=' sm:w-[80%] w-[100%] sm:h-[80vh] h-[50vh] mx-auto bg-[#ECF7FB] mt-[100px] rounded-[1.5rem] p-4 flex flex-wrap justify-center items-center gap-2 ' >
            <div className=' top-0  sm:w-[150px] w-[50px] sm:h-[150px] sm:block hidden mt-[-150px] bg-[#1EA1CF] rounded-[50%]  ' ></div>
            <div className='w-full flex flex-wrap gap-3 sm:justify-center justify-between '>
                <div className=' feature '>
                    <h1>Register Labour</h1>
                </div>
                <div className=' feature '>
                    <h1>Post Job</h1>
                </div>
                <div className=' feature '>
                    <h1>Find Labours (Search & Filter)</h1>
                </div>
                <div className=' feature '>
                    <h1>View Jobs</h1>
                </div>
                <div className=' feature '>
                    <h1>Featured Section</h1>
                </div>
                <div className=' feature '>
                    <h1>Multi-Language Support (Hindi + English) 🌐</h1>
                </div>
            </div>
        </div>
    </>
}

export default Features