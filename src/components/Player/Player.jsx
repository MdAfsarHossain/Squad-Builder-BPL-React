import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Player = ({ player, totalCoin, handleSelectedPlayer }) => {
  const {
    name,
    country,
    role,
    bowlingType,
    battingType,
    biddingPrice,
    image,
    playerId,
  } = player;

  const handleSelectPlayer = (id) => {
    if (biddingPrice > totalCoin) {
      toast.error("You don't have enough coins to buy this player.");
      return;
    }
    handleSelectedPlayer(id, name, biddingPrice);
  };

  return (
    <div className="border-2 rounded-lg p-5 flex flex-col gap-3">
      <img className="rounded-lg w-full h-72" src={image} alt="" />
      {/* Player Name */}
      <div className="flex flex-row gap-4 justify-start items-center">
        <FaUser />
        <h1 className="font-bold text-lg">{name}</h1>
      </div>

      {/* Country and Role */}
      <div className="flex flex-row gap-2 justify-between items-center border-b-[2px] pb-5">
        {/* Country */}
        <div className="flex flex-row gap-2 justify-start items-center text-gray-500">
          <FaFlag />
          <h1 className="font-semibold">{country}</h1>
        </div>
        {/* Role */}
        <div className="bg-[#1313130D] rounded-lg px-5 py-1 font-bold text-[#131313]">
          <h1>{role}</h1>
        </div>
      </div>

      {/* Rating */}
      <div className="">
        <h1 className="font-bold">Rating</h1>
      </div>

      {/* Batting Styles */}
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold">{battingType ? battingType : "N/A"}</h1>
        <h1 className="font-bold text-gray-400">
          {bowlingType ? bowlingType : "N/A"}
        </h1>
      </div>

      {/* Price */}
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold">Price: ${biddingPrice}</h1>
        <button
          onClick={() => handleSelectPlayer(playerId)}
          className="cursor-pointer border-2 rounded-lg px-3 py-1 font-bold hover:bg-[#E7FE29] hover:border-[#E7FE29] transition-all"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
