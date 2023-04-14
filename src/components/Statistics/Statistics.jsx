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
      <div className='flex flex-col items-center justify-center px-4'>

        <h2 className='font-bold text-2xl pb-6 text-center'>The marks of my last seven assignemts are down below-</h2>

        <div className='w-full md:w-4/5 lg:w-3/4 xl:w-2/3'>
        <LineChart className='w-full'
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