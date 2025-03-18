import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const WasteComposition = () => {
  const data = [
    { name: 'General Waste', value: 45 },
    { name: 'Recyclables', value: 30 },
    { name: 'Organic Waste', value: 20 },
    { name: 'Hazardous Waste', value: 5 },
  ];
  
  const COLORS = ['#FF3860', '#4CD464', '#FFC107', '#7928CA'];
  
  return (
    <div className="bg-gray-900 p-4 rounded-lg h-full" style={{width: "100%",height: "100%"}}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} // Corrected template literal
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> // Corrected key syntax
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `${value}%`} // Corrected template literal
            contentStyle={{ backgroundColor: '#222', borderColor: '#444' }}
            itemStyle={{ color: '#ccc' }}
          />
          <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            wrapperStyle={{ color: '#ccc' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WasteComposition;
