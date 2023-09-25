import { useEffect, useState } from "react";
import DonatedSection from "./Sections/DonatedSection/DonatedSection";


const MainDonation = () => {

      const getDatas = JSON.parse(localStorage.getItem('donatedData')) || []
      const [ShowBtn, setShowBtn] = useState(0);

     useEffect(()=>{
       setShowBtn(getDatas.length+1)
     },[])

      
      return (
            <div className="grid grid-cols-2 gap-8">
                  {
                       getDatas.length !== 0 ?  getDatas.map((data, inx)=><DonatedSection key={inx} data={data}></DonatedSection> ): <div className="text-xl font-semibold text-red-400 my-20 text-center">No Data Found In Donation</div>
                  }

            {/* {
                  ShowBtn >= 4 ? 'hello' : '43434'
           } */}
            </div>
      );
};

export default MainDonation;