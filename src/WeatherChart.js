import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const WeatherChart = ({ weatherData }) => {
  const hourlyData = weatherData && weatherData.hourly ? weatherData.hourly.slice(0, 24) : [];

  const chartData = {
    labels: hourlyData.map((hour, index) => new Date().setHours(index)),
    datasets: [
      {
        label: 'Hourly Temperature',
        data: hourlyData.map(hour => hour.temp - 273.15), // convert to Celsius
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'hour',
          displayFormats: {
            hour: 'hA',
          },
        },
      }],
    },
  };

  return <Line data={chartData} options={options} />;
};

export default WeatherChart;
