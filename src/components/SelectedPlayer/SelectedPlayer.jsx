import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({ selectedPlayer, handleRemoveSelectedPlayer }) => {
  const { image, name, playerId, role, biddingPrice } = selectedPlayer;

  return (
    <div className="flex flex-row justify-between items-center border-2 p-5 rounded-lg">
      {/* <h1>Selected Player</h1> */}
      <div className="flex flex-row gap-5 lg:gap-10">
        {/* Player Image */}
        <div className="w-32 border-0">
          <img className="h-32 w-full rounded-lg" src={image} alt="" />
        </div>

        {/* Player Info */}
        <div className="flex flex-col gap-3 justify-center items-start">
          {/* Name */}
          <h1 className="font-bold text-xl">{name}</h1>
          {/* Role  */}
          <div className=" font-bold text-[#131313]">
            <h1>{role}</h1>
          </div>
          {/* Price */}
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-bold">Price: ${biddingPrice}</h1>
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => handleRemoveSelectedPlayer(playerId, name, biddingPrice)}
      >
        <RiDeleteBin6Line className="text-4xl text-[#F14749]" />
      </button>
    </div>
  );
};

export default SelectedPlayer;
