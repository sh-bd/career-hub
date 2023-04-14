import React from 'react';
import Banner from '../Banner/Banner';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  let marksArray = [
    { id: 1, name: "A1", Marks: 57 },
    { id: 2, name: "A2", Marks: 60 },
    { id: 3, name: "A3", Marks: 49 },
    { id: 4, name: "A4", Marks: 59 },
    { id: 5, name: "A5", Marks: 59 },
    { id: 6, name: "A6", Marks: 53 },
    { id: 7, name: "A7", Marks: 59 }
  ];
  return (
    <div>
      <Banner>Statistics</Banner>
      <div className=' justify-center items-center px-20 grid grid-cols-1'>

        <h2 className='font-bold text-2xl pb-6 '>The marks of my last seven assignemts are down below-</h2>

        <div className='grid grid-cols-1'>
        <LineChart
          width={1000}
          height={300}
          data={marksArray}
        >
          <Line stroke="#8884d8" dataKey="Marks"></Line>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;