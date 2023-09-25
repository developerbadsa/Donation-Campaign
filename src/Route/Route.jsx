import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Home/Sections/Donation/Donations";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/Home/Sections/Donation/DonationDetails/DonationDetails";
import MainDonation from "../Pages/Donation/MainDonation";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Layout></Layout>,
            children:[
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/donation',
                        element: <MainDonation></MainDonation>
                  },
                  {
                        path: '/statistics',
                        element: <Statistics></Statistics>
                  },
                  {
                        path: '/donate/:id',
                        element: <DonationDetails></DonationDetails>,
                        loader: ()=> fetch('./../../public/Donations.json'),
                  }
            ]
      }
])

export default router;