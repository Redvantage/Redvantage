import React, { useState } from "react";
import SearchBar from "../searchBar";
import { tableData } from "../Data";

const ProjectTable = () => {
  const [filteredData, setfilteredData] = useState(tableData);
  const handleSearch = (e) => {
    const temp = tableData.filter((x) =>
      x.ProjectName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilteredData(temp);
  };

  return (
    <div className="h-fit py-16">
      <SearchBar handleSearch={handleSearch} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-4">
        <table className="w-full text-md text-center  ">
          <thead className="text-lg leading-10   ">
            <tr className="">
              <th scope="col" className=" px-6 py-3">
                Project name
              </th>
              <th scope="col" className=" px-6 py-3">
                Sale Price
              </th>
              <th scope="col" className=" px-6 py-3">
                No of Participants
              </th>
              <th scope="col" className=" px-6 py-3">
                Amount Raised
              </th>
              <th scope="col" className=" px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#00008c] font-light">
            {filteredData.map((item) => (
              <tr className="" key={item.id}>
                <th
                  scope="row"
                  className=" px-6 py-4  font-medium  whitespace-nowrap flex items-center justify-center"
                >
                  <img
                    className="rounded-full h-12 w-12 "
                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-center pl-2">
                    <p>{item.ProjectName}</p>
                    <p className="text-[#FFDF0C] italic text-[11px]">
                      {item.ProjectNameCompletion} Full
                    </p>
                  </div>
                </th>
                <td className=" px-6 py-4">{item.SalePrice}</td>
                <td className=" px-6 py-4">{item.NoOfParticipants}</td>
                <td className=" px-6 py-4">{item.AmountRaised}</td>
                <td className=" px-6 py-4 text-[#3AFF00]">
                  {item.Status}
                  <i className="fa-solid fa-moon ml-1 text-xs text-[#3AFF00]"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
