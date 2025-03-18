import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WasteCollectionTrends = () => {
  const data = [
    { month: 'Jan', general: 450, recyclable: 240, organic: 200, hazardous: 45 },
    { month: 'Feb', general: 470, recyclable: 250, organic: 210, hazardous: 48 },
    { month: 'Mar', general: 540, recyclable: 260, organic: 230, hazardous: 52 },
    { month: 'Apr', general: 520, recyclable: 290, organic: 240, hazardous: 55 },
    { month: 'May', general: 490, recyclable: 310, organic: 250, hazardous: 47 },
    { month: 'Jun', general: 470, recyclable: 320, organic: 260, hazardous: 45 },
    { month: 'Jul', general: 450, recyclable: 340, organic: 270, hazardous: 42 },
    { month: 'Aug', general: 430, recyclable: 350, organic: 280, hazardous: 40 },
    { month: 'Sep', general: 410, recyclable: 360, organic: 290, hazardous: 38 },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg h-full" style={{width: "100%",height: "100%"}}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#222', borderColor: '#444' }}
            labelStyle={{ color: '#ccc' }}
            itemStyle={{ color: '#ccc' }}
          />
          <Legend />
          <Line type="monotone" dataKey="general" stroke="#FF3860" strokeWidth={2} name="General Waste" />
          <Line type="monotone" dataKey="recyclable" stroke="#4CD464" strokeWidth={2} name="Recyclable" />
          <Line type="monotone" dataKey="organic" stroke="#FFC107" strokeWidth={2} name="Organic" />
          <Line type="monotone" dataKey="hazardous" stroke="#7928CA" strokeWidth={2} name="Hazardous" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WasteCollectionTrends;