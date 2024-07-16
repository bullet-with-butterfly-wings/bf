import React from 'react';
import Tracker from './Tracker';
//import styles from './Sidebar.module.css';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-red-600 text-white w-96 flex flex-col justify-center content-between">
      <Tracker />
      <Tracker />
      <Tracker />
    </div>
  );
};

export default Sidebar;
