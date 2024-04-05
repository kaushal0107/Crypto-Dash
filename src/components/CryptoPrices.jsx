import React, { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";

const CryptoPrices = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response.json();
        setBitcoinPrices(data.bpi);
      } catch (error) {
        console.error("Failed to fetch Bitcoin prices:", error);
      }
    };

    fetchPrices();
  }, []);

  const getBackgroundColor = (code) => {
    switch (code) {
      case "USD":
        return "bg-blue-500";
      case "EUR":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-xl text-white font-semibold">
        Bitcoin Current Price
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {Object.values(bitcoinPrices).map((currency, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg text-white p-6 w-full ${getBackgroundColor(
              currency.code
            )}`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 rounded-full p-3">
                <FaBitcoin className="text-3xl text-white" />
              </div>
              <h2 className="text-lg font-semibold ml-4">
                {currency.description}
              </h2>
            </div>
            <p className="text-white">Price: {currency.rate}</p>
            <p className="text-white">Symbol: {currency.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPrices;
