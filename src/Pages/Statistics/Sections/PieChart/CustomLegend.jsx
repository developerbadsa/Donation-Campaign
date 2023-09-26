const CustomLegendItem = ({ label, color }) => (
      <div className="flex items-center justify-center">
            <div className="ml-10">{label}</div>
            <div className="w-24 rounded-md mx-4 h-2" style={{ backgroundColor: color }}></div>
            
      </div>
);



const CustomLegend = ({ data, colors }) => (
      <div className="flex justify-center">
            {data.map(([label], index) => (
                  <CustomLegendItem key={label} label={label} color={colors[index]} />
            ))}
      </div>
);

export default CustomLegend;