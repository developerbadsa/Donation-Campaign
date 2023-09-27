import { useState } from "react";
import Donations from "./Sections/Donation/Donations";
import Hero from "./Sections/Hero/Hero";

const Home = () => {
 const [Found, setFound] = useState([])
      function getFilteredData(filteredDonations){
        setFound(filteredDonations)
        }

  return (
    <div className="">
      <Hero getFilteredData={getFilteredData}/>
      <Donations Found={Found}/>
    </div>
  );
};

export default Home;
