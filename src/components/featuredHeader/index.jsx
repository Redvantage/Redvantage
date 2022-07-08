import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="bg-[#00008c] h-fit py-6 px-4 lg:px-16 xl:px-32 flex justify-between flex-col lg:flex-row">
        <div className="flex justify-around flex-col">
          <div className="flex items-center justify-between md:justify-center lg:justify-start">
            <h2 className="text-2xl font-bold">Featured Pool</h2>
            <Link href="/create-launch-project">
              <button className="rounded py-2 px-4 bg-[#FFDF0C] hover:bg-[#FFDF0C]/95 text-black text-sm font-bold ml-10 flex">
                <div className="rounded-lg px-[6px] py-0 mr-2 bg-[#FDEF9D] text-black ">
                  +
                </div>
                Create New Pool
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-between flex-col lg:flex-row my-8 lg:my-0">
            <div>
              <img src="./moon.png" alt="" />
            </div>
            <div className="md:pl-8 mt-12 md:mt-0">
              <h3 className="text-2xl font-bold">Moon Token</h3>
              <p className="text-lg text-[#FFDF0C]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores
              </p>
              <div className="flex justify-between text-lg flex-wrap items-center mt-6 sm:mt-2">
                <div className="flex-[1_50%] xl:flex-1 font-bold ">
                  <p className="flex items-center">
                    <i className="fas fa-percentage rounded-full px-[5px] py-[3px] mr-2 bg-white text-black font-bolder text-[10px]"></i>
                    Sale Price
                  </p>

                  <p className="text-[#FFDF0C] ">1 ETH = 0.345 MT</p>
                </div>
                <div className="flex-[1_50%] xl:flex-initial px-6 font-bold ">
                  <p>
                    <i className="fas fa-money-bill mr-2 text-sm"></i>
                    Total Committed
                  </p>
                  <p className="text-[#FFDF0C]">1000,347.00</p>
                </div>
                <div className="flex-[1_50%] xl:flex-initial font-bold ">
                  <p>
                    <i className="fas fa-user mr-2 text-sm"></i>
                    Participants
                  </p>
                  <p className="text-[#FFDF0C]">34011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center">
          <img src="./dinger-coi.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
