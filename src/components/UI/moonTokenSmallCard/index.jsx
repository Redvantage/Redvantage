import React from "react";

const MoonTokenSmallCard = ({
  name,
  value,
  DateAndAmount,
  DateAndAmountValue,
}) => {
  return (
    <div>
      <div className="flex flex-col py-1 px-4 drop-shadow-2xl border-2 border-[#0515B6] rounded bg-gradient-to-r from-[#0515B6] via-[#0a1ce9] to-[#0515B6]">
        <h3 className="text-white text-sm">{name}</h3>
        <p className="text-[#FFDF0C] font-bold">{value}</p>
      </div>
      <div className="pt-4">
        <h3>
          {DateAndAmount}:
          <span className="italic text-gray-300 text-xs pl-1">
            {DateAndAmountValue}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default MoonTokenSmallCard;
