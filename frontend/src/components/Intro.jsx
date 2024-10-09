// src/HomePage.js
import React from 'react';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

function Settings(){
    const navigate = useNavigate();
    const items = ["tuition", "accommodation", "livingExpenses"];
    const [formData, setFormData] = useState({
        nameUser: '',
        uni: '',
        idNumber: '',
        tuition_now: 0,
        tuitionInitial: 0,
        tuitionCurrency: "",
        accommodation_now: 0,
        accommodationInitial: 0,
        accommodationCurrency: "",
        livingExpenses_now: 0,
        livingExpensesInitial: 0,
        livingExpensesCurrency: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({
            nameUser: '',
            uni: '',
            idNumber: '',
            tuition_now: 0,
            tuitionInitial: 0,
            tuitionCurrency: "",
            accommodation_now: 0,
            accommodationInitial: 0,
            accommodationCurrency: "",
            livingExpenses_now: 0,
            livingExpensesInitial: 0,
            livingExpensesCurrency: "",
          });
      };
    return (
        <div className="not">    
            <Sidebar />
            <div className='flex flex-col ml-96 mt-20 justify-center'>
                <div className='flex mx-20 flex-col'>
                <h1 className='text-center mb-7'>Settings</h1>
                <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-red-500 rounded-lg">
                    <div>
                        <label className="block mb-2"><b>Name</b></label>
                        <input
                        type="text"
                        name="nameUser"
                        value={formData.nameUser}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-2"><b>University</b></label>
                        <input
                        name="uni"
                        value={formData.uni}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                        />
                    </div>
                    <div>
                        <label className="block mb-2"><b>Number of Scholar</b></label>
                        <div>You can find it there and there.</div>
                        <input
                        type="number"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                        />
                    </div>
                    <div>
                        {items.map((item) => (
                            <React.Fragment key={item}>
                                <label className="block mb-2"><b>{item=="livingExpenses"? "Living Expenses":item.charAt(0).toUpperCase() + item.slice(1)}</b></label>
                                <div className='flex justify-around h-44px'>
                                    <div>
                                    Current value
                                    <div className='flex justify-between border rounded h-44px'>
                                        <input
                                            type="number"
                                            name={item+"_now"}
                                            value={formData[item+"_now"]}
                                            onChange={handleChange}
                                            className="w-9/12 rounded px-4 py-2"
                                            required
                                        />
                                    <div className='content-center text-center rounded flex-grow bg-gray-500'>
                                        <select  
                                            value={formData[item+"Currency"]}
                                            name={item+"Currency"}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded"
                                            required
                                        >
                                            <option value="0">USD</option>
                                            <option value="1">EUR</option>
                                            <option value="2">GBP</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                Initial budget
                                <div className='flex justify-between border rounded h-44px'>
                                    <input
                                        type="number"
                                        name={item+"Initial"}
                                        value={formData[item+"Initial"]}
                                        onChange={handleChange}
                                        className="w-9/12 rounded px-4 py-2"
                                        required
                                    />
                                    <div className='content-center text-center rounded flex-grow bg-gray-500'>
                                        <select  
                                            value={formData[item+"Currency"]}
                                            name={item+"Currency"}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded"
                                            required
                                        >
                                            <option value="0">USD</option>
                                            <option value="1">EUR</option>
                                            <option value="2">GBP</option>
                                        </select>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </React.Fragment>
                        ))}                  </div>
                    <div className="flex justify-between m-10">
                    <button onClick={() => {navigate("/base")}} className="px-4 py-2 bg-gray-500 text-white rounded">
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                        Save
                    </button>
                    </div>
                    </form>
                </div>
                <div className='flex justify-center'>
                <button className="px-4 mt-7 w-1/2 py-2 bg-gray-500 text-white rounded-lg">
                        <LogoutIcon />Log Out
                </button>
                </div>
            </div>
        </div>

    );
};

export default Settings;
