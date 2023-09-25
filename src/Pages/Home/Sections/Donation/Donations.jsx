import { useEffect, useState } from "react";
import Donation from "./Donation";


const Donations = () => {
      const [donations, setDonations] = useState([]);
       
      useEffect(()=>{
            fetch('../../../../../public/Donations.json')
            .then(res=>res.json())
            .then(data=>setDonations(data))
      },[])


      return (
            <div className="grid grid-cols-4 gap-8">
                  {
                        donations.map(donation=> <Donation key={donation.id} donation={donation}></Donation>)
                  }
            </div>
      );
};

export default Donations;