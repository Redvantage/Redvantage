import React from "react";

const Footer = () => {
  return (
    <div className="py-6 px-4 lg:px-16 xl:px-32 flex flex-col justify-center items-center md:flex-row md:justify-between">
      <div className="pb-6 md:pb-0">
        <h2>Schro-Dinger @ 2022, All rights reserved.</h2>
      </div>
      <div className="flex cursor-pointer">
        <img
          className="bg-[#229ED9] mr-2 rounded-full h-8 text-white"
          src="../telegram.png"
          alt=""
        />
        <i className="bg-[#FF4500] mr-2 p-2 rounded-full fa-brands fa-reddit-alien"></i>
        <i className="bg-[#5865F2] mr-2 p-2 rounded-full fa-brands fa-discord"></i>
        <i className="bg-[#00acee] p-2 rounded-full fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default Footer;
