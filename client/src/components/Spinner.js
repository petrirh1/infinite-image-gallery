import React from 'react';
import './css/Spinner.css';

const Spinner = () => {
  return (
    <div className='loading-spinner'>
      <div className='circle'></div>
      <div className='circle'></div>
    </div>
  );
};

export default Spinner;
