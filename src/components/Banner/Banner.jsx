import React from "react";

const Banner = ({ handleAddCoin }) => {
  return (
    <div
      className="hero min-h-screen rounded-lg bg-slate-900"
      style={{
        backgroundImage: "url(/bg-shadow.png)",
      }}
    >
      <div className="hero-content text-neutral-content text-center rounded-lg ">
        <div className="flex flex-col justify-center items-center gap-5 py-10">
          <img
            className="w-56 lg:py-0 lg:w-72"
            src="./banner-main.png"
            alt=""
          />
          <h1 className="font-bold text-3xl lg:text-4xl ">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5 text-2xl text-gray-400">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border-2 border-[#E7FE29] p-2 rounded-2xl transition-all">
            <button
              onClick={() => handleAddCoin()}
              className="btn bg-[#E7FE29] border-2 rounded-xl font-bold text-base  border-[#E7FE29] hover:bg-transparent hover:border-[#E7FE29] hover:text-[#E7FE29]"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
