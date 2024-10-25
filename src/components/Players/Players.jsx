import React from "react";
import Player from "../Player/Player";

const Players = ({ allPlayers, totalCoin, handleSelectedPlayer }) => {
  return (
    <div className="">
      <h1 className="mb-5 font-bold text-2xl">Available Players</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allPlayers?.map((player) => (
          <Player 
          key={player.playerId} 
          player={player}
          totalCoin={totalCoin}
          handleSelectedPlayer={handleSelectedPlayer}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
