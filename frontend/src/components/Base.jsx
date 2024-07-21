// src/HomePage.js
import React from 'react';
import Table from './table/Table';
import { Stack } from '@mui/material';
import Sidebar from './sidebar/Sidebar';

function Base(){
    return (
        <div className="fixed h-full w-full">
        <div className="flex h-full w-full flex-col justify-center align-middle">    
            <Sidebar />
            <div className='fixed top-0 left-96'>
            <div className='flex flex-col w-full justify-between'>
                <h1 className='text-center'>Expenses</h1>
                <Table />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Base;
