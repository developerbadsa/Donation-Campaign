import { useEffect, useState } from "react";
import Donation from "./Donation";


const Donations = () => {
      const [donations, setDonations] = useState([]);
       
      useEffect(()=>{
            fetch('https://raw.githubusercontent.com/developerbadsa/Donation-Campaign/main/public/Donations.json')
            .then(res=>res.json())
            .then(data=>setDonations(data))
      },[])



      return (
            <div>
                  {
                        donations.map(donation=> <Donation key={donation.id} donation={donation}></Donation>)
                  }
            </div>
      );
};

export default Donations;