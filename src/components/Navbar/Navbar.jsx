import React from "react";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ totalCoin }) => {
  const links = (
    <>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Fixture</a>
      </li>
      <li>
        <a href="">Team</a>
      </li>
      <li>
        <a href="">Schedules</a>
      </li>
    </>
  );

  return (
    <div className="navbar sm:px-5 lg:px-5 mb-12 sticky top-0 z-50 bg-white shadow-lg flex flex-row justify-between">
      <div className="lg:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <button className="">
          <img className="w-16" src="/logo.png" alt="" />
        </button>
      </div>
      {/* Navbar End */}
      <div className="lg:navbar-end">
        <ul className="menu menu-horizontal px-1 md:flex flex-row gap-1 lg:gap-3 text-lg font-semibold hidden ">
          {links}
        </ul>
        <div className="ml-10 flex flex-row gap-2 justify-center items-center border-2 rounded-lg px-3 py-1">
          <p className="font-bold">
            <span>{totalCoin}</span> Coin
          </p>
          <img src="/coin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
