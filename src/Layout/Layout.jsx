
import { Outlet } from 'react-router-dom';
import Navbar from '../assets/Components/Header/Navbar';

const Layout = () => {
      return (
            <div className='container mx-auto px-8'>
                  <div className='z-10'><Navbar></Navbar></div>
                  <Outlet></Outlet>
            </div>
      );
};

export default Layout;