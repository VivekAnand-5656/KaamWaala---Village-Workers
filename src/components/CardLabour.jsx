import React from 'react'
// import img2 from './images/components/profile.jpg'
 

function CardLabour({prof}) {
  return (
    <div className='cards sm:w-[18%] w-[50%] p-2 rounded-[1rem] ' >
        <img src={prof} className='w-[100%] rounded-[0.5rem]  ' alt="" />
        <h1 className='font-semibold' >Name : Karan Yadav</h1>
        <p>Work : Farming Helper</p>
        <p>Wage : ₹400/day</p>
        <p>Location: Village Rampur</p>
        <p>Contact: +91 9876543210</p>
    </div>
  )
}

export default CardLabour