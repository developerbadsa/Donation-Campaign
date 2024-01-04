import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
      const error = useRouteError()
      console.log(error)

      return (
            <div className='text-center my-40'>
                  <h5 className='text-4xl'>{error.status}! {error.statusText}</h5>
                  <p className='my-8 text-sm text-red-500'>{error.data}</p>
                  <Link to='/'>
                        <button className='btn bg-[#FF444A] text-white my-8'>Go Home</button>
                  </Link>
            </div>
      );
};

export default ErrorPage;