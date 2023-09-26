
import { Chart } from 'react-google-charts';
import CustomLegend from './CustomLegend';

const MyPieChart = () => {
  const data = [
    ['Task', 'Hours per Day'],
    ['Your Donation', 10],
    ['Total Donation', 90],
  ];

  const options = {
    title: 'My Daily Activities',
    colors: ['#FF444A', '#00C49F'],
    legend: 'none',
  };

  const colors = options.colors;

  return (
    <div className="pie-chart-container">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
      <CustomLegend data={data.slice(1)} colors={colors} />
    </div>
  );
};

export default MyPieChart;