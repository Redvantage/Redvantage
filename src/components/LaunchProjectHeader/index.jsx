import React from "react";
import Link from "next/link";

const LaunchProjectHeader = () => {
  return (
    <header>
      <div className="bg-[#00008c] h-fit py-6 px-4 lg:px-16 xl:px-32 flex justify-between flex-col lg:flex-row">
        <div className="flex justify-around flex-col">
          <div>
            <label className="text-xs text-[#FFDF0C]">2 of 2 completed</label>
            <div className="w-56 h-2 bg-white mt-1">
              <div
                className="bg-[#000046] h-2 "
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-col lg:flex-row my-8 lg:my-0">
            <div>
              <img src="./moon.png" alt="" />
            </div>
            <div className="md:pl-8 mt-12 md:mt-0">
              <h3 className="text-3xl font-bold mb-4">Moon Token</h3>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Add Link"
                  className="block py-2.5 px-0 w-52 text-sm text-white bg-transparent border-0 border-b-2  appearance-none    focus:outline-none focus:ring-0 "
                  placeholder="Add Website URL"
                  required
                />
                <div className="rounded-full h-4 absolute right-0 top-4 justify-center w-4 text-lg  flex items-center bg-[#FFDF0C] cursor-pointer text-black ">
                  +
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Add Link"
                  className="block py-2.5 px-0 w-52 text-sm text-white bg-transparent border-0 border-b-2  appearance-none    focus:outline-none focus:ring-0 "
                  placeholder="Add Address"
                  required
                />
                <div className="rounded-full h-4 absolute right-0 top-4 justify-center w-4 text-lg  flex items-center bg-[#FFDF0C] cursor-pointer text-black ">
                  +
                </div>
              </div>
            </div>
            <div className="md:pl-8 mb-3.5">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Add Link"
                  className="block py-2.5 px-0 w-52 text-sm text-white bg-transparent border-0 border-b-2  appearance-none    focus:outline-none focus:ring-0 "
                  placeholder="Add Telegram Link"
                  required
                />
                <div className="rounded-full h-4 absolute right-0 top-4 justify-center w-4 text-lg  flex items-center bg-[#FFDF0C] cursor-pointer text-black ">
                  +
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Add Link"
                  className="block py-2.5 px-0 w-52 text-sm text-white bg-transparent border-0 border-b-2  appearance-none    focus:outline-none focus:ring-0 "
                  placeholder="Add Twitter Link"
                  required
                />
                <div className="rounded-full h-4 absolute right-0 top-4 justify-center w-4 text-lg  flex items-center bg-[#FFDF0C] cursor-pointer text-black ">
                  +
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Add Link"
                  className="block py-2.5 px-0 w-52 text-sm text-white bg-transparent border-0 border-b-2  appearance-none    focus:outline-none focus:ring-0 "
                  placeholder="Add Discord Link"
                  required
                />
                <div className="rounded-full h-4 absolute right-0 top-4 justify-center w-4 text-lg  flex items-center bg-[#FFDF0C] cursor-pointer text-black ">
                  +
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

export default LaunchProjectHeader;
