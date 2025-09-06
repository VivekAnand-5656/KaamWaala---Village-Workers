import React, { useState } from 'react'

function Workers({ regshow, setRegshow, workers, setWorkers }) {
    
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        location: "",
        skills: "",
        wage: "",
        number: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkers([...workers, formData]);
        console.log("All Workers ", workers, "NEw Worker", formData);
        setFormData({
            name: "",
            age: "",
            gender: "",
            location: "",
            skills: "",
            wage: "",
            number: "",
        });
        setRegshow(false)
        alert("Register Successfully ✅");
    }
    return <>
        {
            regshow && (
                <div className=' w-[100vw] h-[100vh] flex justify-center items-center  bg-[#0afff360] fixed top-0 z-55 ' >
                    <form onSubmit={handleSubmit} action="" className=' register w-[40%] h-[100%] mx-auto flex flex-col py-1 px-5 rounded-[1rem]  ' >
                        <p onClick={() => setRegshow(false)} className=' ml-[90%]  cursor-pointer text-[1rem] '>❌</p>
                        <h1 className='text-[1.2rem] font-bold text-center uppercase ' >Register</h1>
                        <p >Basic Details</p>
                        <div className='flex justify-between items-center gap-2' >
                            <input
                                value={formData.name}
                                onChange={handleChange}
                                type="text" name='name' placeholder='Full Name' required />
                            <input
                                value={formData.age}
                                onChange={handleChange}
                                type="number" name='age' placeholder='Age' required />
                        </div>
                        <select
                            value={formData.gender}
                            onChange={handleChange}
                            name="gender" id="">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                    </select>
                    <input
                        value={formData.location}
                        onChange={handleChange}
                        type="text" id='location' name='location' placeholder='Enter your location' required />
                    <p>Work Details</p>
                    <select
                        value={formData.skills}
                        onChange={handleChange}
                        name="skills" id="skills">
                        <option value="">--Skills--</option>
                        <option value="Home Labour">Home Labour</option>
                        <option value="Farming Helper">Farming Helper</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Mason">Mason</option>
                        <option value="Painter">Painter</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        value={formData.wage}
                        onChange={handleChange}
                        type="text" name='wage' placeholder='Daily Wages (majdoori)' required />
                    <p>Contact Details</p>
                    <input
                        value={formData.number}
                        onChange={handleChange}
                        type="tel" name="number" id="" placeholder='9856748596' required />
                    {/* <input 
                        value={formData.fileUpload}
                        onChange={handleChange}
                        type="file" name="fileUpload" id="fileUpload" accept="image/*"     /> */}
                    <button type='submit' className='bg-[#1EA1CF] text-white w-[40%] mx-auto rounded-[0.5rem] py-1 px-2 font-semibold cursor-pointer border-2 border-[#1EA1CF] transition-all duration-500 ease-in-out hover:text-black hover:border-2 hover:bg-transparent ' >Register</button>
                </form>
                </div >
            )
}
    </>
}

export default Workers