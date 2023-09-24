
import { Outlet } from 'react-router-dom';
import Navbar from '../assets/Components/Header/Navbar';

const Layout = () => {
      return (
            <div className='container mx-auto px-8'>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
            </div>
      );
};

export default Layout;