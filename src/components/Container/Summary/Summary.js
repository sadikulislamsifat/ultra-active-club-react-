import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import profile from '../../../profile.jpeg';
import './Summary.css';
import Swal from 'sweetalert2'

const Summary = ({details}) => {
    const [times , setTimes] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setTimes(data))
    },[times])

    const breakTime = (e) => {
        console.log(e)
        localStorage.setItem("time", e);

    }
    const Toast = () => {
        Swal.fire(
            'Good job!',
            'You clicked the  button!',
            'success'
          )
    }

    const timeBreak = localStorage.getItem("time");
    console.log(details)
    const {time} = details;

    return (
        <div className='p-2 md:p-5 summary-container  bg-white'>
            <div className="profile  flex items-center md:justify-between lg:justify-start">
                <img className='w-14 h-14 rounded-full' src={profile} alt="" />
                <div className='ml-3 md:ml-1 lg:ml-4'>
                    <h1 className='font-bold text-sm md:text-xl'>Sadikul Islam</h1>
                    
                    <p className='text-gray-400'><FontAwesomeIcon icon={faLocationDot} /><small className='ml-1'>Dhaka, Bangladesh</small></p>
                </div>

            </div>
            <div className='bg-gray-200 grid grid-cols-3 p-1 md:p-3 mt-8 rounded-md'>
                <div>
                    <h1><span className="font-bold">75</span><small>kg</small></h1>
                    <p><small>Weight</small></p>
                </div>
                <div>
                    <h1 className='font-bold'>6.5</h1>
                    <p><small>Height</small></p>
                </div>
                <div>
                    <h1><span className="font-bold">75</span><small>yrs</small></h1>
                    <p><small>Age {}</small></p>
                </div>
                
            </div>
            <h1 className="font-bold mt-8 text-xl">Add A Break</h1>
            <div>
                <button onClick={(e) => breakTime(e.target.innerText)}><p className=' bg-gray-500 text-white  btn-outline rounded-lg p-2 md:p-2 ml-1 mt-1'>10s</p></button>
                <button onClick={(e) => breakTime(e.target.innerText)}><p className=' bg-gray-500 text-white  btn-outline rounded-lg p-2 md:p-2 ml-1 mt-1'>15s</p></button>
                <button onClick={(e) => breakTime(e.target.innerText)}><p className=' bg-gray-500 text-white  btn-outline rounded-lg p-2 md:p-2 ml-1 mt-1'>20s</p></button>
                <button onClick={(e) => breakTime(e.target.innerText)}><p className=' bg-gray-500 text-white  btn-outline rounded-lg p-2 md:p-2 ml-1 mt-1'>25s</p></button>
                <button onClick={(e) => breakTime(e.target.innerText)}><p className=' bg-gray-500 text-white  btn-outline rounded-lg p-2 md:p-2 ml-1 mt-1'>30s</p></button>
                
            </div>

            <div>
            <div>
            <h1 className='font-bold mt-8  text-xl'>Exercise Details</h1>
            <div className='bg-gray-200 mt-4 p-1 md:p-3  rounded-md flex justify-between'>
                <p><span className="font-bold">Exercise time</span> </p>
                <p><small>{details} seconds</small></p>
               </div>
            <div className='bg-gray-200 mt-3 p-1 md:p-4 rounded-md flex justify-between'>
                <p><span className="font-bold">Break time</span> </p>
                <p><small>{timeBreak} seconds</small></p>
               </div>
        </div>
            </div>
            <div className='mt-8'>
                <button onClick={Toast} className="btn btn-primary w-full">Activity Completed</button>
            </div>

        </div>
    );
};

export default Summary;