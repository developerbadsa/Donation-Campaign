const CustomLegendItem = ({ label, color }) => (
      <div className="flex items-center gap-4 ml-4 justify-center">
            <div className="ml-0 lg:ml-10 text-sm">{label}</div>
            <div className="w-12 lg:w-24 rounded-md  lg:mx-4 h-2" style={{ backgroundColor: color }}></div>
            
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