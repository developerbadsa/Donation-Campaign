import { useState } from "react";
import Donations from "./Sections/Donation/Donations";
import Hero from "./Sections/Hero/Hero";

const Home = () => {
 const [ddddd, setttddd] = useState([])
      function getFilteredData(filteredDonations){
            setttddd(filteredDonations)
        }

  return (
    <div className="">
      <Hero getFilteredData={getFilteredData}/>
      <Donations ddddd={ddddd}/>
    </div>
  );
};

export default Home;
