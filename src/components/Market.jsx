import React from "react";
import { FaEthereum, FaCoins } from "react-icons/fa";

const OtherCryptoPrices = () => {
  const otherCryptos = [
    { name: "Ethereum", symbol: "ETH", price: 4000 },
    { name: "Litecoin", symbol: "LTC", price: 180 },
    { name: "Ripple", symbol: "XRP", price: 1.5 },
    { name: "Stellar", symbol: "XLM", price: 0.8 },
    { name: "Cardano", symbol: "ADA", price: 2.3 },
  ];

  const getBackgroundColor = (symbol) => {
    switch (symbol) {
      case "ETH":
        return "bg-blue-500";
      case "LTC":
        return "bg-gray-400";
      case "XRP":
        return "bg-green-500";
      case "XLM":
        return "bg-indigo-500";
      case "ADA":
        return "bg-purple-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-xl text-white font-semibold">Market</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
        {otherCryptos.map((crypto, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg text-white p-3 sm:p-6 ${getBackgroundColor(
              crypto.symbol
            )}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="rounded-full p-2 sm:p-3">
                  {crypto.symbol === "ETH" && (
                    <FaEthereum className="text-2xl text-white" />
                  )}
                  {crypto.symbol === "LTC" && (
                    <FaCoins className="text-2xl text-white" />
                  )}
                  {!["ETH", "LTC"].includes(crypto.symbol) && (
                    <FaCoins className="text-2xl text-white" />
                  )}
                </div>
                <h2 className="text-base sm:text-lg font-semibold ml-4">
                  {crypto.name}
                </h2>
              </div>
            </div>
            <p className="text-white">Price: ${crypto.price}</p>
            <p className="text-white">Symbol: {crypto.symbol}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCryptoPrices;
