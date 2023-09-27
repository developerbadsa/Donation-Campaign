import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";


const Navbar = () => {
      return (
            // <div className="">
            //       <nav className="mx-auto   bg-white bg-transparent py-2 text-white lg:px-8 lg:py-4">
            //             <div>
            //                   <div className="container mx-auto flex items-center justify-between text-gray-900">
            //                         <Logo></Logo>
            //                         <ul className="hidden items-center gap-6 text-lg  text-[#0B0B0B] lg:flex">

            //                         </ul>
            //                         <button
            //                               className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            //                               data-collapse-target="navbar"
            //                         >
            //                               <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            //                                     <svg
            //                                           xmlns="http://www.w3.org/2000/svg"
            //                                           className="h-6 w-6"
            //                                           fill="none"
            //                                           stroke="currentColor"
            //                                           strokeWidth="2"
            //                                     >
            //                                           <path
            //                                                 strokeLinecap="round"
            //                                                 strokeLinejoin="round"
            //                                                 d="M4 6h16M4 12h16M4 18h16"
            //                                           ></path>
            //                                     </svg>
            //                               </span>
            //                         </button>
            //                   </div>
            //                   <div
            //                         className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
            //                         data-collapse="navbar"
            //                   >
            //                         <div className="container mx-auto pb-2">
            //                               <ul className="mt-2 mb-4 flex flex-col gap-2">
            //                               <li>
            //                                     <NavLink
            //                                           to="/"
            //                                           className={({ isActive, isPending }) =>
            //                                                 isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
            //                                           }
            //                                     >
            //                                           Home
            //                                     </NavLink>
            //                               </li>
            //                               <li>
            //                                     <NavLink
            //                                           to="/donation"
            //                                           className={({ isActive, isPending }) =>
            //                                                 isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
            //                                           }
            //                                     >
            //                                           Donation
            //                                     </NavLink>
            //                               </li>
            //                               <li>
            //                                     <NavLink
            //                                           to="/statistics"
            //                                           className={({ isActive, isPending }) =>
            //                                                 isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
            //                                           }
            //                                     >
            //                                           Statistics
            //                                     </NavLink>
            //                               </li>
            //                               </ul>
            //                         </div>
            //                   </div>
            //             </div>
            //       </nav>
            // </div>








            <div className="navbar bg-base-100">
                  <div className="navbar-start">
                        
                        <Logo></Logo>
                  </div>
                  <div className="navbar-end ">
                  <div className="dropdown relative"> 
                              <label tabIndex={0} className="btn btn-ghost sm:hidden ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className=" dropdown-content text-center absolute right-0 mt-3 z-[1] p-6 shadow bg-base-100 mr-8 rounded-box w-72">
                                    <li>
                                          <NavLink
                                                to="/"
                                                className={({ isActive, isPending }) =>
                                                      isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
                                                }
                                          >
                                                Home
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink
                                                to="/donation"
                                                className={({ isActive, isPending }) =>
                                                      isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
                                                }
                                          >
                                                Donation
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink
                                                to="/statistics"
                                                className={({ isActive, isPending }) =>
                                                      isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
                                                }
                                          >
                                                Statistics
                                          </NavLink>
                                    </li>
                              </ul>
                        </div>
                        <ul className=" gap-8 menu-horizontal hidden sm:inline-flex px-1">
                              <li>
                                    <NavLink
                                          to="/"
                                          className={({ isActive, isPending }) =>
                                                isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
                                          }
                                    >
                                          Home
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/donation"
                                          className={({ isActive, isPending }) =>
                                                isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
                                          }
                                    >
                                          Donation
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/statistics"
                                          className={({ isActive, isPending }) =>
                                                isPending ? "" : isActive ? "text-[#FF444A] font-bold" : ""
                                          }
                                    >
                                          Statistics
                                    </NavLink>
                              </li>
                        </ul>
                  </div>
            </div>
      );
};

export default Navbar;