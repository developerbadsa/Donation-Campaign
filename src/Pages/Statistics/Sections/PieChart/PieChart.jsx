
import { Chart } from 'react-google-charts';

const MyPieChart = () => {
  const data = [
      
    ['Task', 'Hours per Day'],
    ['Your Donation', 10],
    ['Total Donation', 90],
    
  ];

  const options = {
    title: 'My Daily Activities',
    colors: ['#FF444A', '#00C49F'],
    legend: {
      alignment: 'center',
      position: 'bottom',  
    },
    
  };

  return (
    <div className="pie-chart-container">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default MyPieChart;
