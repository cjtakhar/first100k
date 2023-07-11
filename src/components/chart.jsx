import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './styles/chart.css';

const Chart = () => {
  const data = [
    { title: 'Bills', value: 40, color: '#8004a9' },
    { title: 'Savings', value: 30, color: '#6e0491' },
    { title: 'Invest', value: 20, color: '#5c0379' },
    { title: 'Extra', value: 10, color: '#490260' },
  ];

  return (
    <div>
      <h2 className="chart-title">the chart.</h2>
      <PieChart
        className="piechart"
        data={data}
        lineWidth={60}
        radius={40}
        startAngle={0}
        animate
        animationDuration={500}
        animationEasing="ease-out"
        label={() => null}
        labelStyle={{ display: 'none' }} 
        reveal={100} 
        onMouseOver={(e, index) => {
          const percent = data[index].value;
          console.log(`${percent}%`);
        }}
      />
    </div>
  );
};

export default Chart;

