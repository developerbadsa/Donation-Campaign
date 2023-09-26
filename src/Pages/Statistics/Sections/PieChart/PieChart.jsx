import { Chart } from 'react-google-charts';
import CustomLegend from './CustomLegend';
import { useState, useEffect } from 'react';

const MyPieChart = ({ loadedData }) => {
  const [localstorageData, setLocalstorageData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('donatedData');

    if (storedData) {
      setLocalstorageData(JSON.parse(storedData));
    }
  }, []);

  const localstorageDataLength = localstorageData ? localstorageData.length : 0;
  const data = [
    [' ', ''],
    ['Your Donation', localstorageDataLength],
    ['Total Donation', loadedData],
  ];

  const options = {
    colors: ['#00C49F', '#FF444A'],
    legend: 'none',
  }

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
  )
};

export default MyPieChart;
