import React from "react";
import SafetyAlert from "../safetyAlert";

const ProductDescription = () => {
  return (
    <div>
      <h3 className="text-xl font-bold">Product Description</h3>
      <p className="py-4 text-lg text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam
        suscipit sapiente, pariatur quo voluptates natus quam nesciunt maxime.
        Est possimus ab harum recusandae mollitia dignissimos debitis sapiente
        impedit accusantium!
      </p>
      <p className="text-lg text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem
        repudiandae sint provident nesciunt nostrum sequi odio nulla hic
        numquam? Deleniti, reiciendis? Officiis, ullam distinctio?
      </p>
      <div className="flex items-center mt-6 flex-wrap">
        <input
          placeholder="0.00 ETH"
          type="text"
          className="bg-transparent pl-4 w-full lg:w-[15vw] h-8 outline outline-1  text-sm "
        />
        <div className="">
          <button className=" flex items-end rounded py-2 px-4 bg-[#FFDF0C] hover:bg-[#FFDF0C]/95 text-black text-sm font-bold mt-4 lg:mt-0 lg:ml-6 flex">
            Enter Sale
            <i className="fa-solid fa-arrow-right-long text-black pl-2"></i>
          </button>
        </div>
      </div>
      <div className="flex pt-4">
        <div>
          <p className="text-sm">Contributed Amount</p>
          <p className="text-[#FFDF0C]">0.2ETH</p>
        </div>
        <div className="pl-10">
          <p className="text-sm">Moon Token</p>
          <p className="text-[#FFDF0C]">100,000</p>
        </div>
      </div>
      <div className="mt-6">
        <SafetyAlert />
      </div>
    </div>
  );
};

export default ProductDescription;
