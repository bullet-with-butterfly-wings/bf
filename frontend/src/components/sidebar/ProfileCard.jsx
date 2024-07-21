import React from 'react';
//import styles from './Sidebar.module.css';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const ProfileCard = ({ name, university, imageUrl}) => {
    return (
      <div className="flex items-center justify-center rounded-lg max-w-md my-10">
        <div className="flex-shrink-0 justify-start">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="m-4">
          <h1 className="text-xl font-semibold">{name}</h1>
          <h2 className="text-xl font-semibold">{university}</h2>
        </div>
        
      </div>
    );
  };

export default ProfileCard;