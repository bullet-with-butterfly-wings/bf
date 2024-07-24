import React from 'react';
import TableRow from './TableRow';

const data = [
  { name:"lent", category: 'Food', date: '2024-07-20', amount: '$50', attachment: 'https://via.placeholder.com/150' },
  { name:"lent", category: 'Travel', date: '2024-07-19', amount: '$300', attachment: null },
  { name:"lent", category: 'Utilities', date: '2024-07-18', amount: '$100', attachment: 'https://via.placeholder.com/150' },
  { name:"lent", category: 'Food', date: '2024-07-20', amount: '$50', attachment: 'https://via.placeholder.com/150' },
];

const Table = () => {
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
