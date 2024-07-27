import React from 'react';
import TableRow from './TableRow';


function Table({data}){
  return (
    <div className="flex justify-center w-full">
      <table className="w-full bg-red-500 rounded-xl">
        <thead className='bg-white'>
          <tr className='rounded-2xl'>
            <th className="border px-4 py-2 text-black">Name</th>
            <th className="border px-4 py-2 text-black">Category</th>
            <th className="border px-4 py-2 text-black">Date</th>
            <th className="border px-4 py-2 text-black">Amount</th>
            <th className="border px-4 py-2 text-black">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              name={item.name}
              category={item.category}
              date={item.date}
              amount={item.amount}
              attachment={item.attachment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
