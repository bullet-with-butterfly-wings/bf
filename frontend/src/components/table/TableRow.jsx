import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Unstable_Popup } from '@mui/base/Unstable_Popup';

const TableRow = ({ name, category, date, deadline, amount, attachment, request, note }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [anchor, setAnchor] = useState(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const open = Boolean(anchor);
  return (
    <>
      <tr className="cursor-pointer text-2xl">
        <td className="px-4 py-2 text-center">{name}</td>
        <td className="px-4 py-2 text-center">{category}</td>
        <td className="px-4 py-2 text-center">{date}</td>
        <td className="px-4 py-2 text-center">{amount}</td>
        <td className="px-4 py-2 text-center"><button className="w-3/4" onClick={toggleExpand}>{isExpanded?<ExpandLessIcon />:<ExpandMoreIcon />}</button></td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan="5" className="border p-4 bg-red-600 px-4 py-2 text-l">
              <h2 className="text-2xl mb-5 font-semibold">{name}</h2>
              <div className="bg-white w-full h-10px"></div>
              <div className="flex justify-between">
                <div className='flex flex-col w-1/2'>
                  <p><b>Requested:</b> {category}</p>
                  <p><b>Deadline:</b> {date}</p>
                </div>
                <span className='flex-grow'><h3><b className='mx-10'>Note:</b></h3><span className='text-base'>{note}</span></span>  
                
              </div>
              <div className='flex justify-around mt-6 mb-3'>
                  <button className="bg-red-800 text-white font-bold py-2 px-4 rounded-xl">Download Request</button>
                  <button className="bg-red-800 text-white font-bold py-2 px-4 rounded-xl">Download Attachment</button>
                  <button onClick={(event) => {setAnchor(anchor ? null : event.currentTarget);}}
                  className="bg-gray-600 text-white font-bold py-2 px-4 rounded-xl">
                    <DeleteRoundedIcon /> Delete
                    </button>
                  <Unstable_Popup className="mt-3" open={open} anchor={anchor}>
                    <div className="bg-white p-4 rounded-xl">
                      <h2 className='text-black text-center'>The money will be returned back to your budget. <br></br> Are you sure you want to delete this request?</h2>
                      <div className="flex justify-around mt-6 mb-3">
                        <button className="bg-red-800 text-white font-bold py-2 px-4 rounded-xl">Yes</button>
                        <button onClick = {(event) => {setAnchor(anchor ? null : event.currentTarget);}} className="bg-gray-600 text-white font-bold py-2 px-4 rounded-xl">No</button>
                      </div>
                    </div>
                  </Unstable_Popup>
              </div>
            
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
