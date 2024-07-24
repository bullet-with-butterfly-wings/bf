// src/HomePage.js
import React from 'react';
import Table from './table/Table';
import { Stack } from '@mui/material';
import Sidebar from './sidebar/Sidebar';

function Base(){
    return (
        <div className="not">    
            <Sidebar />
            <div className='flex flex-col ml-96 justify-between'>
                <h1 className='text-center mb-7'>Expenses</h1>
                <Table />
            </div>
        </div>

    );
};

export default Base;
