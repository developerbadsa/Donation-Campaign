import React from 'react';

const Donation = ({donation}) => {

      const {card_bg_color, category, category_bg_color, picture, text_color, title
      } = donation;


      return (
            <div style={{background:`${card_bg_color}`}} className={` border rounded-lg`}>
                  <div>
                        <img src={picture} alt="" />
                        <div className='px-5 py-5'>
                              <button style={{background:`${category_bg_color}`, color:`${text_color}`}} className='btn btn-sm my-4 text-sm font-medium'>{category}</button>
                              <h2 style={{color:`${text_color}`}} className='text-xl font-semibold'>{title}</h2>
                        </div>
                  </div>
            </div>
      );
};

export default Donation;