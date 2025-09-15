import React, { useState } from 'react';

const ViewJob = ({ jobs }) => {
  const [search, setSearch] = useState("");

  // ✅ Proper filtering
  const filteredWorkers = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase()) ||
    job.skills.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sm:mt-[15vh]">
      {/* 🔍 Search Section */}
      <div className="w-full sm:h-auto flex justify-center sm:gap-3 gap-1.5 flex-col items-center">
        <h1 className="sm:text-[2rem] text-[1.5rem] font-bold text-center">Jobs</h1>
        <input
          type="search"
          placeholder="Search Jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:w-[20%] w-[90%] border-2 border-[#1EA1CF] py-2 px-2 rounded-[0.5rem] outline-none transition-all duration-500 ease-in-out sm:hover:w-[30%]"
        />
      </div>

      {/* 📄 Job Cards Section */}
      <div className="w-full flex flex-wrap justify-center gap-4 p-4">
        {filteredWorkers.length === 0 ? (
          <p className="text-center text-gray-600">No Jobs Posted!</p>
        ) : (
          filteredWorkers.map((job, index) => (
            <div
              key={index}
              className="hover:scale-[1.1] transition-all duration-500 border p-4 rounded-xl shadow-md w-[250px] h-auto flex flex-col gap-2 bg-white"
            >
              <h1 className="text-lg font-bold">{job.title}</h1>
              <p className="text-sm text-gray-700">{job.description}</p>
              <p className="text-sm font-medium">📍 {job.location}</p>
              <p className="text-sm">💰 ₹ {job.wage}</p>
              <p className="text-sm">📞 {job.number}</p>
              <p className="text-xs text-gray-500">
                🗓 {job.date} {job.enddate && `- ${job.enddate}`}
              </p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full w-fit">
                {job.skills}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewJob;
