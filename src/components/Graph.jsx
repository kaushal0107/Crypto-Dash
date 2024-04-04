// src/components/PopulationChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Ensure Chart.js functionalities are available

const PopulationChart = () => {
  const [populationData, setPopulationData] = useState({
    labels: [],
    datasets: [{
      label: 'Population',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Optional for a bit of styling
      tension: 0.1
    }]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const years = data.data.map(item => item.Year);
        const populations = data.data.map(item => item.Population);

        setPopulationData({
          labels: years,
          datasets: [{
            label: 'Population',
            data: populations,
            borderColor: 'green',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1
          }]
        });
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  // Optional: Configuration for the chart (e.g., scales, tooltips)
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Population'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    maintainAspectRatio: false
  };

    return (
        <div className='card'>
            <h1 className="text-left text-lg font-semibold text-white">Population Chart</h1>
            <div class="w-full">
            <Line data={populationData} options={options} />
            </div>
      </div>
  );
};

export default PopulationChart;
