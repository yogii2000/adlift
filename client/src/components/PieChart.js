import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PieChart = ({ piedata }) => {

  const processData = (data) => {
    const capacityCount = {};

    data.forEach(item => {
      if (item.data && item.data.capacity) {
        const capacity = item.data.capacity;
        capacityCount[capacity] = (capacityCount[capacity] || 0) + 1;
      }
    });

    const labels = Object.keys(capacityCount);
    const counts = Object.values(capacityCount);

    return { labels, counts };
  };

  const { labels, counts } = processData(piedata);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Capacity Count',
        data: counts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
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
        text: 'Products Distribution by Capacity',
      },
    },
  };

  return <Pie data={chartData} options={options}  />
};

export default PieChart;
