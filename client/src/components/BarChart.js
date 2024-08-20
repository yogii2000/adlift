import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({bardata}) => {
    const processData = (data) => {
        const colorCount = {};
    
        data.forEach(item => {
          if (item.data && item.data.color) {
            const color = item.data.color;
            colorCount[color] = (colorCount[color] || 0) + 1;
          }
        });
    
        const labels = Object.keys(colorCount);
        const counts = Object.values(colorCount);
    
        return { labels, counts };
      };
    
      const { labels, counts } = processData(bardata);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Product',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product distribution by Color',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
