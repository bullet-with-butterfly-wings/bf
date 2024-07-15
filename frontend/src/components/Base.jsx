// src/HomePage.js
import React from 'react';
import { Stack } from '@mui/material';
import Sidebar from './Sidebar';
import List from './List';

function Base(){
    return (
        <>
            <Sidebar />
            <List />
        </>
    );
};

export default Base;
