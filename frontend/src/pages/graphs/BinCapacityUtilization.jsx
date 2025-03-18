import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const BinCapacityUtilization = () => {
  const data = [
    { name: 'General Waste', value: 85, fill: '#FF3860' },
    { name: 'Recyclables', value: 70, fill: '#4CD464' },
    { name: 'Organic Waste', value: 65, fill: '#FFC107' },
    { name: 'Hazardous Waste', value: 45, fill: '#7928CA' },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg h-full">
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="20%" 
          outerRadius="80%" 
          barSize={20} 
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            background
            dataKey="value"
            label={{ position: 'insideStart', fill: '#fff', fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value) => `${value}%`} // Corrected the template literal
            contentStyle={{ backgroundColor: '#222', borderColor: '#444' }}
            itemStyle={{ color: '#ccc' }}
          />
          <Legend 
            iconSize={10} 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            wrapperStyle={{ color: '#ccc' }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BinCapacityUtilization;
