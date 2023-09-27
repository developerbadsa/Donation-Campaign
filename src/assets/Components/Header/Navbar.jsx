import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";


const Navbar = () => {
      return (


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