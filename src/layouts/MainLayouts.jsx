import { useState } from "react";
import { toast } from "react-toastify";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import PlayersMainContainer from "../components/PlayersMainContainer/PlayersMainContainer";

const MainLayouts = () => {
  const [totalCoin, setCotalCoin] = useState(0);

  const handleAddCoin = () => {
    setCotalCoin(totalCoin + 500000);
    toast.success("Coins added successfully");
  };

  const handleRemovePlayerCoin = (price) => {
    setCotalCoin(totalCoin + price);
  };

  const handleSubCoin = (coin) => {
    setCotalCoin(totalCoin - coin);
  };

  return (
    <div>
      <div className="lg:px-0 container mx-auto">
        {/* Navbar */}
        <Navbar totalCoin={totalCoin}></Navbar>

        {/* Banner */}
        {/* <Banner handleAddCoin={handleAddCoin}></Banner> */}
        <div className="px-5 lg:px-0">
          <Banner handleAddCoin={handleAddCoin}></Banner>
        </div>

        {/* Players Container */}
        <PlayersMainContainer
          handleSubCoin={handleSubCoin}
          totalCoin={totalCoin}
          handleRemovePlayerCoin={handleRemovePlayerCoin}
        ></PlayersMainContainer>
      </div>

      <div className="relative z-10">
        <div className="px-5 lg:px-10 z-10">
          <Newsletter></Newsletter>
        </div>
        <div className="absolute top-1/2 -z-10 w-full">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
