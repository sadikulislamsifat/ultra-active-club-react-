import React from 'react';
import profile from '../../../profile.jpeg'
import Excerse from './Exercise/Excerse';
import './Summary.css';

const Summary = () => {
    return (
        <div className='p-5 summary-container  bg-white'>
            <div className="profile  flex items-center">
                <img className='w-16 h-16 rounded-full' src={profile} alt="" />
                <div className='ml-3'>
                    <h1 className='font-bold'>Sadikul Islam</h1>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>

            </div>
            <div className='bg-gray-200 grid grid-cols-3 p-3 mt-8 rounded-md'>
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
                    <p><small>Age</small></p>
                </div>
                
            </div>
            <h1 className="font-bold mt-8">Add A Break</h1>
            <div>
                
            </div>

            <div>
                <Excerse />
            </div>
            <div className='mt-8'>
                <button className="btn btn-primary w-full">Activity Completed</button>
            </div>

        </div>
    );
};

export default Summary;