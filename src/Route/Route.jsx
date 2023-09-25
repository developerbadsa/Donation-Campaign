import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Home/Sections/Donation/Donations";
import Statistics from "../Pages/Statistics/Statistics";

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
                        element: <Donation></Donation>
                  },
                  {
                        path: '/statistics',
                        element: <Statistics></Statistics>
                  }
            ]
      }
])

export default router;