import React from 'react';
import Tracker from './Tracker';
import ProfileCard from './ProfileCard';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const hello = () => {console.log("Settings")};
  return (
    <div className="fixed top-0 left-0 h-full bg-red-600 text-white w-96 flex flex-col align-top content-between">
      <ProfileCard name={"Jonas Dej"} university={"University of Cambridge"} imageUrl={"https://via.placeholder.com/150"} />      
      <Tracker />
      <Tracker />
      <Tracker />
      <div className='fixed bottom-10 w-96'>
      <div className="flex align-middle justify-center">
        <button className="w-2/3 rounded-full font-bold shadow" onClick={hello}><SettingsIcon /><span className='ml-2'>Settings</span></button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
