import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, handleRemoveSelectedPlayer, handleDisplayFlag }) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl mb-5">
        Selected Players (
        {selectedPlayers?.length > 0 ? selectedPlayers?.length : 0}/6)
      </h1>
      <div className="grid grid-cols-1 gap-5">

        {selectedPlayers?.map((selectedPlayer) => (
          <SelectedPlayer
            key={selectedPlayer.playerId}
            selectedPlayer={selectedPlayer}
            handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
          ></SelectedPlayer>
        ))}
      </div>

      {/* Add More Player Button */}
      <div className="border-2 border-black p-2 rounded-2xl transition-all mt-10 w-fit">
        <button
        onClick={handleDisplayFlag}
        className="btn bg-[#E7FE29] border-2 rounded-xl font-bold text-base  border-[#E7FE29] hover:bg-transparent hover:border-[#E7FE29] hover:text-black w-fit">
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
