import React, { useEffect, useState } from 'react';
import './Container.css'
import Card from './Cards/Card/Card';

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
        
        <Summary details={details} />
        </div>
            
            
        </div>
    );
};

export default Container;