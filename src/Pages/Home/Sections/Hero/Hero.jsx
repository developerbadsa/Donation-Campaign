import { useState } from "react";

const Hero = () => {
      const [catagory, setCatagory] = useState([]);


      const handleForm = (e) => {
       
        setCatagory(e.target.value)
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        handleForm(e); 
        console.log(catagory);
      };
    
      return (
        <div>
          <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://github.com/ProgrammingHero1/donation-campaign/blob/main/Resources/Clothing.png?raw=true)' }}>
            <div className="hero-overlay bg-[#fff] bg-opacity-90"></div>
            <div className="w-full px-10 text-center text-neutral-content">
              <div className="w-full">
                <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                <form className="input-group flex justify-center my-4 mx-auto">
                  <input type="text" placeholder="Search Here" className="input input-bordered w-full max-w-xs" onChange={(e) => handleForm(e)} />
                  <button type="submit" className="btn text-white border-0 bg-[#FF444A] hover:bg-[#FF444A]" onClick={(e) => handleSubmit(e)}>Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Hero;
    