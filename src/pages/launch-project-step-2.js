import React from "react";
import LaunchProjectHeader from "../components/LaunchProjectHeader";

const LaunchProjectStep2 = () => {
  return (
    <div className="h-fit flex justify-center flex-col">
      <div className="mb-8 flex flex-col">
        <LaunchProjectHeader />
      </div>
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-20 px-4 lg:px-16 xl:px-32">
        <div className="mt-12">
          <textarea
            id="message"
            rows="13"
            className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[#00008c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Description"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 m-auto gap-10 md:grid-cols-2 mt-12">
          <div className="flex flex-col">
            <div className="mb-8 flex flex-col">
              <label className="text-sm text-[#FFDF0C] mb-3 ">Soft Cap</label>

              <input
                placeholder="100"
                type="number"
                className="bg-[#00008c] inline-flex items-center justify-between h-10 px-4 w-56 rounded-md border border-black-2  text-sm "
              />
            </div>
            <div className="mb-8 flex flex-col">
              <label className="text-sm text-[#FFDF0C] mb-3 ">
                Min Contribution
              </label>

              <input
                placeholder="0.5 ETH"
                type="number"
                className="bg-[#00008c] inline-flex items-center justify-between h-10 px-4 w-56 rounded-md border border-black-2  text-sm "
              />
            </div>
            <div className="mb-8 flex flex-col">
              <label className="text-sm text-[#FFDF0C] mb-3 ">
                Presale rate (1 Eth =)
              </label>

              <input
                placeholder="% of Supply"
                type="number"
                className="bg-[#00008c] inline-flex items-center justify-between h-10 px-4 w-56 rounded-md border border-black-2  text-sm "
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-8 flex flex-col">
              <label className="text-sm text-[#FFDF0C] mb-3 ">Hard Cap</label>

              <input
                placeholder="100"
                type="number"
                className="bg-[#00008c] inline-flex items-center justify-between h-10 px-4 w-56 rounded-md border border-black-2  text-sm "
              />
            </div>
            <div className="mb-8 flex flex-col">
              <label className="text-sm text-[#FFDF0C] mb-3 ">
                Max Contribution
              </label>

              <input
                placeholder="3 ETH"
                type="number"
                className="bg-[#00008c] inline-flex items-center justify-between h-10 px-4 w-56 rounded-md border border-black-2  text-sm "
              />
            </div>
            <div className="mb-8 flex flex-col">
              <label className="text-sm text-[#FFDF0C] mb-3 flex">
                Vest Tokens
                <label
                  htmlFor="default-toggle"
                  className="inline-flex ml-3 relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className="sr-only peer"
                  />

                  <div className="w-8 h-3.5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-[#FFDF0C]"></div>
                </label>
              </label>
              <input
                placeholder="eg. 0.5% of tokens every day"
                type="text"
                className="bg-[#00008c] inline-flex items-center justify-between h-10 px-4 w-56 rounded-md border border-black-2  text-sm "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-10">
        <button className=" flex items-end rounded py-2 px-10 bg-[#FFDF0C] hover:bg-[#FFDF0C]/95 text-black text-sm font-bold  ml-auto mt-4 flex ">
          Confirm
          <i className="fa-solid fa-arrow-right-long text-black pl-2"></i>
        </button>
      </div>
    </div>
  );
};

export default LaunchProjectStep2;
