import React, { useState, useEffect } from 'react';

const MetaMaskIntegration = () => {
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);
  
    useEffect(() => {
      checkMetaMaskInstalled();
    }, []);
  
    // Function to check if MetaMask is installed
    const checkMetaMaskInstalled = () => {
      if (window.ethereum) {
        setIsMetaMaskInstalled(true);
      } else {
        setIsMetaMaskInstalled(false);
      }
    };

  // Function to connect MetaMask wallet
  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletConnected(true);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setWalletConnected(false);
    }
  };

  return (
    <div className="mt-4 text-white">
      {!isMetaMaskInstalled && (
        <p>MetaMask is not installed. Please install MetaMask to connect your wallet.</p>
      )}
      {isMetaMaskInstalled && !walletConnected && (
        <button
          onClick={connectWallet}
          className="text-lg font-medium px-4 py-2 bg-green-700 hover:bg-green-800 text-white cursor-pointer rounded-sm"
        >
          Connect MetaMask Wallet
        </button>
      )}
      {walletConnected && (
        <p className='text-green-700 font-medium text-base'>MetaMask Wallet Connected Successfully!</p>
      )}
    </div>
  );
};

export default MetaMaskIntegration;
