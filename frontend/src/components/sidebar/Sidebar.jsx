import React from 'react';
import Tracker from './Tracker';
import ProfileCard from './ProfileCard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 h-full bg-red-600 text-white w-96">
    <div className=' flex flex-col h-full justify-between'>
      <div className='flex align-top flex-col'>
        <ProfileCard name={"Jonas Dej"} university={"University of Cambridge"} imageUrl={"https://via.placeholder.com/150"} />      
        <Tracker category = {"Tuition"} init={1000} current={400} money={"GBP"}/>
        <Tracker category = {"Accomodation"} init={1000} current={500} money={"GBP"}/>
        <Tracker category = {"Living Expenses"} init={1000} current={500} money={"GBP"}/>
      </div>
      <div className="flex align-middle justify-center my-10">
        <button className="w-2/3 rounded-full shadow font-bold text-xl bg-black" onClick={() => navigate("/settings")}><SettingsIcon /><span className='ml-2'>Settings</span></button>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
