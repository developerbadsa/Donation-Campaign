import { useEffect, useState } from "react";
import DonatedSection from "./Sections/DonatedSection/DonatedSection";


const MainDonation = () => {

      const getDatas = JSON.parse(localStorage.getItem('donatedData')) || []
      const [ShowBtn, setShowBtn] = useState(0);
      const [showAll, setShowAll] = useState(4)

      useEffect(() => {
            setShowBtn(getDatas.length + 1)
      }, [])


      return (
            <>

                  <div className="grid grid-cols-2 gap-8">
                        {
                              getDatas.length !== 0 ? getDatas.slice(0, showAll).map((data, inx) => <DonatedSection key={inx} data={data}></DonatedSection>) : <div className="text-xl font-semibold text-red-400 my-20 text-center">No Data Found In Donation</div>
                        }

                        
                  </div>
                 <div className="text-center my-10 ">
                 {
                              ShowBtn >= 4 ? <button onClick={()=>setShowAll(ShowBtn)} className="btn btn-md bg-[#009444] hover:bg-[#117049] text-white">See More</button> : ''
                        }
                 </div>
            </>
      );
};

export default MainDonation;