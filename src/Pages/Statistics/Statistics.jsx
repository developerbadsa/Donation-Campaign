import { useLoaderData } from "react-router-dom";
import PieChart from "./Sections/PieChart/PieChart";


const Statistics = () => {

      const loadedData = JSON.parse(useLoaderData()).length
      return (
            <div>
                  <PieChart loadedData={loadedData}></PieChart>
            </div>
      );
};

export default Statistics;