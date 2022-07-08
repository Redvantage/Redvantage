import Link from "next/link";
import React from "react";

const UpcomingCard = ({
  id,
  Name,
  NameValue,
  Status,
  SoftCap,
  HardCap,
  Participants,
  LoadingBar,
  LoadingValue,
}) => {
  return (
    <Link href={`/${id}`}>
      <div className="w-72 h-fit px-4  py-6 rounded bg-[#00008c] cursor-pointer">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
              alt=""
            />
            <div className="ml-2">
              <h2 className="font-bold">{Name}</h2>
              <p className="italic text-xs text-[#FFDF0C]">{NameValue}</p>
            </div>
          </div>
          <div>
            <button className="py-1 px-3 text-black f-bold text-xs flex justify-center items-center rounded-full bg-[#3AFF00]">
              <i className="fas fa-circle text-black text-[8px] mr-1"></i>
              {Status}
            </button>
          </div>
        </div>
        <div className="flex justify-between pt-6">
          <div>
            <p className="text-xs">Soft Cap</p>
            <p className="text-[#FFDF0C]">{SoftCap}</p>
          </div>
          <div>
            <p className="text-xs">Hard Cap</p>
            <p className="text-[#FFDF0C]">{HardCap}</p>
          </div>
          <div>
            <p className="text-xs">Participants</p>
            <p className="text-[#FFDF0C]">{Participants}</p>
          </div>
        </div>
        <div className="py-6">
          <p className="italic text-[11px]">%Raised</p>
          <div className="my-1">
            <div className="w-full bg-white rounded-full h-2.5">
              <div
                className="bg-[#FFDF0C] h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="italic text-[11px] text-[#FFDF0C] flex justify-between">
            <p className="text-[#FFDF0C]">{LoadingBar} Full</p>
            <p className="text-[#FFDF0C]">{LoadingValue}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UpcomingCard;
