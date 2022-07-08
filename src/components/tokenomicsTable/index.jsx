import React from "react";
import { tokenomicsTableData } from "../Data";

const TokenmomicsTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table className="drop-shadow-2xl border-2 border-[#020f97] rounded w-full text-md text-left bg-gradient-to-r from-[#0515B6] via-[#0a1ce9] to-[#0515B6] ">
        <thead className="text-lg leading-10   ">
          <tr className="">
            <th scope="col" className="px-4 lg:px-10 py-3">
              TOKENOMICS
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#00008c] font-light">
          {tokenomicsTableData.map((item) => (
            <>
              <tr className="" key={item.id}>
                <td className="px-4 lg:px-10 py-4 text-sm">Hard Cap</td>
                <td className="px-4 lg:px-10 py-4 text-sm">{item.hardCap}</td>
              </tr>
              <tr className="" key={item.id}>
                <td className="px-4 lg:px-10 py-4 text-sm">Total Supply</td>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  {item.totalSupply}
                </td>
              </tr>
              <tr className="" key={item.id}>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  Public Sale Token Price
                </td>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  {item.publicSaleTokenPrice}
                </td>
              </tr>
              <tr className="" key={item.id}>
                <td className="px-4 lg:px-10 py-4 text-sm">Tokens Offered</td>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  {item.tokensOffered}
                </td>
              </tr>
              <tr className="" key={item.id}>
                <td className="px-4 lg:px-10 py-4 text-sm">Max Per User</td>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  {item.maxPerUser}
                </td>
              </tr>
              <tr className="" key={item.id}>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  Token Sale Vesting Period
                </td>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  {item.tokenSaleVestingPeriod}
                </td>
              </tr>
              <tr className="" key={item.id}>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  Token Distribution
                </td>
                <td className="px-4 lg:px-10 py-4 text-sm">
                  {item.tokenDistribution}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenmomicsTable;
