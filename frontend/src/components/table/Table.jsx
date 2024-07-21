import React from 'react';
import TableRow from './TableRow';

const data = [
  { category: 'Food', date: '2024-07-20', amount: '$50', attachment: 'https://via.placeholder.com/150' },
  { category: 'Travel', date: '2024-07-19', amount: '$300', attachment: null },
  { category: 'Utilities', date: '2024-07-18', amount: '$100', attachment: 'https://via.placeholder.com/150' },
];

const Table = () => {
  return (
    <div className="flex justify-center w-full">
      <table className="w-3/4 bg-green-500 border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Attachment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
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
