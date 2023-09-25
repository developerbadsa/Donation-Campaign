import React from 'react';
import { Link } from 'react-router-dom';

const Donation = ({donation}) => {

      const {id ,card_bg_color, category, category_bg_color, picture, text_color, title
      } = donation;


      return (
            <Link style={{background:`${card_bg_color}`}} className={` border rounded-lg`} to={`donate/${id}`}>
                  <img src={picture} className='w-full' alt={title} />
                        <div className='px-5 py-5'>
                              <button style={{background:`${category_bg_color}`, color:`${text_color}`}} className='btn btn-sm my-4 text-sm font-medium'>{category}</button>
                              <h2 style={{color:`${text_color}`}} className='text-xl font-semibold'>{title}</h2>
                        </div>
            </Link>
      );
};

export default Donation;