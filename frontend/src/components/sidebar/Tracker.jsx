import React from 'react';

function Tracker(){
  return (
    <div className='h-40'>
        <h1 className='text-xl m-4 text-'>Tracker</h1>
        <div className="flex direction-row justify-center items-center">
            <div className = "bg-white m-1 rounded-md w-10/12">
                <div className = "bg-gray-900 h-full w-3/6 text-center rounded-md">
                <span className = "text"> 60% </span>
                </div>
            </div>
            <p className='text-center'>
                20 %
            </p>
        </div>
    </div>
    );
};

export default Tracker;