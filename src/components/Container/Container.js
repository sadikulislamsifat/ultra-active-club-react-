import React from 'react';
import Cards from './Cards/Cards';
import Summary from './Summary/Summary';
import './Container.css'

const Container = () => {
    return (
        <div className='main-container'>
          
            <Cards />
            <Summary />
            
        </div>
    );
};

export default Container;