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

const WeatherBarChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: 'Average Temperature of week (°C)',
        data: data,
        backgroundColor: 'gray',
        borderColor: '',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default WeatherBarChart;
