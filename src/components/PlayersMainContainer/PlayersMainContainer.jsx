import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const PlayersMainContainer = ({
  handleSubCoin,
  totalCoin,
  handleRemovePlayerCoin,
}) => {
  const [displayFlag, setDisplayFlag] = useState(true);
  const [allPlayers, setAllPlayer] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("/players.json")
        .then((res) => res.json())
        .then((data) => setAllPlayer(data));
    };
    getData();
  }, []);

  const handleSelectedPlayer = (id, name, biddingPrice) => {
    if (selectedPlayers.length === 6) {
      toast.error("You can select a maximum of 6 players!");
      return;
    }

    const player = allPlayers?.find((player) => player.playerId === id);
    if (selectedPlayers.includes(player)) {
      toast.error("This player is already selected!");
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      handleSubCoin(biddingPrice);
      toast.success(`Player ${name} selected successfully.`);
    }
  };

  const handleRemoveSelectedPlayer = (id, name, price) => {
    setSelectedPlayers(
      selectedPlayers.filter((player) => player.playerId !== id)
    );
    handleRemovePlayerCoin(price);
    toast.warn(`Player ${name} removed successfully.`);
  };

  const handleDisplayFlag = () => {
    setDisplayFlag(true);
  };

  return (
    <div className="px-5 lg:px-0 mt-16 mb-16">
      <div className="flex flex-row justify-end mb-5">
        {/* Join Button */}
        {/* <div className="join">
          <input
            onChange={() => setDisplayFlag(true)}
            className={`join-item btn ${displayFlag === true ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}
            type="radio"
            // name="options"
            aria-label="Available"
          />
          <input
            onChange={() => setDisplayFlag(false)}
            className={`join-item btn ${displayFlag === false ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}
            type="radio"
            // name="options"
            aria-label={`Selected ${selectedPlayers?.length}`}
          />
        </div> */}

        <div className="flex overflow-hidden bg-white  divide-x rounded-lg rtl:flex-row-reverse border-[1px] dark:divide-gray-300">
          <button
            onClick={() => setDisplayFlag(true)}
            className={`${
              displayFlag ? "bg-[#E7FE29]" : ""
            } px-4 py-2 text-sm font-medium  transition-colors duration-200 sm:text-base sm:px-6 hover:bg-gray-100`}
          >
            Available
          </button>

          <button
            onClick={() => setDisplayFlag(false)}
            className={`${
              !displayFlag ? "bg-[#E7FE29]" : ""
            } px-4 py-2 text-sm font-medium  transition-colors duration-200 sm:text-base sm:px-6 hover:bg-gray-100`}
          >
            Selected ({selectedPlayers?.length})
          </button>
        </div>
      </div>

      {displayFlag ? (
        <Players
          allPlayers={allPlayers}
          totalCoin={totalCoin}
          handleSelectedPlayer={handleSelectedPlayer}
        >
          {" "}
        </Players>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
          handleDisplayFlag={handleDisplayFlag}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default PlayersMainContainer;
