import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CollectionEfficiency = () => {
  const data = [
    { area: 'Downtown', efficiency: 94, target: 95 },
    { area: 'Commercial', efficiency: 91, target: 95 },
    { area: 'Res. North', efficiency: 88, target: 90 },
    { area: 'Res. South', efficiency: 85, target: 90 },
    { area: 'Industrial', efficiency: 90, target: 92 },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg h-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="area" stroke="#ccc" />
          <YAxis stroke="#ccc" domain={[80, 100]} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#222', borderColor: '#444' }}
            labelStyle={{ color: '#ccc' }}
            itemStyle={{ color: '#ccc' }}
            formatter={(value) => `${value}%`} // Corrected template literal
          />
          <Legend />
          <Bar dataKey="efficiency" name="Current Efficiency" fill="#7928CA" />
          <Bar dataKey="target" name="Target" fill="#00D4FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CollectionEfficiency;
