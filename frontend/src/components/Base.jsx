import React, { useState } from 'react';
import Table from './table/Table';
import Sidebar from './sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

function Base(){
    const navigate = useNavigate();
    const data = [
        { name:"lent", category: 'Food', date: '2024-07-20', amount: '$50', attachment: 'https://via.placeholder.com/150' },
        { name:"lent", category: 'Travel', date: '2024-07-19', amount: '$300', attachment: null },
        { name:"lent", category: 'Utilities', date: '2024-07-18', amount: '$100', attachment: 'https://via.placeholder.com/150' },
        { name:"lent", category: 'Food', date: '2024-07-20', amount: '$50', attachment: 'https://via.placeholder.com/150' },
      ];
    return (
        <div className="not">    
            <Sidebar />
            <div className='flex flex-col ml-96 justify-between'>
            <div className='flex mx-20 flex-col'>
            <div className='flex justify-between my-20'>
                <h1 className='text-center mb-7'>Payment Requests</h1>
                <button onClick={() => {navigate("/new-pr")}} className='bg-red-600 text-white font-bold py-2 px-4 rounded-xl'>Make new payment request</button>
            </div>
                <Table data={data}/>
            </div>
            </div>
        </div>

    );
};

export default Base;
