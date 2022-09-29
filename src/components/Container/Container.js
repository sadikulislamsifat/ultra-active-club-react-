import React, { useEffect, useState } from 'react';
import './Container.css'
import Card from './Cards/Card/Card';
import Excerse from './Summary/Exercise/Excerse';
import profile from '../../profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLocation, faLocationArrow, faLocationDot, faMap } from '@fortawesome/free-solid-svg-icons';
import Summary from './Summary/Summary';

const Container = () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState(0);
    
    // console.log(details)

    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[]);

    const handleAddToList = (card) => {
        // console.log(card);
       setDetails(card.time + details)
    }
    return (
        <div className='main-container'>
          
          <div className='p-2 md:p-7  lg:p-12 bg-gray-200'>
             <div>
            
              <p className='mt-3 font-bold text-xl'>Select today's ecercise</p> 
                </div> 
                <div className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        cards.map((card , index) => <Card card={card}
                        handleAddToList={handleAddToList} key={index} />)
                    }
                </div>      
        </div>
        <div>
        {/* <div className='p-2 md:p-5 summary-container  bg-white'>
            <div className="profile  flex items-center">
                <img className='w-16 h-16 rounded-full' src={profile} alt="" />
                <div className='ml-1 md:ml-3'>
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
                
            </div>

            <div>
            <div>
            <h1 className='font-bold mt-8  text-xl'>Exercise Details</h1>
            <div className='bg-gray-200 mt-4 p-1 md:p-3  rounded-md flex justify-between'>
                <p><span className="font-bold">Exercise time</span> </p>
                <p><small>{details.length} seconds</small></p>
               </div>
            <div className='bg-gray-200 mt-3 p-1 md:p-4 rounded-md flex justify-between'>
                <p><span className="font-bold">Break time</span> </p>
                <p><small>200 seconds</small></p>
               </div>
        </div>
            </div>
            <div className='mt-8'>
                <button className="btn btn-primary w-full">Activity Completed</button>
            </div>

        </div> */}
        <Summary details={details} />
        </div>
            
            
        </div>
    );
};

export default Container;