import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {

      const datas = useLoaderData()
      const getId = useParams()

      const matchedData = datas?.find(data => data.id == getId.id);

      const { id, picture, text_color, title, donate_amount, description } = matchedData;
      const [localstorage, setLocalstorage] = useState([])
     const handleDonateAmount = ()=>{
      
      setLocalstorage([...localstorage, matchedData])
      console.log(...localstorage)
     }
     
      return (
            <div className='rounded py-24' to={`donate/${id}`}>

                  <div className="hero relative min-h-[600px] " style={{ background: `url(${picture})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className="bg-black w-full absolute obsolute flex items-center p-10  bottom-0 my-30 bg-opacity-40">
                              <button onClick={()=>handleDonateAmount()} style={{ background: `${text_color}` }} className="btn border-0 btn-primary">Donate ${donate_amount}</button>
                        </div>
                  </div>
                  <h2 className="py-6 text-5xl font-bold">{title}</h2>
                  <p className="text-[#0b0b0bb3]">{description}</p>
            </div>
      );
};

export default DonationDetails;