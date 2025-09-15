import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Post({jobs,setJobs}) {  
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        skills: "",
        wage: "",
        number: "",
        date: "",
        enddate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setJobs([...jobs, formData]);
        console.log("All Jobs:", jobs, "New Job:", formData);
        setFormData({
            title: "",
            description: "",
            location: "",
            skills: "",
            wage: "",
            number: "",
            date: "",
            enddate: "",
        });
        alert("Job Posted Successfully ✅"); 
        // reset();
    };

    return (
        <div className="w-full mt-[15vh] p-4 flex flex-col gap-6 justify-center items-center">
            {/* Job Post Form */}
            <form
                onSubmit={handleSubmit}
                className="border shadow-md bg-white sm:w-[40%] w-full flex flex-col gap-3 p-4 sm:rounded-2xl rounded-xl"
            >
                <h1 className="text-xl font-bold text-center uppercase">Post Job</h1>
                <h2 className="text-sm font-semibold text-center text-gray-600">
                    Looking for reliable workers? Post your job here and connect with skilled workers near you.
                </h2>

                <input
                    value={formData.title}
                    onChange={handleChange}
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    required
                    className="border rounded-lg p-2 w-full"
                />

                <textarea
                    value={formData.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Short Description"
                    required
                    className="border rounded-lg p-2 w-full min-h-[80px]"
                />

                <input
                    value={formData.location}
                    onChange={handleChange}
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                    required
                    className="border rounded-lg p-2 w-full"
                />

                <p className="font-medium">Work Details</p>
                <select
                    value={formData.skills}
                    onChange={handleChange}
                    name="skills"
                    className="border rounded-lg p-2 w-full"
                    required
                >
                    <option value="">--Select Skills--</option>
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
                    type="number"
                    name="wage"
                    placeholder="Daily Wages (₹)"
                    required
                    className="border rounded-lg p-2 w-full"
                />

                <p className="font-medium">Contact Details</p>
                <input
                    value={formData.number}
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    placeholder="Mobile Number"
                    pattern="[0-9]{10}"
                    required
                    className="border rounded-lg p-2 w-full"
                />

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex flex-col w-full">
                        <label htmlFor="date" className="text-sm font-medium">Start Date</label>
                        <input
                            value={formData.date}
                            onChange={handleChange}
                            type="date"
                            name="date"
                            required
                            className="border rounded-lg p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="enddate" className="text-sm font-medium">End Date</label>
                        <input
                            value={formData.enddate}
                            onChange={handleChange}
                            type="date"
                            name="enddate"
                            className="border rounded-lg p-2"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-[#1EA1CF] text-white w-[60%] mx-auto rounded-xl py-2 px-4 font-semibold cursor-pointer border-2 border-[#1EA1CF] transition-all duration-300 hover:text-black hover:bg-transparent"
                >
                    Post Job
                </button>
            </form>

            {/* Job Cards */}
           
        </div>
    );
}

export default Post;
