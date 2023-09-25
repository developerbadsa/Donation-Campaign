import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {

      const datas = useLoaderData()
      const getId = useParams()

      const matchedData = datas?.find(data => data.id == getId.id);

      const { id, card_bg_color, category, category_bg_color, picture, text_color, title
           , donate_amount
      } = matchedData;

      console.log(matchedData)

      return (
            <div>
                  <div className='rounded' to={`donate/${id}`}>
                        <div >





                              <div className="hero relative min-h-[600px] " style={{ background: `url(${picture})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <div className="bg-black w-full absolute obsolute flex items-center p-10  bottom-0 my-30 bg-opacity-40">
                                           <button style={{ background: `${text_color}` }} className="btn border-0 btn-primary">Donate ${donate_amount}</button>
                                    </div>
                              </div>
                        </div>





                  </div>
                  {/* <img src={picture} className='w-full h-[700px]' alt={title} /> */}
                  {/* <div className='px-5 py-5'>
                              <button style={{ background: `${category_bg_color}`, color: `${text_color}` }} className='btn btn-sm my-4 text-sm font-medium'>{category}</button>
                              <h2 style={{ color: `${text_color}` }} className='text-xl font-semibold'>{title}</h2>
                        </div> */}
            </div>
      );
};

export default DonationDetails;