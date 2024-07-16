// src/HomePage.js
import React from 'react';
import { Stack } from '@mui/material';
import Sidebar from './sidebar/Sidebar';
import List from './List';

function Base(){
    return (
        <div className='flex'>
            <Sidebar />
            
        </div>
    );
};

export default Base;
