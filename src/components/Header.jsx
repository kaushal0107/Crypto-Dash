import React from "react";
import MetaMaskIntegration from "./MetaMaskIntegration";

const Header = () => {
  const userName = "Kaushal Mishra";

  return (
    <header className=" text-white p-4 text-left px-4 sm:px-6 lg:px-8 flex justify-between">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            Hello,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              {userName}
            </span>{" "}
          </h1>
          <p className="text-sm">
            Welcome to{" "}
            <span class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Carbon cell
            </span>
          </p>
        </div>
      </div>
      <div>
        <MetaMaskIntegration />
      </div>
    </header>
  );
};

export default Header;
