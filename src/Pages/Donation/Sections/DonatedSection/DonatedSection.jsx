

const DonatedSection = ({ data }) => {

      const { id, card_bg_color, category, category_bg_color, picture, text_color, title
      } = data;

      return (
            <div style={{ background: `${card_bg_color}` }} className='flex justify-start items-center ' to={`donate/${id}`}>
                  <div className="w-[33.33%] ">
                        <img src={picture} className='w-[300px] h-[190px]' alt={title} />
                  </div>
                  <div className='px-5 py-5'>
                        <button style={{ background: `${category_bg_color}`, color: `${text_color}` }} className='btn btn-sm my-4 text-sm font-medium'>{category}</button>
                        <h2 style={{ color: `${text_color}` }} className='text-xl font-semibold'>{title}</h2>
                        <button style={{ background: `${text_color}` }} className="text-white btn my-4">View Details</button>
                  </div>
            </div>
      );
};

export default DonatedSection;