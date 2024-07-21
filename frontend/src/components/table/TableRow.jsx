import React, { useState } from 'react';

const TableRow = ({ category, date, amount, attachment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr onClick={toggleExpand} className="cursor-pointer">
        <td className="border px-4 py-2">{category}</td>
        <td className="border px-4 py-2">{date}</td>
        <td className="border px-4 py-2">{amount}</td>
        <td className="border px-4 py-2">{attachment ? 'Yes' : 'No'}</td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan="4" className="border px-4 py-2">
            <div className="p-4 bg-black">
              <h3 className="text-lg font-semibold">Details</h3>
              <p>Category: {category}</p>
              <p>Date: {date}</p>
              <p>Amount: {amount}</p>
              {attachment && (
                <div className="mt-2">
                  <a href={attachment} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Attachment
                  </a>
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
