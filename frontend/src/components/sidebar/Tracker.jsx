import React from 'react';

function Tracker({category, init, current, money}) {
  return (
    <div className='h-40'>
        <h1 className='text-xl m-4 text-'>{category}</h1>
        <div className="flex direction-row justify-center items-center">
            <div className = "bg-white m-1 rounded-md w-10/12">
                <div style = {{width: `${Number(current)/Number(init)*100}%`}} className = "bg-gray-900 h-full text-center rounded-md">
                <span className = "text"> {Number(current)/Number(init)*100}% </span>
                </div>
            </div>
            <p className='text-center'>
                {current} / {init} {money}
            </p>
        </div>
    </div>
    );
};

export default Tracker;