import React from 'react';
import profile from '../../../profile.jpeg'

const Summary = () => {
    return (
        <div className='p-5'>
            <div className="profile  flex items-center">
                <img className='w-16 h-16 rounded-full' src={profile} alt="" />
                <div className='ml-3'>
                    <h1 className='font-bold'>Sadikul Islam</h1>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>

            </div>
            <div className='bg-gray-200 grid grid-cols-3 p-3 mt-8 rounded-md'>
                <div>
                    <h1 className="font-bold">75<small>kg</small></h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1 className="font-bold">6.5</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1 className="font-bold">25<small>yrs</small></h1>
                    <p>Age</p>
                </div>
                
            </div>
        </div>
    );
};

export default Summary;