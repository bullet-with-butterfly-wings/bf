// src/HomePage.js
import React from 'react';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { useNavigate } from "react-router-dom";

function SetUp(){
    const navigate = useNavigate();
    const items = ["tuition", "accommodation", "livingExpenses"];
    const [formData, setFormData] = useState({
        nameUser: '',
        uni: '',
        idNumber: '',
        tuition: 0,
        tuitionCurrency: "",
        accommodation: 0,
        accommodationCurrency: "",
        livingExpenses: 0,
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
            tuition: 0,
            tuitionCurrency: "",
            accommodation: 0,
            accommodationCurrency: "",
            livingExpenses: 0,
            livingExpensesCurrency: "",
          });
      };
    return (
            <div className='flex mx-40 flex-col mt-20'>
                <h1 className='text-center mb-7'>Set Up</h1>
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
                                <label className="block mb-2"><b>Budget for {item=="livingExpenses"? "Living Expenses":item.charAt(0).toUpperCase() + item.slice(1)}</b></label>
                                <div className='flex justify-between border rounded h-44px'>
                                    <input
                                        type="number"
                                        name={item}
                                        value={formData[item]}
                                        onChange={handleChange}
                                        className="w-10/12 rounded px-4 py-2"
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
                                
                            </React.Fragment>
                        ))}                  </div>
                    <div className="flex justify-center m-10">
                    <button onClick={() => {navigate("/base")}} type="submit" className="h-24 px-4 w-1/3 py-2 bg-blue-500 text-white rounded">
                        Save
                    </button>
                    </div>
                </form>
        </div>

    );
};

export default SetUp;
