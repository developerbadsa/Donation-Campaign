import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = ({ ddddd }) => {
  const [donations, setDonations] = useState([]);
  const [searchedDonations, setSearchedDonations] = useState([]);
  
  
  useEffect(() => {
    fetch('../../../public/Donations.json')
      .then((res) => res.json())
      .then((data) => setDonations(data))
  }, []);

  useEffect(() => {
    if (ddddd.length === 0) {
      setSearchedDonations([]);
    } else {
      setSearchedDonations(ddddd);
    }
  }, [ddddd, donations]); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {searchedDonations.length > 0
        ? searchedDonations.map((donation) => (
            <Donation key={donation.id} donation={donation} />
          ))


        : donations.map((donation) => (
            <Donation key={donation.id} donation={donation} />
          ))}
    </div>
  );
};

export default Donations;
