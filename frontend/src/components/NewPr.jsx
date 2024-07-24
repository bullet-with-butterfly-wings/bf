// src/HomePage.js
import React from 'react';
import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { useNavigate } from "react-router-dom";

function NewPr(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        namePr: '',
        category: '',
        deadline: '',
        amount: '',
        attachment: '',
        note: '',
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
          name: '',
          category: '',
          deadline: '',
          amount: '',
          attachment: '',
          note: '',
        });
      };
    return (
        <div className="not">    
            <Sidebar />
            <div className='flex flex-col ml-96 mt-20 justify-between'>
                <div className='flex mx-20 flex-col'>
                <h1 className='text-center mb-7'>New Payment Request</h1>
                <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-red-500 rounded-lg">
                    <div>
                        <label className="block mb-2">Name of the request</label>
                        <input
                        type="text"
                        name="namePr"
                        value={formData.namePr}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-2">Category</label>
                        <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                        >
                        <option value="tuition">Tuition</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="living expenses">Living Expenses</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2">Deadline</label>
                        <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Amount</label>
                        <div className='flex justify-between border rounded h-44px'>
                            <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-11/12 rounded px-4 py-2"
                            required
                            />
                            <div className='content-center text-center rounded flex-grow bg-gray-300'>
                                GBP
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2">Attachment</label>
                        <input
                        type="file"
                        name="attachment"
                        value={formData.attachment}
                        onChange={handleChange} //event.target.files[0]
                        className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Note</label>
                        <input
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-between my-20">
                    <button onClick={() => {navigate("/base")}} className="px-4 py-2 bg-gray-500 text-white rounded">
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                        Add Item
                    </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default NewPr;
