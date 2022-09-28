import React, { useEffect, useState } from 'react';
import Card from './Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className='p-14 bg-gray-200'>
             <div>
             <h1 className='text-2xl font-bold text-blue-500'>ULTRA-ACTIVE-CLUB</h1>  
              <p className='mt-5 font-bold'>Select today's ecercise</p> 
                </div> 
                <div className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        cards.map((card , index) => <Card card={card} key={index} />)
                    }
                </div>      
        </div>
    );
};

export default Cards;