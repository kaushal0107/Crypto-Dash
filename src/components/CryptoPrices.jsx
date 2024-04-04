import React, { useState, useEffect } from 'react';
import { FaBitcoin } from "react-icons/fa";

const CryptoPrices = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState({});


  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
          setBitcoinPrices(data.bpi);
      } catch (error) {
        console.error("Failed to fetch Bitcoin prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
      {Object.values(bitcoinPrices).map((currency, index) => (
        <div key={index} className="card text-white text-left">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 rounded-full p-2">
            <FaBitcoin />
            </div>
            <h2 className="text-lg font-semibold ml-2">{currency.description}</h2>
          </div>
          <p className="text-white">Price: {currency.rate}</p>
          <p className="text-white">Code: {currency.code}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoPrices;
