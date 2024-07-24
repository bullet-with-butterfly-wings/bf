import React from 'react';
import Table from './table/Table';
import { Stack } from '@mui/material';
import Sidebar from './sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

function Base(){
    const navigate = useNavigate();
    return (
        <div className="not">    
            <Sidebar />
            <div className='flex flex-col ml-96 justify-between'>
            <div className='flex mx-20 flex-col'>
            <div className='flex justify-between my-20'>
                <h1 className='text-center mb-7'>Payment Requests</h1>
                <button onClick={() => {navigate("/new-pr")}} className='bg-red-600 text-white font-bold py-2 px-4 rounded-xl'>Make new payment request</button>
            </div>
                <Table />
            </div>
            </div>
        </div>

    );
};

export default Base;
