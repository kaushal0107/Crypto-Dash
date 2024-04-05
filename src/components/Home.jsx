import React from "react";
import CryptoPrices from "./CryptoPrices";
import PopulationGraph from "./Graph";
import Header from "./Header";
import OtherCryptoPrices from "./Market";

const Home = () => {
  return (
    <>
      <Header />
      <div className="">
        <PopulationGraph />
      </div>
      <div className="flex  px-4 py-3 sm:px-6 lg:px-8">
        <CryptoPrices />
      </div>
      <div className="flex  px-4 py-3 sm:px-6 lg:px-8">
        <OtherCryptoPrices />
      </div>
    </>
  );
};

export default Home;
