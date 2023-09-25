import Donations from "../Donation/Donations";


const Hero = () => {
      return (
            <div>
                  <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://github.com/ProgrammingHero1/donation-campaign/blob/main/Resources/Clothing.png?raw=true)' }}>
                        <div className="hero-overlay bg-[#fff] bg-opacity-90"></div>
                        <Donations></Donations>
                        <div className="hero-content text-center text-neutral-content">
                              <div className="">
                                    <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                                    <div className=" input-group flex justify-center my-4 mx-auto">
                                          <input type="text" placeholder="Search Here" className="input input-bordered w-full max-w-xs" />
                                          <button className="btn  text-white border-0 bg-[#FF444A] hover:bg-[#FF444A]">Search</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Hero;