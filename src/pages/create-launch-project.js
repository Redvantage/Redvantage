import React, { useState } from "react";
import Link from "next/link";
const CreateLaunchProject = () => {
  const [Network, setNetwork] = useState(false);

  const handleNetworkClick = () => {
    setNetwork(!Network);
  };

  return (
    <div className="h-fit">
      {/* <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="defaultModal"
      >
        Toggle modal
      </button> */}

      <div
        id="defaultModal"
        aria-hidden="true"
        className="relative top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal grid place-items-center"
      >
        <div className="relative p-4 w-full max-w-5xl h-fit">
          <div className="relative bg-white rounded-lg shadow h-fit bg-[#3842C1]">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-[#000046] top-0 m-6 absolute right-0  rounded-full text-sm p-1.5  inline-flex items-center "
              data-modal-toggle="defaultModal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-6 items-start rounded-t border-b dark:border-gray-600 ">
              <div className="col-span-2 bg-[#000046] flex flex-col text-center items-center justify-center h-[70vh]">
                <img src="./rocket-illustration.png" alt="" />
                <h3 className="text-xl">Create a Launch Project</h3>
                <p className="text-xs px-16">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis praesentium laudantium corrupti asperiores, officia
                  possimus at beatae ex quam cum?
                </p>
              </div>
              <div className="col-span-4  flex flex-col mt-6 lg:mt-0 m-auto justify-around  h-full ">
                <div className="flex">
                  <div>
                    <label className="text-xs text-[#FFDF0C] mb-2">
                      1 of 2 completed
                    </label>
                    <div className="w-56 h-2 bg-white">
                      <div
                        className="bg-[#000046] h-2 "
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-[#FFDF0C] mb-3">Network</label>

                  <button
                    onClick={handleNetworkClick}
                    type="button"
                    className="inline-flex items-center justify-between h-8 px-4 w-72 rounded-md border border-black -2 bg-[#00008c] text-xs font-medium text-white "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <div className="flex ">
                      <img src="./ethereum.png" className="h-4 mr-2" alt="" />
                      <p>Etherium</p>
                    </div>
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {Network && (
                    <div
                      className="origin-top-right absolute mt-16 w-72 rounded-md shadow-lg bg-[#000046] cursor-pointer  ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <div
                          className="dark:text-white text-black block px-6 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          <div className="flex ">
                            <img
                              src="./ethereum.png"
                              className="h-4 mr-2"
                              alt=""
                            />
                            <p>Etherium</p>
                          </div>
                        </div>
                        <div
                          className="dark:text-white text-black block px-6 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-1"
                        >
                          <div className="flex ">
                            <img
                              src="./bitcoin.png"
                              className="h-4 mr-2"
                              alt=""
                            />
                            <p>Bitcoin</p>
                          </div>
                        </div>
                        <div
                          className="dark:text-white text-black block px-6 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-2"
                        >
                          <div className="flex ">
                            <img
                              src="./solana.png"
                              className="h-4 mr-2"
                              alt=""
                            />
                            <p>Solana</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <label className="text-xs text-[#FFDF0C] mb-3 mt-6">
                    Token Address
                  </label>

                  <input
                    placeholder="0x1234567..."
                    type="text"
                    className="bg-[#00008c] inline-flex items-center justify-between h-8 px-4 w-72 rounded-md border border-black -2  text-sm "
                  />

                  <label className="text-xs text-[#FFDF0C] mt-3 flex">
                    <img src="./rocket.png" className="h-4 mx-2" alt="" />
                    Moon Token
                  </label>
                  <Link href="/launch-project-step-2">
                    <button className=" flex items-end rounded py-2 px-4 bg-[#FFDF0C] hover:bg-[#FFDF0C]/95 text-black text-sm font-bold  ml-auto mt-4 flex ">
                      Next
                      <i className="fa-solid fa-arrow-right-long text-black pl-2"></i>
                    </button>
                  </Link>
                </div>
                <div className=" mb-8 lg:mb-0 lg:ml-[-130px]">
                  <img src="./dinger-face.png" className="h-32" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLaunchProject;
