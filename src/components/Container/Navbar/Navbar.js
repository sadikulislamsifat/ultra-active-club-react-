import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mb-3">
  <a className="btn btn-ghost  text-2xl font-bold text-blue-500"><FontAwesomeIcon icon={faDumbbell} /><span className='ml-5'> ULTRA-ACTIVE-CLUB</span></a>
</div>
        </div>
    );
};

export default Navbar;