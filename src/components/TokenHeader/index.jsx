import React from "react";
import { MoonTokenData } from "../Data";
import MoonTokenSmallCard from "../UI/moonTokenSmallCard";

const TokenHeader = () => {
  return (
    <header>
      <div className="bg-[#00008c] h-fit py-8 px-4 lg:px-16 xl:px-32 flex justify-center xl:justify-between flex-col items-center xl:flex-row ">
        <div className="flex justify-around flex-col">
          <div className="flex items-center justify-center flex-col xl:flex-row  my-8 lg:my-0">
            <div>
              <img src="./moon.png" alt="" />
            </div>
            <div className="my-6 xl:my-0 md:pl-8 flex flex-col  justify-center items-center xl:items-start">
              <h3 className="text-3xl font-bold">Moon Token</h3>
              <div className="grid grid-cols-3 xl:grid-cols-2 gap-5 pt-4">
                <p className="flex items-center pr-4 text-sm text-gray-200">
                  <img
                    className="h-4 w-fit pr-2"
                    src="../etherscan-logo-light-circle.svg"
                    alt=""
                  />{" "}
                  Etherscans
                </p>
                <p className="text-sm text-gray-200">
                  <i className="fa-solid fa-globe h-4 w-fit pr-1 text-[#FFDF0C]"></i>{" "}
                  Website
                </p>
                <p className="text-sm text-gray-200">
                  <i className="fa-solid fa-link pr-1 h-4 w-fit text-[#FFDF0C]"></i>{" "}
                  Address
                </p>
                <p className="text-sm text-gray-200">
                  <i className="fa-brands fa-telegram pr-1 h-4 w-fit text-[#FFDF0C]"></i>{" "}
                  Telegram
                </p>
                <p className="flex items-center text-sm text-gray-200">
                  <i className="bg-[#FFDF0C]   py-1 px-[3px] mr-2 flex items-center justify-center text-black text-[8px] rounded-full fa-brands fa-discord"></i>
                  Discord
                </p>
                <p className="flex items-center text-sm text-gray-200">
                  <i className="bg-[#FFDF0C]   py-1 px-[4px] mr-1  text-black text-[8px] rounded-full fa-brands fa-twitter"></i>
                  Twitter
                </p>
              </div>
            </div>
            <div className="xl:ml-8 flex flex-row flex-wrap py-10 xl:py-0 justify-center">
              {MoonTokenData.map((item) => (
                <div className="mx-5 mb-10" key={item.id}>
                  <MoonTokenSmallCard
                    name={item.name}
                    value={item.value}
                    DateAndAmount={item.DateAndAmount}
                    DateAndAmountValue={item.DateAndAmountValue}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center object-contain">
          <div className="absolute">
            <img className=" h-44 w-fit" src="./rocket.png" alt="" />
          </div>
          <img
            className="h-28 w-fit object-contain relative left-16 top-7 "
            src="./rocket.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default TokenHeader;
