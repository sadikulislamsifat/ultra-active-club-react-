import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import Summary from './Summary/Summary';
import './Container.css'
import Card from './Cards/Card/Card';

const Container = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[]);

    const handleAddToList = (card) => {
        console.log(card)
    }
    return (
        <div className='main-container'>
          
          <div className='p-2 md:p-8 lg:p-14 bg-gray-200'>
             <div>
             <h1 className='text-2xl font-bold text-blue-500'>ULTRA-ACTIVE-CLUB</h1>  
              <p className='mt-5 font-bold text-xl'>Select today's ecercise</p> 
                </div> 
                <div className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        cards.map((card , index) => <Card card={card}
                        handleAddToList={handleAddToList} key={index} />)
                    }
                </div>      
        </div>
            <Summary />
            
        </div>
    );
};

export default Container;