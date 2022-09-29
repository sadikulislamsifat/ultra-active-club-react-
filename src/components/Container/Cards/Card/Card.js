import React from 'react';


const Card = ({card}) => {
    const {about, age, name, picture, time} = card;
    return (
        <div>
            <div className="card p-2 h-full bg-base-100 shadow-xl">
  <figure><img className='w-full rounded-md' src='https://placeimg.com/400/225/arch' alt="Shoes" /></figure>
  <div className="card-body p-4 pt-7">
    <h2 className="card-title">{name}!</h2>
    <p> {about.slice(0, 140)}... </p>
    <p className='font-bold'>For Age: {age}</p>
    <p className='font-bold'>Time required: {time}s</p>
    <div className=" mt-3">
      <button className="btn btn-primary w-full">Add to list</button>
    </div>
  </div>
</div>
      
        </div>
    );
};

export default Card;