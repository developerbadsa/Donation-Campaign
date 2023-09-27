import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
      return (
            <div className='text-center my-40'>
                  <h5 className='text-4xl'>Page Not Found</h5>
                  <Link to={'/'}>
                        <button className='btn bg-[#FF444A] text-white my-8'>Go Home</button>
                  </Link>
            </div>
      );
};

export default ErrorPage;