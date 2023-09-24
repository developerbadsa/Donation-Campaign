import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";


const Navbar = () => {
      return (
            <div className="">
                  <nav className="mx-auto   bg-white bg-transparent py-2 text-white lg:px-8 lg:py-4">
                        <div>
                              <div className="container mx-auto flex items-center justify-between text-gray-900">
                                    <Logo></Logo>
                                    <ul className="hidden items-center gap-6 text-lg  text-[#0B0B0B] lg:flex">
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
                                    <button
                                          className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                                          data-collapse-target="navbar"
                                    >
                                          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="h-6 w-6"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="2"
                                                >
                                                      <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4 6h16M4 12h16M4 18h16"
                                                      ></path>
                                                </svg>
                                          </span>
                                    </button>
                              </div>
                              <div
                                    className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                                    data-collapse="navbar"
                              >
                                    <div className="container mx-auto pb-2">
                                          <ul className="mt-2 mb-4 flex flex-col gap-2">
                                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                                      <a className="flex items-center" href="#">
                                                            Pages
                                                      </a>
                                                </li>
                                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                                      <a className="flex items-center" href="#">
                                                            Account
                                                      </a>
                                                </li>
                                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                                      <a className="flex items-center" href="#">
                                                            Blocks
                                                      </a>
                                                </li>
                                                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                                      <a className="flex items-center" href="#">
                                                            Docs
                                                      </a>
                                                </li>
                                          </ul>
                                          <button
                                                className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                type="button"
                                                data-ripple-light="true"
                                          >
                                                <span>Buy Now</span>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};

export default Navbar;