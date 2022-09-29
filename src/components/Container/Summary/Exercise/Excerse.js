import React from 'react';

const Excerse = () => {
    return (
        <div>
            <h1 className='font-bold mt-8 text-2xl'>Exercise Details</h1>
            <div className='bg-gray-200 mt-4 p-4 rounded-md flex justify-between'>
                <p><span className="font-bold">Exercise Time</span> </p>
                <p><small>200 seconds</small></p>
               </div>
            <div className='bg-gray-200 mt-3 p-4 rounded-md flex justify-between'>
                <p><span className="font-bold">Break time</span> </p>
                <p><small>200 seconds</small></p>
               </div>
        </div>
    );
};

export default Excerse;